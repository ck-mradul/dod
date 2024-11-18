import { useState } from "react";
import { DatePicker, Input, Select, Space } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { useDebounce } from "@/app/core/helperMethods";
import SortByDesignerSelect from "@/components/commonComponents/SortByDesigner";

const { Search } = Input;
const { RangePicker } = DatePicker;
const { Option } = Select;

const designers = [
  { id: 1, Value: "New", name: "New" },
  { id: 2, Value: "In Production", name: "In Production" },
  { id: 3, Value: "Shipping", name: "Shipping" },
  { id: 4, Value: "Complete", name: "Complete" },
];

const statusesT = [
  {
    id: 1,
    index: 1,
    name: "New",
    description: "New",
    slug: "new",
    status: 1,
    created_at: "2024-09-18T07:30:31.000000Z",
    updated_at: "2024-09-18T07:30:31.000000Z",
  },
  {
    id: 2,
    index: 2,
    name: "Assigned Designer",
    description: "Assigned Designer",
    slug: "assigned-designer",
    status: 1,
    created_at: "2024-09-18T07:30:31.000000Z",
    updated_at: "2024-09-18T07:30:31.000000Z",
  },
  {
    id: 3,
    index: 3,
    name: "Quality Analyst",
    description: "Quality Analyst",
    slug: "quality_analyst",
    status: 1,
    created_at: "2024-09-18T07:30:31.000000Z",
    updated_at: "2024-09-18T07:30:31.000000Z",
  },
  {
    id: 4,
    index: 4,
    name: "Waiting for approval",
    description: "Send for Approval",
    slug: "send-for-approval",
    status: 1,
    created_at: "2024-09-18T07:30:31.000000Z",
    updated_at: "2024-09-18T07:30:31.000000Z",
  },
];

const Filters = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const today = dayjs();
  const oneMonthAgo = today.subtract(1, "month");
  const [defaultDates, setDefaultDates] = useState<[Dayjs, Dayjs]>([
    oneMonthAgo,
    today,
  ]);

  const handleSearchChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearch(event.target.value);
  };

  const handleDateChange = (dates: [Dayjs | null, Dayjs | null] | null) => {
    if (!dates || dates[0] === null || dates[1] === null) {
      setDefaultDates([oneMonthAgo, today]);
    } else {
      setDefaultDates([dates[0], dates[1]]);
    }
  };

  return (
    <div className="mb-6 ">
      <div className="p-4 rounded-xl bg-white">
        <p className="mb-2 text-[18px] leading-[24px]">Filters</p>
        <Space className="flex">
          <div className="flex flex-col">
            <label>
              <h4 className="mb-1 ">Search By ID</h4>
            </label>
            <Search
              className="w-100"
              placeholder="Order ID"
              value={search}
              onChange={handleSearchChange}
              allowClear
              type="pro"
              // enterButton="Search"
            />
          </div>
          <div className="flex flex-col ">
            <label>
              <h4 className="mb-1">Filter By Date</h4>
            </label>
            <RangePicker
              key={defaultDates.toString()}
              value={defaultDates}
              format="YYYY-MM-DD"
              onChange={(date) => handleDateChange(date as [Dayjs, Dayjs])}
              onCalendarChange={(dates) => {
                if (!dates) handleDateChange(null);
              }}
            />
          </div>
          <div className="flex flex-col">
            <label>
              <h4 className="mb-1">Sorting Status</h4>
            </label>
            <SortByDesignerSelect designers={designers} />
          </div>
          {/* <div className="flex flex-col">
            <label>
              <h4 className="mb-1">Assign To</h4>
            </label>
            <Select
              style={{ width: "100%" }}
              placeholder="Assign To Designer"
              allowClear
            >
              {designers.map((designer) => (
                <Option key={designer.id} value={designer.id}>
                  {designer.name}
                </Option>
              ))}
            </Select>
          </div> */}
          {/* <div className="flex flex-col">
            <label>
              <h4 className="mb-1">Change status</h4>
            </label>
            <Select
              style={{ width: "100%" }}
              placeholder="Change Status"
              allowClear
            >
              {statusesT.map((status) => (
                <Option key={status.id} value={status.id}>
                  {status?.name}
                </Option>
              ))}
            </Select>
          </div> */}
        </Space>
      </div>
    </div>
  );
};

export default Filters;
