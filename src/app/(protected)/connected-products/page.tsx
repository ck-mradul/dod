"use client";

import SegmentHeading from "@/components/commonComponents/SegmentHeading";
import { Button, Input, Table, Tag, Tooltip } from "antd";
import React from "react";

const ConnectProducts = () => {
  const { Search } = Input;

  const columns = [
    {
      title: "Product Title",
      dataIndex: "title",
      key: "title",
      sorter: (a: any, b: any) => a.title.localeCompare(b.title),
      width: 600,
    },
    {
      title: "Product Status",
      dataIndex: "product_status",
      key: "product_status",
      width: 200,
      sorter: (a: any, b: any) => {
        const statusOrder = {
          "Not Mapped": 0,
          // 'Some SKUs Missing': 1,
          // 'No SKU Available': 2,
          "Partially Mapped": 3,
          "All Variants Mapped": 4,
        };

        const getStatusText = (record: any) => {
          const allVariantsMapped = record.variants.every(
            (variant: any) => variant.maping_status
          );
          const someVariantsMapped = record.variants.some(
            (variant: any) => variant.maping_status
          );
          // const allSkusMissing = record.variants.every((variant: any) => !variant.sku)
          // const someSkusMissing = record.variants.some((variant: any) => !variant.sku)

          // } else if (allSkusMissing) {
          //   return 'No SKU Available'
          // } else if (someSkusMissing) {
          //   return 'Some SKUs Missing'
          if (allVariantsMapped) {
            return "All Variants Mapped";
          } else if (someVariantsMapped) {
            return "Partially Mapped";
          }
          return "Not Mapped";
        };

        const statusA = getStatusText(a);
        const statusB = getStatusText(b);

        return statusOrder[statusA] - statusOrder[statusB];
      },
      render: (_: string, record: any) => {
        const allVariantsMapped = record?.variants?.every(
          (variant: any) => variant.maping_status
        );
        const someVariantsMapped = record?.variants?.some(
          (variant: any) => variant.maping_status
        );
        // const allSkusMissing = record.variants.every((variant: any) => !variant.sku)
        // const someSkusMissing = record.variants.some((variant: any) => !variant.sku)

        let statusText = "Not Mapped";
        let color = "default";
        let tooltipText = "This product has not been mapped yet.";

        if (allVariantsMapped) {
          statusText = "All Variants Mapped";
          color = "green";
          tooltipText = "All variants of this product are successfully mapped.";
        } else if (someVariantsMapped) {
          statusText = "Partially Mapped";
          color = "blue";
          tooltipText =
            "Some variants of this product are mapped, but not all.";
          // } else if (allSkusMissing) {
          //   statusText = 'No SKU Available'
          //   color = 'red'
          //   tooltipText =
          //     'No SKU is available for any variant of this product, mapping is not possible.'
          // } else if (someSkusMissing) {
          //   statusText = 'Some SKUs Missing'
          //   color = 'orange'
          //   tooltipText = 'Some variants of this product are missing SKUs, and cannot be mapped.'
        }

        return (
          <Tooltip title={tooltipText}>
            <Tag color={color}>{statusText}</Tag>
          </Tooltip>
        );
      },
    },
    {
      title: "Total Price",
      dataIndex: "total_price",
      key: "total_price",
      width: 150,
      sorter: (a: any, b: any) => {
        const priceA = parseFloat(a.total_price);
        const priceB = parseFloat(b.total_price);
        return priceA - priceB;
      },
      render: (price: number) => parseFloat(price).toFixed(2),
    },

    {
      title: "Total Inventory Quantity",
      dataIndex: "total_inventory_quantity",
      key: "total_inventory_quantity",
      width: 200,
      align: "center",
      sorter: (a: any, b: any) =>
        a.total_inventory_quantity - b.total_inventory_quantity,
    },
    {
      title: "Total Variants Count",
      dataIndex: "total_variant_count",
      key: "total_variant_count",
      width: 200,
      align: "center",
    },
  ];

  const filteredDataSource = [
    {
      id: 1,
      title:
        "Cartoon Pet, Pet Portrait, Cartoon Style Pet, Pet Cartoon From Photo, Dog Cartoon, Cat, Pet Drawing",
      variants_count: 25,
    },
    {
      id: 2,
      title:
        "Custom cartoon pet portrait, Dog Portrait, Print, Framed, Physical Print, Cat",
      variants_count: 25,
    },
    {
      id: 3,
      title:
        "Dog Lover Gift, Custom Dog Portrait, Pet Portrait, Custom dog owner gift",
      variants_count: 25,
    },
    {
      id: 4,
      title:
        "Personalised Family Portrait, Birthday Gift, Custom Birthday Gift, Gift",
      variants_count: 25,
    },
    {
      id: 5,
      title:
        "Personalised Family Portrait, Personalized Gift, Family Portrait, Family",
      variants_count: 25,
    },
    {
      id: 6,
      title:
        "Personalized Bunny, Pet Portrait, Easter, Christmas Gift, Custom Pet Portrait",
      variants_count: 25,
    },
    {
      id: 7,
      title: "Custom Colorful Wrapped Pet Canvas",
      variants_count: 12,
    },
    {
      id: 8,
      title:
        "Personalised Gifts for Her, Birthday Gift, Anniversary Gift, Framed, Portrait",
      variants_count: 25,
    },
    {
      id: 9,
      title: "Custom Cartoon Art Wrapped Pet Canvas",
      variants_count: 16,
    },
    {
      id: 10,
      title: "Custom Spooky Family Beach Towel",
      variants_count: 25,
    },
  ];

  return (
    <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-40">
      <SegmentHeading text={`My Products`} icon={false} />
      <div className="flex justify-end m-2">
        <div className=" justify-start">
          {/* Mapped Products appear here. These products will be processed as
          orders */}
        </div>
        <div className="justify-end align-items-end">
          <Tooltip
            title={
              // !(selectedIds.length || selectedVariantIds.length)
              //   ? "Please select atleast one row"
              //   :
              "Orders will not be received"
            }
          >
            <Button
              type="primary"
              style={{ marginRight: "10px" }}
              // onClick={() => UnMapProduct()}
              // disabled={!(selectedRowKeys.length || selectedVariantIds.length)}
            >
              Unlink Products
            </Button>
          </Tooltip>
          {/* <Button
                type='primary'
                style={{marginRight: '10px'}}
                onClick={() => {
                  setMultipleProductMappingModalOpen(!multipleProductMappingModalOpen)
                }}
                disabled={!selectedIds.length}
              >
                Map
              </Button>
              
              {isAdmin && (
                <div className='d-flex flex-column me-4'>
                  <label
                    style={{
                      marginLeft: '2px',
                      marginRight: '8px',
                      marginTop: '5px',
                      whiteSpace: 'nowrap',
                      fontSize: '15px',
                    }}
                  >
                    Product Processing Fee:
                  </label>
                  <Tooltip
                    title={
                      !selectedIds.length
                        ? 'Please select atleast one row'
                        : 'Bulk updating Processing Fess'
                    }
                  >
                    <Input
                      className='me-4'
                      placeholder='Enter amount to Update'
                      disabled={!selectedIds.length}
                      onFocus={() => setIsEditableInput(true)}
                      onChange={(e) => handleGlobalInputChange(selectedIds, e.target.value)}
                      value={globalInput}
                      prefix={<i className='bi bi-currency-dollar'></i>}
                    />
                  </Tooltip>
                </div>
              )} */}

          {/* {selectedIds.length > 0 && isEditableInput && ( */}
          <div className=" d-flex align-itens-center me-10">
            {/* {globalInput && ( */}
            {/* <div
              className="bg-white py-2 px-3 me-4 rounded cursor-pointer"
              onClick={() => {
                handleInputBlurCustom(
                  selectedIds,
                  producteFee[selectedIds],
                  setEditableRow,
                  ""
                );
                setSelectedIds([]);
              }}
            >
              <CheckOutlined />
            </div> */}
            {/* )} */}
            {/* <div
              className="bg-white py-2 px-3 me-5 rounded cursor-pointer"
              onClick={() => {
                setIsEditableInput(false);
                setGlobalInput(undefined);
              }}
            >
              <CloseOutlined />
            </div> */}
          </div>
          {/* )} */}
          {/* <Search
            allowClear
            placeholder="Search"
            // value={searchText}
            // onChange={(e) => handleSearchAction(e.target.value)}
            // style={{width: 200}}
          /> */}
        </div>
      </div>
      <Table
        // rowSelection={rowSelection}
        dataSource={filteredDataSource}
        columns={columns}
        // loading={isLoading || isFetching}
        rowKey="id"
        // expandable={{
        //   expandedRowRender,
        //   onExpand: (expanded, record) => {
        //     if (expanded) {
        //       variants(record.id);
        //     }
        //   },
        // }}
        pagination={{
          current: 1,
          pageSize: 10,
          total: 100,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
          pageSizeOptions: ["10", "20", "50", "100"],
          onChange: (page, pageSize) => {
            // setPage(page);
            // setPageSize(pageSize);
          },
          className: "custom-pagination",
        }}
      />
    </div>
  );
};

export default ConnectProducts;
// import React from "react";

// const ConnectProducts = () => {
//   return <div>ConnectProducts</div>;
// };

// export default ConnectProducts;
