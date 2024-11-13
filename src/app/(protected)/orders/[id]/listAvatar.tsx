import { Avatar } from "antd";
import { ReactNode } from "react";

interface ListAvatarProps {
  iconImage: ReactNode;
  titleHeading: string;
  titleName: string;
}

const ListAvatar: React.FC<ListAvatarProps> = ({
  iconImage,
  titleHeading,
  titleName,
}) => {
  return (
    <div className="flex">
      <div>
        <Avatar
          shape="square"
          style={{ backgroundColor: "#a3d7f7" }}
          //   size={48}
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 40, xxl: 48 }}
          icon={iconImage}
        />
      </div>
      <div className="mx-4">
        <strong>{titleHeading}</strong>
        <div className="text-[14px] text-[#6D6D6D]">
          {titleName || "Not Available"}
        </div>
      </div>
    </div>
  );
};

export default ListAvatar;
