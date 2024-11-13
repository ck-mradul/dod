import { downloadFile, getBase64 } from "@/app/core/helperMethods";
import { DownloadOutlined, PlusOutlined } from "@ant-design/icons";
import type { GetProp, UploadFile, UploadProps } from "antd";
import { Avatar, Badge, Image, Modal, Tooltip, Upload, message } from "antd";
import React, { useCallback, useEffect, useState } from "react";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

interface FileUploadProps {
  files?: {
    id: string | number;
    image_url: string;
    approval_status?: number;
  }[];
  disabled?: boolean;
  onChange?: (file: UploadFile, fileList: UploadFile[]) => void;
  accept?: string;
  maxSize?: number;
  onRemove?: any;
  maxCount?: number;
  isDownloaded?: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({
  files = [],
  disabled = false,
  onChange,
  accept = "",
  maxSize = 50 * 1024 * 1024,
  onRemove,
  maxCount,
  isDownloaded = false,
}) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  useEffect(() => {
    if (Array.isArray(files) && files.length && files.length > 0) {
      setFileList(
        files.map((file) => ({
          uid: file.id.toString(),
          name: `image_${file.id}.png`,
          status: "done",
          url: file.image_url,
          approval_status: file.approval_status,
        }))
      );
    }
  }, [files]);

  const handlePreview = useCallback(async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  }, []);

  const handleRemove = useCallback(
    (file: UploadFile) => {
      const { confirm } = Modal;

      return new Promise<void>((resolve, reject) => {
        confirm({
          title: "Are you sure you want to delete?",
          onOk: async () => {
            setFileList((prevFileList) =>
              prevFileList.filter((f) => f.uid !== file.uid)
            );
            onRemove?.(file);
            resolve();
          },
          onCancel: () => {
            reject();
          },
          okButtonProps: { style: { background: "#17BE9F" } },
        });
      });
    },
    [onRemove]
  );

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const beforeUpload = useCallback(
    (file: File) => {
      const isLtSize = file.size <= maxSize;
      if (!isLtSize) {
        message.error(
          `Image must be smaller than ${maxSize / (1024 * 1024)}MB!`
        );
        const errorFile = { ...file, status: "error" };
        setFileList((prevFileList: any) => [...prevFileList, errorFile]);
      }
      return isLtSize;
    },
    [maxSize]
  );

  const handleFileChange = useCallback(
    (info: { file: UploadFile; fileList: UploadFile[] }) => {
      const { file, fileList } = info;
      setFileList(fileList);
      if (onChange) {
        onChange(file, fileList);
      }
    },
    [onChange]
  );

  return (
    <>
      <Upload
        multiple={true}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        beforeUpload={beforeUpload}
        onChange={handleFileChange}
        disabled={disabled}
        onRemove={handleRemove}
        accept={accept}
        maxCount={maxCount}
        itemRender={(originNode, file: any) => {
          const approvalStatus = file.approval_status;
          return (
            <>
              {isDownloaded ? (
                <div className="badge-image mb-4 w-[250px] h-[180px] flex flex-col items-center justify-center relative md:w-[180px] md:h-[150px]">
                  {approvalStatus === 2 ? (
                    <Badge.Ribbon
                      text="Rejected"
                      style={{ backgroundColor: "red", color: "red" }}
                    >
                      {originNode}
                    </Badge.Ribbon>
                  ) : approvalStatus === 1 ? (
                    <Badge.Ribbon
                      text="Approved"
                      style={{ backgroundColor: "#17be9f" }}
                    >
                      {originNode}
                    </Badge.Ribbon>
                  ) : (
                    originNode
                  )}
                  {isDownloaded && (
                    <Tooltip title="Download image">
                      <Avatar
                        shape="square"
                        size={34}
                        className="download-button cursor-pointer"
                        style={{
                          position: "absolute",
                          bottom: "10px",
                          right: "10px",
                          textAlign: "end",
                          background: "#17be9f",
                          zIndex: "0",
                        }}
                        icon={<DownloadOutlined />}
                        onClick={() => downloadFile(file.url)}
                      />
                    </Tooltip>
                  )}
                </div>
              ) : (
                originNode
              )}
            </>
          );
        }}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <Image
          wrapperStyle={{ display: "none" }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
          alt={"Image"}
        />
      )}
    </>
  );
};

export default React.memo(FileUpload);
