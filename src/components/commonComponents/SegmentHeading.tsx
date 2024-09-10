"use client";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Head from "next/head";
import { useRouter } from "next/navigation";
interface SegmentHeadingProps {
  text: string;
  icon: boolean;
}

const SegmentHeading: React.FC<SegmentHeadingProps> = ({ text, icon }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{text}</title>
      </Head>
      <div>
        <h1 className="my-4 flex font-bold text-2xl">
          {icon && (
            <ArrowLeftOutlined
              style={{ fontSize: "20px", verticalAlign: "inherit" }}
              onClick={() => router.back()}
              className="me-3"
            />
          )}
          {text}
        </h1>
      </div>
    </>
  );
};
export default SegmentHeading;
