"use client";

import React from "react";
import type { TableColumnsType } from "antd";
import SegmentHeading from "@/components/commonComponents/SegmentHeading";
import Filters from "./_components/filters";
import MyButton from "@/components/commonComponents/button";
import DataTable from "./_components/DataTable";

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
    <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-40">
      {/* <div className="flex !my-8 secondaryColor h-10 pl-5 ">
        <Breadcrumb
          className="!flex !items-center"
          items={[
            {
              href: "/",
              title: "Home",
            },
            {
              href: "/orders",
              title: "Order List",
            },
          ]}
        />
      </div> */}
      <div className="flex justify-between items-center ">
        <SegmentHeading text="All Orders List" icon={false} />
        <div className="d-flex flex-wrap">
          <MyButton
            className="ml-3 !shadow-none"
            customLabel="Bulk Image Download"
          />
          <MyButton
            className="ml-3 !shadow-none"
            customLabel=" Export Report"
          />
          <MyButton className="ml-3 !shadow-none" customLabel="Add New" />
        </div>
      </div>
      <Filters />
      <div className="bg-white  border-x border-y mb-2 ">
        <DataTable
        // debouncedSearch={debouncedSearch}
        // assignId={assignId}
        // tabId={tabId}
        // formattedEndDate={formattedEndDate}
        // formattedStartDate={formattedStartDate}
        // sortByDesignerId={sortByDesignerId}
        // id={tabIndex}
        // activeTab={items?.find((item) => +item.key == tabIndex)}
        // permissions={permissions}
        // setSelectedRowKeysLocal={setSelectedRowKeysLocal}
        // setTabId={setTabId}
        // refetchTabs={refetchTabs}
        // setSpecialCase={setSpecialCase}
        // specialCase={specialCase}
        />
      </div>
    </div>
  );
};

export default OrdersTab;
