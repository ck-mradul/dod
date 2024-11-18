"use client";

import SegmentHeading from "@/components/commonComponents/SegmentHeading";
import { Button, Checkbox, Input, Table, Tag, Tooltip } from "antd";
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

  const expandedRowRender = (product: any) => {
    const variants = [
      {
        id: 1,
        tp_product_id: "gid://shopify/Product/6647077273767",
        tp_variant_id: "gid://shopify/ProductVariant/39699215384743",
        title: "18x24 Inch / 2 Pets",
        sku: "CanvsWrp-ImgWrp-18x24-11-1",
        inventory_quantity: 0,
        image_url:
          "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
        product_id: 1,
        price: "270.00",
        maping_status: false,
      },
      {
        id: 2,
        tp_product_id: "gid://shopify/Product/6647077273767",
        tp_variant_id: "gid://shopify/ProductVariant/39699215417511",
        title: "18x24 Inch / 3 Pets",
        sku: "CanvsWrp-ImgWrp-18x24-12-1",
        inventory_quantity: 0,
        image_url:
          "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
        product_id: 1,
        price: "320.00",
        maping_status: false,
      },
      {
        id: 3,
        tp_product_id: "gid://shopify/Product/6647077273767",
        tp_variant_id: "gid://shopify/ProductVariant/39699215450279",
        title: "18x24 Inch / 4 Pets",
        sku: "CanvsWrp-ImgWrp-18x24-13-1",
        inventory_quantity: 0,
        image_url:
          "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
        product_id: 1,
        price: "370.00",
        maping_status: false,
      },
      {
        id: 4,
        tp_product_id: "gid://shopify/Product/6647077273767",
        tp_variant_id: "gid://shopify/ProductVariant/39699215483047",
        title: "18x24 Inch / 5 Pets",
        sku: "CanvsWrp-ImgWrp-18x24-14-1",
        inventory_quantity: 0,
        image_url:
          "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
        product_id: 1,
        price: "420.00",
        maping_status: false,
      },
      {
        id: 5,
        tp_product_id: "gid://shopify/Product/6647077273767",
        tp_variant_id: "gid://shopify/ProductVariant/39699215515815",
        title: "24x36 Inch / 1 Pet",
        sku: "CanvsWrp-ImgWrp-24x36-15-1",
        inventory_quantity: 0,
        image_url:
          "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
        product_id: 1,
        price: "320.00",
        maping_status: false,
      },
      {
        id: 6,
        tp_product_id: "gid://shopify/Product/6647077273767",
        tp_variant_id: "gid://shopify/ProductVariant/39699215548583",
        title: "24x36 Inch / 2 Pets",
        sku: "CanvsWrp-ImgWrp-24x36-16-1",
        inventory_quantity: 0,
        image_url:
          "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
        product_id: 1,
        price: "370.00",
        maping_status: false,
      },
      {
        id: 7,
        tp_product_id: "gid://shopify/Product/6647077273767",
        tp_variant_id: "gid://shopify/ProductVariant/39699215581351",
        title: "24x36 Inch / 3 Pets",
        sku: "CanvsWrp-ImgWrp-24x36-17-1",
        inventory_quantity: 0,
        image_url:
          "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
        product_id: 1,
        price: "420.00",
        maping_status: false,
      },
      {
        id: 8,
        tp_product_id: "gid://shopify/Product/6647077273767",
        tp_variant_id: "gid://shopify/ProductVariant/39699215614119",
        title: "24x36 Inch / 4 Pets",
        sku: "CanvsWrp-ImgWrp-24x36-18-1",
        inventory_quantity: 0,
        image_url:
          "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
        product_id: 1,
        price: "470.00",
        maping_status: false,
      },
      {
        id: 9,
        tp_product_id: "gid://shopify/Product/6647077273767",
        tp_variant_id: "gid://shopify/ProductVariant/39699215646887",
        title: "24x36 Inch / 5 Pets",
        sku: "CanvsWrp-ImgWrp-24x36-19-1",
        inventory_quantity: 0,
        image_url:
          "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
        product_id: 1,
        price: "520.00",
        maping_status: false,
      },
      {
        id: 12458,
        tp_product_id: "gid://shopify/Product/6647077273767",
        tp_variant_id: "gid://shopify/ProductVariant/39699214860455",
        title: "Digital Only / 1 Pet",
        sku: "Digital-1-Pet-1",
        inventory_quantity: -1,
        image_url:
          "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
        product_id: 1,
        price: "56.00",
        maping_status: false,
      },
      {
        id: 12460,
        tp_product_id: "gid://shopify/Product/6647077273767",
        tp_variant_id: "gid://shopify/ProductVariant/39699214893223",
        title: "Digital Only / 2 Pets",
        sku: "Digital-2-Pets-1",
        inventory_quantity: 0,
        image_url:
          "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
        product_id: 1,
        price: "98.00",
        maping_status: false,
      },
      {
        id: 12462,
        tp_product_id: "gid://shopify/Product/6647077273767",
        tp_variant_id: "gid://shopify/ProductVariant/39699214925991",
        title: "Digital Only / 3 Pets",
        sku: "Digital-3-Pets-1",
        inventory_quantity: 0,
        image_url:
          "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
        product_id: 1,
        price: "140.00",
        maping_status: false,
      },
      {
        id: 12464,
        tp_product_id: "gid://shopify/Product/6647077273767",
        tp_variant_id: "gid://shopify/ProductVariant/39699214958759",
        title: "Digital Only / 4 Pets",
        sku: "Digital-4-Pets-1",
        inventory_quantity: 0,
        image_url:
          "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
        product_id: 1,
        price: "124.00",
        maping_status: false,
      },
      {
        id: 12466,
        tp_product_id: "gid://shopify/Product/6647077273767",
        tp_variant_id: "gid://shopify/ProductVariant/39699214991527",
        title: "Digital Only / 5 Pets",
        sku: "Digital-5-Pets-1",
        inventory_quantity: 0,
        image_url:
          "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
        product_id: 1,
        price: "182.00",
        maping_status: false,
      },
      {
        id: 12468,
        tp_product_id: "gid://shopify/Product/6647077273767",
        tp_variant_id: "gid://shopify/ProductVariant/39699215024295",
        title: "8x10 Inch / 1 Pet",
        sku: "CanvsWrp-ImgWrp-8x10-0-1",
        inventory_quantity: -1,
        image_url:
          "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
        product_id: 1,
        price: "120.00",
        maping_status: false,
      },
      {
        id: 12470,
        tp_product_id: "gid://shopify/Product/6647077273767",
        tp_variant_id: "gid://shopify/ProductVariant/39699215057063",
        title: "8x10 Inch / 2 Pets",
        sku: "CanvsWrp-ImgWrp-8x10-1-1",
        inventory_quantity: 0,
        image_url:
          "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
        product_id: 1,
        price: "170.00",
        maping_status: false,
      },
      {
        id: 12473,
        tp_product_id: "gid://shopify/Product/6647077273767",
        tp_variant_id: "gid://shopify/ProductVariant/39699215089831",
        title: "8x10 Inch / 3 Pets",
        sku: "CanvsWrp-ImgWrp-8x10-2-1",
        inventory_quantity: 0,
        image_url:
          "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
        product_id: 1,
        price: "220.00",
        maping_status: false,
      },
      {
        id: 12475,
        tp_product_id: "gid://shopify/Product/6647077273767",
        tp_variant_id: "gid://shopify/ProductVariant/39699215122599",
        title: "8x10 Inch / 4 Pets",
        sku: "CanvsWrp-ImgWrp-8x10-3-1",
        inventory_quantity: 0,
        image_url:
          "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
        product_id: 1,
        price: "270.00",
        maping_status: false,
      },
      {
        id: 12477,
        tp_product_id: "gid://shopify/Product/6647077273767",
        tp_variant_id: "gid://shopify/ProductVariant/39699215155367",
        title: "8x10 Inch / 5 Pets",
        sku: "CanvsWrp-ImgWrp-8x10-4-1",
        inventory_quantity: 0,
        image_url:
          "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
        product_id: 1,
        price: "320.00",
        maping_status: false,
      },
      {
        id: 12479,
        tp_product_id: "gid://shopify/Product/6647077273767",
        tp_variant_id: "gid://shopify/ProductVariant/39699215188135",
        title: "12x18 Inch / 1 Pet",
        sku: "CanvsWrp-ImgWrp-12x18-5-1",
        inventory_quantity: 0,
        image_url:
          "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
        product_id: 1,
        price: "180.00",
        maping_status: false,
      },
      {
        id: 12481,
        tp_product_id: "gid://shopify/Product/6647077273767",
        tp_variant_id: "gid://shopify/ProductVariant/39699215220903",
        title: "12x18 Inch / 2 Pets",
        sku: "CanvsWrp-ImgWrp-12x18-6-1",
        inventory_quantity: 0,
        image_url:
          "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
        product_id: 1,
        price: "230.00",
        maping_status: false,
      },
      {
        id: 12483,
        tp_product_id: "gid://shopify/Product/6647077273767",
        tp_variant_id: "gid://shopify/ProductVariant/39699215253671",
        title: "12x18 Inch / 3 Pets",
        sku: "CanvsWrp-ImgWrp-12x18-7-1",
        inventory_quantity: 0,
        image_url:
          "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
        product_id: 1,
        price: "280.00",
        maping_status: false,
      },
      {
        id: 12485,
        tp_product_id: "gid://shopify/Product/6647077273767",
        tp_variant_id: "gid://shopify/ProductVariant/39699215286439",
        title: "12x18 Inch / 4 Pets",
        sku: "CanvsWrp-ImgWrp-12x18-8-1",
        inventory_quantity: 0,
        image_url:
          "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
        product_id: 1,
        price: "330.00",
        maping_status: false,
      },
      {
        id: 12487,
        tp_product_id: "gid://shopify/Product/6647077273767",
        tp_variant_id: "gid://shopify/ProductVariant/39699215319207",
        title: "12x18 Inch / 5 Pets",
        sku: "CanvsWrp-ImgWrp-12x18-9-1",
        inventory_quantity: 0,
        image_url:
          "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
        product_id: 1,
        price: "380.00",
        maping_status: false,
      },
      {
        id: 12489,
        tp_product_id: "gid://shopify/Product/6647077273767",
        tp_variant_id: "gid://shopify/ProductVariant/39699215351975",
        title: "18x24 Inch / 1 Pet",
        sku: "CanvsWrp-ImgWrp-18x24-10-1",
        inventory_quantity: 0,
        image_url:
          "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
        product_id: 1,
        price: "220.00",
        maping_status: false,
      },
    ];

    const subColumns = [
      {
        title: "",
        dataIndex: "id",
        key: "id",
        render: (id: any) => (
          <Checkbox
          // checked={selectedVariantIds.includes(id) || selectedRowKeys.includes(product.id)}
          // onChange={(e) => handleVariantSelect(product.id, id, e.target.checked)}
          />
        ),
      },
      { title: "Title", dataIndex: "title", key: "title" },
      { title: "SKU", dataIndex: "sku", key: "sku" },
      { title: "Price", dataIndex: "price", key: "price" },
      {
        title: "Inventory Quantity",
        dataIndex: "inventory_quantity",
        key: "inventory_quantity",
      },
    ];

    return (
      <Table
        // loading={varientLoading}
        scroll={{ x: "auto" }}
        columns={subColumns}
        dataSource={variants}
        pagination={false}
        rowKey="id"
      />
    );
  };

  const rowSelection: TableProps<DataType>["rowSelection"] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === "Disabled User",
      name: record.name,
    }),
  };

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
        dataSource={filteredDataSource}
        rowSelection={rowSelection}
        columns={columns}
        // loading={isLoading || isFetching}
        rowKey="id"
        expandable={{
          // expandedRowRender: (record) => (
          //   <p style={{ margin: 0 }}>{record.description}</p>
          // ),
          expandedRowRender,
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
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
          onChange: () => {
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
