"use client";

import { firstLetterCapitalize } from "@/app/core/helperMethods";
import { Select } from "antd";
import React from "react";

const { Option } = Select;

interface Designer {
  id: number;
  name: string;
}

interface SortByDesignerSelectProps {
  designers?: Designer[];
  setSortByDesignerId?: any;
  autoFocus?: boolean;
  dropdownVisible?: boolean;
  onDropdownVisibleChange?: (visible: boolean) => void;
  disabled?: boolean;
}

const SortByDesignerSelect: React.FC<SortByDesignerSelectProps> = ({
  designers = [],
  // setSortByDesignerId,
  // autoFocus = false,
  // dropdownVisible = false,
  // onDropdownVisibleChange = () => {},
  // disabled = false,
}) => {
  // const router = useRouter();
  // const { d_id } = router.query;
  // const [visible, setVisible] = useState(dropdownVisible);
  // const [selectedDesigner, setSelectedDesigner] = useState<number | undefined>(
  //   d_id ? Number(d_id) : undefined
  // );

  // useEffect(() => {
  //   if (dropdownVisible) {
  //     setVisible(dropdownVisible);
  //   }
  // }, [dropdownVisible]);

  // const handleSortByDesigner = (designerId: number | undefined) => {
  //   setSortByDesignerId(designerId);
  //   if (router) {
  //     if (designerId) {
  //       router.push(
  //         {
  //           pathname: router.pathname,
  //           query: { d_id: designerId },
  //         },
  //         undefined,
  //         { shallow: true }
  //       );
  //     } else {
  //       router.push(
  //         {
  //           pathname: router.pathname,
  //         },
  //         undefined,
  //         { shallow: true }
  //       );
  //     }
  //   }
  // };

  // useEffect(() => {
  //   if (d_id) {
  //     setSelectedDesigner(Number(d_id));
  //     setSortByDesignerId(Number(d_id));
  //   }
  // }, [d_id]);

  return (
    <Select
      style={{ width: "100%" }}
      placeholder="Sort By Designer"
      allowClear
      // onChange={handleSortByDesigner}
      // value={selectedDesigner}
      // autoFocus={autoFocus}
      // open={visible}
      // onDropdownVisibleChange={(visible) => {
      //   setVisible(visible);
      //   onDropdownVisibleChange(visible);
      // }}
      // disabled={disabled}
    >
      {designers.map((designer) => (
        <Option key={designer.id} value={designer.id}>
          {firstLetterCapitalize(designer.name)}
        </Option>
      ))}
    </Select>
  );
};

export default SortByDesignerSelect;
