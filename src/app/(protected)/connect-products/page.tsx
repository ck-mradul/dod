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
        const allVariantsMapped = record.variants.every(
          (variant: any) => variant.maping_status
        );
        const someVariantsMapped = record.variants.some(
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

  const shopifyVariants = [
    {
      id: "gid://shopify/Product/4927119196300",
      title: "Pet Creations Art Gift Card",
      total_price: 654,
      total_inventory_quantity: -31,
      total_variant_count: 6,
      variants: [
        {
          id: "gid://shopify/ProductVariant/33469096984716",
          title: "$25",
          sku: "",
          price: "19.00",
          inventoryQuantity: -6,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/33469097017484",
          title: "$50",
          sku: "",
          price: "38.00",
          inventoryQuantity: -5,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/33469097050252",
          title: "$100",
          sku: "",
          price: "75.00",
          inventoryQuantity: -9,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/37597340663975",
          title: "$150",
          sku: "",
          price: "112.00",
          inventoryQuantity: -9,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/33469097083020",
          title: "$250",
          sku: "",
          price: "185.00",
          inventoryQuantity: -2,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/33469153575052",
          title: "$300",
          sku: "",
          price: "225.00",
          inventoryQuantity: 0,
          maping_status: true,
        },
      ],
    },
    {
      id: "gid://shopify/Product/5372777791655",
      title: "Size",
      total_price: 35,
      total_inventory_quantity: 0,
      total_variant_count: 1,
      variants: [
        {
          id: "gid://shopify/ProductVariant/34881026031783",
          title: "Checked",
          sku: "",
          price: "35.00",
          inventoryQuantity: 0,
          maping_status: true,
        },
      ],
    },
    {
      id: "gid://shopify/Product/5372818456743",
      title: "Size",
      total_price: 70,
      total_inventory_quantity: 0,
      total_variant_count: 4,
      variants: [
        {
          id: "gid://shopify/ProductVariant/34881203830951",
          title: "8 x 10",
          sku: "",
          price: "0.00",
          inventoryQuantity: 0,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/34881204093095",
          title: "12 x 18",
          sku: "",
          price: "10.00",
          inventoryQuantity: 0,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/34881204355239",
          title: "18 x 25",
          sku: "",
          price: "20.00",
          inventoryQuantity: 0,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/34881204879527",
          title: "24 x 36",
          sku: "",
          price: "40.00",
          inventoryQuantity: 0,
          maping_status: true,
        },
      ],
    },
    {
      id: "gid://shopify/Product/5372849619111",
      title: "Skip the artwork queue!",
      total_price: 11.99,
      total_inventory_quantity: -479,
      total_variant_count: 1,
      variants: [
        {
          id: "gid://shopify/ProductVariant/34881323958439",
          title: "checked",
          sku: "",
          price: "11.99",
          inventoryQuantity: -479,
          maping_status: true,
        },
      ],
    },
    {
      id: "gid://shopify/Product/5372853518503",
      title: "Add The Digital Artwork - Save 70% OFF",
      total_price: 29.95,
      total_inventory_quantity: -921,
      total_variant_count: 1,
      variants: [
        {
          id: "gid://shopify/ProductVariant/34881335722151",
          title: "checked",
          sku: "",
          price: "29.95",
          inventoryQuantity: -921,
          maping_status: true,
        },
      ],
    },
    {
      id: "gid://shopify/Product/5483894505639",
      title: "Custom Colorful Wrapped Pet Canvas",
      total_price: 1422.4000000000003,
      total_inventory_quantity: -216,
      total_variant_count: 12,
      variants: [
        {
          id: "gid://shopify/ProductVariant/42071062741210",
          title: "Digital Download / 1",
          sku: "digital-colorful",
          price: "43.95",
          inventoryQuantity: -1,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/42071062773978",
          title: "Digital Download / 2",
          sku: "digital-2",
          price: "69.95",
          inventoryQuantity: -2,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/42071062806746",
          title: "Digital Download / 3",
          sku: "digital-3",
          price: "99.95",
          inventoryQuantity: 0,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/35235575824551",
          title: '8" x 10" (Small) / 1',
          sku: "8x10 black",
          price: "73.95",
          inventoryQuantity: -41,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/35235124936871",
          title: '8" x 10" (Small) / 2',
          sku: "8x10White",
          price: "99.95",
          inventoryQuantity: -24,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/35235624386727",
          title: '8" x 10" (Small) / 3',
          sku: "8x10 pink",
          price: "125.95",
          inventoryQuantity: -6,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/35235607478439",
          title: '12" x 18" (Medium) / 1',
          sku: "12x18 black",
          price: "106.95",
          inventoryQuantity: -50,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/35235124969639",
          title: '12" x 18" (Medium) / 2',
          sku: "12x18 white",
          price: "132.95",
          inventoryQuantity: -34,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/35235631300775",
          title: '12" x 18" (Medium) / 3',
          sku: "12x18 pink",
          price: "158.95",
          inventoryQuantity: -5,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/35235614425255",
          title: '18" x 24" (Large) / 1',
          sku: "18x24 black",
          price: "143.95",
          inventoryQuantity: -29,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/35235125002407",
          title: '18" x 24" (Large) / 2',
          sku: "18x24 white",
          price: "169.95",
          inventoryQuantity: -23,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/35235638444199",
          title: '18" x 24" (Large) / 3',
          sku: "18x24 pink",
          price: "195.95",
          inventoryQuantity: -1,
          maping_status: true,
        },
      ],
    },
    {
      id: "gid://shopify/Product/5504164626599",
      title: "Custom Cartoon Art Wrapped Pet Canvas",
      total_price: 1628.4000000000003,
      total_inventory_quantity: -46352,
      total_variant_count: 16,
      variants: [
        {
          id: "gid://shopify/ProductVariant/41973168537818",
          title: "1 / Digital Download",
          sku: "Digital Download ONLY Sent Via Email (1 Pet)",
          price: "43.95",
          inventoryQuantity: -8608,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/37689168855207",
          title: '1 / 8" x 10" (Small)',
          sku: "8x10-20240715141148657-2024071514162237",
          price: "73.95",
          inventoryQuantity: -13495,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/37689169150119",
          title: '1 / 12" x 18" (Medium)',
          sku: "12x18 white-20200717210424578-20201227235006270",
          price: "88.95",
          inventoryQuantity: -8257,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/37689171378343",
          title: '1 / 18" x 24" (Large)',
          sku: "18x24 white-20200717210424578-20201227235006270",
          price: "110.95",
          inventoryQuantity: -1313,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/41973168570586",
          title: "2 / Digital Download",
          sku: "Digital Download ONLY Sent Via Email (2 Pets)",
          price: "58.95",
          inventoryQuantity: -2379,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/37690837041319",
          title: '2 / 8" x 10" (Small)',
          sku: "8x10White-20200717210424578-20201227235006745",
          price: "88.95",
          inventoryQuantity: -3606,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/37690837106855",
          title: '2 / 12" x 18" (Medium)',
          sku: "12x18 white-20200717210424578-20201227235006809",
          price: "103.50",
          inventoryQuantity: -3973,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/37690837139623",
          title: '2 / 18" x 24" (Large)',
          sku: "18x24 white-20200717210424578-20201227235006874",
          price: "125.95",
          inventoryQuantity: -944,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/41973168603354",
          title: "3 / Digital Download",
          sku: "Digital Download ONLY Sent Via Email (3 Pets)",
          price: "73.95",
          inventoryQuantity: -717,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/37690844020903",
          title: '3 / 8" x 10" (Small)',
          sku: "8x10White-20200717210424578-2020110221343462-20201227235006270",
          price: "103.50",
          inventoryQuantity: -1129,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/37690844119207",
          title: '3 / 12" x 18" (Medium)',
          sku: "12x18 white-20200717210424578-2020110221343462-20201227235006270",
          price: "118.50",
          inventoryQuantity: -1335,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/37690844151975",
          title: '3 / 18" x 24" (Large)',
          sku: "18x24 white-20200717210424578-2020110221343462-20201227235006271",
          price: "140.95",
          inventoryQuantity: -579,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/45535882477786",
          title: "4 / Digital Download",
          sku: "Digital Download ONLY Sent Via Email (4 Pets)",
          price: "88.95",
          inventoryQuantity: -9,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/45535882510554",
          title: '4 / 8" x 10" (Small)',
          sku: "8x10White-20200717210424578-2020110221343462-20201227235006745",
          price: "118.50",
          inventoryQuantity: -1,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/45535882543322",
          title: '4 / 12" x 18" (Medium)',
          sku: "12x18 white-20200717210424578-2020110221343462-20201227235006809",
          price: "132.95",
          inventoryQuantity: -3,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/45535882576090",
          title: '4 / 18" x 24" (Large)',
          sku: "18x24 white-20200717210424578-2020110221343462-20201227235006874",
          price: "155.95",
          inventoryQuantity: -4,
          maping_status: true,
        },
      ],
    },
    {
      id: "gid://shopify/Product/5542374441127",
      title: "Custom Colorful Pet Portrait - Digital Download",
      total_price: 479.7,
      total_inventory_quantity: -27,
      total_variant_count: 6,
      variants: [
        {
          id: "gid://shopify/ProductVariant/40469151416487",
          title: "1",
          sku: "Blue-Digital-Download-1",
          price: "29.95",
          inventoryQuantity: -27,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/40469151449255",
          title: "2",
          sku: "Blue-Digital-Download-2",
          price: "49.95",
          inventoryQuantity: 0,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/40469151482023",
          title: "3",
          sku: "Blue-Digital-Download-3",
          price: "69.95",
          inventoryQuantity: 0,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/40469151514791",
          title: "4",
          sku: "Blue-Digital-Download-4",
          price: "89.95",
          inventoryQuantity: 0,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/40469151547559",
          title: "5",
          sku: "Blue-Digital-Download-5",
          price: "109.95",
          inventoryQuantity: 0,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/40469151580327",
          title: "6",
          sku: "Blue-Digital-Download-6",
          price: "129.95",
          inventoryQuantity: 0,
          maping_status: true,
        },
      ],
    },
    {
      id: "gid://shopify/Product/5572642963623",
      title: "NUMBER OF PETS",
      total_price: 805,
      total_inventory_quantity: -2,
      total_variant_count: 10,
      variants: [
        {
          id: "gid://shopify/ProductVariant/35510320234663",
          title: "1 PET",
          sku: "",
          price: "15.00",
          inventoryQuantity: 0,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/35510320365735",
          title: "2 PETS",
          sku: "",
          price: "30.00",
          inventoryQuantity: 0,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/35510320496807",
          title: "3 PETS",
          sku: "",
          price: "45.00",
          inventoryQuantity: 0,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/38114578104487",
          title: "4 PETS",
          sku: "",
          price: "60.00",
          inventoryQuantity: -1,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/38114578628775",
          title: "5 PETS",
          sku: "",
          price: "75.00",
          inventoryQuantity: 0,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/38114579710119",
          title: "6 PETS",
          sku: "",
          price: "85.00",
          inventoryQuantity: -1,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/38114580758695",
          title: "7 PETS",
          sku: "",
          price: "100.00",
          inventoryQuantity: 0,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/38114581282983",
          title: "8 PETS",
          sku: "",
          price: "115.00",
          inventoryQuantity: 0,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/38114581774503",
          title: "9 PETS",
          sku: "",
          price: "130.00",
          inventoryQuantity: 0,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/38114582823079",
          title: "10 PETS",
          sku: "",
          price: "150.00",
          inventoryQuantity: 0,
          maping_status: true,
        },
      ],
    },
    {
      id: "gid://shopify/Product/5664148357287",
      title: "Custom Cartoon Pet Portrait - Digital Download",
      total_price: 479.7,
      total_inventory_quantity: -881,
      total_variant_count: 6,
      variants: [
        {
          id: "gid://shopify/ProductVariant/35928550736039",
          title: "1",
          sku: "White-Digital-Download",
          price: "29.95",
          inventoryQuantity: -455,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/35928550768807",
          title: "2",
          sku: "Black-Digital-Download",
          price: "49.95",
          inventoryQuantity: -103,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/35928550801575",
          title: "3",
          sku: "Pink-Digital-Download",
          price: "69.95",
          inventoryQuantity: -50,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/35928550834343",
          title: "4",
          sku: "Blue-Digital-Download",
          price: "89.95",
          inventoryQuantity: -111,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/38194929467559",
          title: "5",
          sku: "Blue-Digital-Download",
          price: "109.95",
          inventoryQuantity: -46,
          maping_status: true,
        },
        {
          id: "gid://shopify/ProductVariant/38194996936871",
          title: "6",
          sku: "Blue-Digital-Download",
          price: "129.95",
          inventoryQuantity: -116,
          maping_status: true,
        },
      ],
    },
  ];

  return (
    <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-40">
      <SegmentHeading text={`Connect Products`} icon={false} />
      <div className="flex justify-end">
        <div className=" m-4 fs-3">
          {/* You can select and map your products. Once mapped, your order will be
          processed. */}
        </div>
        <div className="flex  m-2">
          <Tooltip
            title={
              // !selectedIds.length
              //   ? "Please select at least one row"
              //   :
              "Products will be Connected"
            }
          >
            {/* {currentStoreDetails.store_name === "Etsy" &&
            Array.isArray(activePlanDetails?.data) &&
            !activePlanDetails?.data?.length ? (
              <SubscriptionPlanModal
                type="primary"
                text={"Map Products"}
                disabled={!selectedIds.length}
                loading={isLoadingSpinner}
              />
            ) : ( */}
            <Button
              type="primary"
              className="me-2"
              // onClick={() => handleSelectVariants()}
              // disabled={!(selectedVariantKeys.length || selectedIds.length)}
              // loading={isLoadingSpinner}
            >
              Map Products
            </Button>
          </Tooltip>
          <Search
            allowClear
            placeholder="Search"
            onChange={(e) => {
              // setSearchQuery(e.target.value);
              // setPaginationInfo({
              //   hasNextPage: false,
              //   hasPrevPage: false,
              //   nextCursor: null,
              //   prevCursor: null,
              // });
              // setIsLoadSpinner(true);
            }}
            onSearch={(e) => {
              // setSearchQuery(e);
              // setPaginationInfo({
              //   hasNextPage: false,
              //   hasPrevPage: false,
              //   nextCursor: null,
              //   prevCursor: null,
              // });
              // setIsLoadSpinner(true);
            }}
            style={{ width: 200 }}
          />
        </div>
      </div>
      {/* {isLoadSpinner && <Spin size="large" fullscreen />} */}
      <Table
        dataSource={shopifyVariants}
        columns={columns}
        // loading={isLoading || isFetching}
        // rowSelection={rowSelection}
        // rowKey="id"
        // rowClassName={rowClassName}
        // expandable={{
        //   expandedRowRender,
        // }}
        pagination={{
          current: 1,
          // current: currentPage,
          // pageSize,
          showSizeChanger: true,
          itemRender: () => null,
          pageSizeOptions: ["10", "50", "100"],
          className: "custom-pagination",
          // onChange: (page, pageSize) => {
          //   setIsLoadSpinner(true);
          //   setCurrentPage(page);
          //   setPageSize(pageSize);
          //   setPaginationInfo({
          //     hasNextPage: false,
          //     hasPrevPage: false,
          //     nextCursor: null,
          //     prevCursor: null,
          //   });
          //   // refetch()
          // },
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "-3%",
          marginBottom: "2%",
        }}
      >
        <Button
          type="primary"
          className="btn btn-primary me-2  "
          // disabled={!paginationInfo.hasPrevPage}
          // onClick={() => handlePrevPage()}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Previous
        </Button>
        <Button
          type="primary"
          // disabled={!paginationInfo.hasNextPage}
          className="btn btn-primary"
          // onClick={() => handleNextPage()}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ConnectProducts;
// import React from "react";

// const ConnectProducts = () => {
//   return <div>ConnectProducts</div>;
// };

// export default ConnectProducts;
