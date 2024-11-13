import { Card } from "antd";
import Link from "next/link";
import React from "react";

interface DashBoardCardProps {
  title?: string;
  value?: any;
  icon?: React.ReactNode;
  subLitle?: string;
  url?: string;
}

const DashBoardCard: React.FC<DashBoardCardProps> = ({
  title,
  value,
  icon,
  subLitle,
  url,
}) => {
  return (
    <Card
      bordered={false}
      size="small"
      className="!rounded-2xl !shadow-md !mb-4 !bg-white "
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-gray-600 text-lg font-semibold">{title}</h4>
        <div className="text-2xl text-blue-900">{icon}</div>
      </div>

      <h1 className="text-4xl font-bold text-gray-800 mb-2">{value}</h1>

      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">{subLitle}</p>
        {url && (
          <Link href={url} className="text-blue-900 underline">
            View
          </Link>
        )}
      </div>
    </Card>
  );
};

export default DashBoardCard;
