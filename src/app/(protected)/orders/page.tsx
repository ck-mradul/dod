"use client";

// components/tabs/OrdersTab.tsx
import React from "react";
import { Breadcrumb, Table } from "antd";
import type { TableColumnsType } from "antd";
import SegmentHeading from "@/components/commonComponents/SegmentHeading";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  description: string;
}

const columns: TableColumnsType<DataType> = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Address", dataIndex: "address", key: "address" },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <a>Delete</a>,
  },
];

const data: DataType[] = [
  {
    key: 1,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
  },
  {
    key: 2,
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    description:
      "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
  },
  {
    key: 3,
    name: "Not Expandable",
    age: 29,
    address: "Jiangsu No. 1 Lake Park",
    description: "This not expandable",
  },
  {
    key: 4,
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    description:
      "My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.",
  },
];

const OrdersTab: React.FC = () => {
  return (
    <div className="w-full ">
      <div className="flex !my-8 secondaryColor h-10 pl-5 ">
        <Breadcrumb
          className="!flex !items-center"
          items={[
            {
              href: "",
              title: "Home",
            },
            {
              href: "",
              title: "Order List",
            },
          ]}
        />
      </div>
      <SegmentHeading text="All Orders List" icon={true} />
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.description}</p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={data}
        scroll={{ y: 240 }}
      />
    </div>
  );
};

export default OrdersTab;
