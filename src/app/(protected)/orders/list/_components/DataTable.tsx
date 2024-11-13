import { BankOutlined } from "@ant-design/icons";
import { Table, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import Link from "next/link";
import React from "react";

const DataTable = () => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "2-digit",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const columns: ColumnsType<Order> = [
    {
      title: "Order",
      dataIndex: "order_name",
      align: "center",
      sorter: (a, b) => parseInt(a.order_name) - parseInt(b.order_name),
      render: (text: string, record: any) => (
        <Link
          //   onClick={() => handleOrderPage()}
          href={`/orders/${record.id}`}
        >
          {text}
        </Link>
      ),
    },
    {
      title: "Customer",
      dataIndex: "name",
      align: "center",
      sorter: (a: { name: string }, b: { name: any }) =>
        a.name.localeCompare(b.name),
      render: (text: string, record: any) => text || "N/A",
    },
    {
      title: "Item Count",
      dataIndex: "order_item",
      align: "center",
      render: (orderItem: any) => <>{orderItem.length}</>,
      width: "100px",
    },
    {
      title: "Stores",
      dataIndex: "store_name",
      align: "center",
    },
    {
      title: "Date",
      dataIndex: "created_at",
      align: "center",
      sorter: (a, b) =>
        moment(a.created_at).unix() - moment(b.created_at).unix(),
      render: (text: string) => formatDate(text),
    },
    {
      title: "Cost",
      dataIndex: "order_item",
      align: "center",
      render: (orderItem: { name: string; price: number }[]) =>
        "$" +
        orderItem
          .map((item) => item?.price?.toString())
          .reduce((acc, curr) => acc + parseFloat(curr), 0)
          .toFixed(2),
    },
    {
      title: "Assignee",
      dataIndex: "designer_id",
      align: "center",
      //   render: (designerId: number | null, record: any) => {
      //     const currentDesigner = designers.find(
      //       (designer: any) => designer.id === designerId
      //     );
      //     const isDisabled = !permissions?.order_assign_designer || isDesigner;

      //     return (
      //       <Select
      //         disabled={isDisabled}
      //         showSearch
      //         defaultValue={currentDesigner ? currentDesigner.name : "Unassigned"}
      //         style={{ width: 150 }}
      //         optionFilterProp="children"
      //         filterOption={(input, option) =>
      //           option?.children.toLowerCase().includes(input.toLowerCase())
      //         }
      //         onChange={(value) => handleAssigneeClick(value, record.id)}
      //       >
      //         {designers?.map((designer: any) => (
      //           <Select.Option key={designer.id} value={designer.id}>
      //             {designer.name}
      //           </Select.Option>
      //         ))}
      //       </Select>
      //     );
      //   },
    },
    {
      title: "Status",
      dataIndex: "order_status",
      key: "order_status",
      width: "80px",
      //   render: (order_status: any, record: any) => {
      //     const textColor = paymentStatusColor(order_status);
      //     if (
      //       order_status === "Unpaid" &&
      //       !currentStoreDetails?.subscriptions?.length
      //     ) {
      //       return (
      //         <Tooltip title="Click here to purchase subscription plan first then process your order">
      //           <Link href="/subscribe" style={{ color: textColor }}>
      //             {order_status}
      //           </Link>
      //         </Tooltip>
      //       );
      //     }

      //     if (order_status === "Unpaid" && !myCurrentBalance) {
      //       return (
      //         <Tooltip title="Click here to add balnce to your wallet first then process your order">
      //           <Link href="/u/wallet" style={{ color: textColor }}>
      //             {order_status}
      //           </Link>
      //         </Tooltip>
      //       );
      //     }

      //     if (
      //       order_status === "Unpaid" &&
      //       currentStoreDetails?.subscriptions?.length &&
      //       myCurrentBalance
      //     ) {
      //       return (
      //         <Button
      //           type="primary"
      //           style={{ color: "white", cursor: "pointer" }}
      //           //   onClick={() => paymentOrderProcess(record.id)}
      //         >
      //           Pay now
      //         </Button>
      //       );
      //     }
      //     return <div style={{ color: textColor }}>{order_status}</div>;
      //   },
    },
    {
      dataIndex: "id",
      render: (_: any, record: any) =>
        record.designer_id ? (
          <Link href={`/u/designer-payment/${record.id}`}>
            <Tooltip title="Designer payment detail">
              <BankOutlined />
            </Tooltip>
          </Link>
        ) : null,
    },
  ];

  const orders = [
    {
      id: 54052,
      order_name: "PCA60274",
      created_at: "2024-11-07T04:40:14.000000Z",
      design_manager_id: null,
      quality_analyst_id: null,
      designer_id: null,
      order_status: "Paid",
      store_id: 1,
      urjent_status: 0,
      name: "Kim Wasson",
      status: "",
      order_item_count: 1,
      store_name: "storetique.myshopify.com",
      designer_details: [],
      quality_analyst: [],
      background_images_status: 0,
      total_artwork: 0,
      total_artwork_charges: 0,
      order_item: [
        {
          id: 50081,
          order_id: 54052,
          name: "Gift For Pet Owner Dog Lover Gift, Personalised Gift Turn Your Pet Into A Cartoon, Hand-Drawn Digital Pet Art, Photo To Cartoon - 8x10 Inch / 3 People or Pets",
          sku: "CanvsWrp-ImgWrp-8x10-2-CT1",
          quantity: "1",
          status: 1,
          price: "220.00",
          status_name: "New",
          image_url:
            "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
          slug: "new",
        },
      ],
    },
    {
      id: 54033,
      order_name: "PCA60273",
      created_at: "2024-11-07T03:14:37.000000Z",
      design_manager_id: null,
      quality_analyst_id: null,
      designer_id: null,
      order_status: "Paid",
      store_id: 1,
      urjent_status: 0,
      name: "Lana Symcox",
      status: "",
      order_item_count: 1,
      store_name: "storetique.myshopify.com",
      designer_details: [],
      quality_analyst: [],
      background_images_status: 0,
      total_artwork: 1,
      total_artwork_charges: 0,
      order_item: [
        {
          id: 50080,
          order_id: 54033,
          name: 'Custom Cartoon Art Wrapped Pet Canvas - 1 / 8" x 10" (Small)',
          sku: "8x10-20240715141148657-2024071514162237",
          quantity: "1",
          status: 1,
          price: "77.41",
          status_name: "New",
          image_url:
            "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
          slug: "new",
        },
      ],
    },
    {
      id: 54029,
      order_name: "PCA60272",
      created_at: "2024-11-07T02:59:10.000000Z",
      design_manager_id: null,
      quality_analyst_id: null,
      designer_id: null,
      order_status: "Paid",
      store_id: 1,
      urjent_status: 0,
      name: "Chanelle Boddie",
      status: "",
      order_item_count: 1,
      store_name: "storetique.myshopify.com",
      designer_details: [],
      quality_analyst: [],
      background_images_status: 0,
      total_artwork: 1,
      total_artwork_charges: 0,
      order_item: [
        {
          id: 50079,
          order_id: 54029,
          name: "Custom Cartoon Art Wrapped Pet Canvas - 1 / Digital Download",
          sku: "Digital Download ONLY Sent Via Email (1 Pet)",
          quantity: "1",
          status: 1,
          price: "46.51",
          status_name: "New",
          image_url:
            "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
          slug: "new",
        },
      ],
    },
    {
      id: 54009,
      order_name: "PCA60271",
      created_at: "2024-11-07T01:21:31.000000Z",
      design_manager_id: null,
      quality_analyst_id: null,
      designer_id: null,
      order_status: "Paid",
      store_id: 1,
      urjent_status: 0,
      name: "Lourdes Buenrostro",
      status: "",
      order_item_count: 1,
      store_name: "storetique.myshopify.com",
      designer_details: [],
      quality_analyst: [],
      background_images_status: 0,
      total_artwork: 1,
      total_artwork_charges: 0,
      order_item: [
        {
          id: 50078,
          order_id: 54009,
          name: "Custom Cartoon Art Wrapped Pet Canvas - 1 / Digital Download",
          sku: "Digital Download ONLY Sent Via Email (1 Pet)",
          quantity: "1",
          status: 1,
          price: "44.99",
          status_name: "New",
          image_url:
            "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
          slug: "new",
        },
      ],
    },
    {
      id: 53996,
      order_name: "PCA60270",
      created_at: "2024-11-07T00:21:56.000000Z",
      design_manager_id: null,
      quality_analyst_id: null,
      designer_id: null,
      order_status: "Paid",
      store_id: 1,
      urjent_status: 0,
      name: "Hutchison",
      status: "",
      order_item_count: 1,
      store_name: "storetique.myshopify.com",
      designer_details: [],
      quality_analyst: [],
      background_images_status: 0,
      total_artwork: 4,
      total_artwork_charges: 0,
      order_item: [
        {
          id: 50077,
          order_id: 53996,
          name: "Custom Cartoon Art Wrapped Pet Canvas - 4 / Digital Download",
          sku: "Digital Download ONLY Sent Via Email (4 Pets)",
          quantity: "1",
          status: 1,
          price: "93.11",
          status_name: "New",
          image_url:
            "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
          slug: "new",
        },
      ],
    },
    {
      id: 53981,
      order_name: "PCA60269",
      created_at: "2024-11-06T23:10:41.000000Z",
      design_manager_id: null,
      quality_analyst_id: null,
      designer_id: null,
      order_status: "Paid",
      store_id: 1,
      urjent_status: 0,
      name: "Jason Masclet",
      status: "",
      order_item_count: 1,
      store_name: "storetique.myshopify.com",
      designer_details: [],
      quality_analyst: [],
      background_images_status: 0,
      total_artwork: 2,
      total_artwork_charges: 0,
      order_item: [
        {
          id: 50076,
          order_id: 53981,
          name: "Essential Gift Set - 2",
          sku: "CanvsWrp-ImgWrp-8x10-1",
          quantity: "1",
          status: 1,
          price: "92.81",
          status_name: "New",
          image_url:
            "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
          slug: "new",
        },
      ],
    },
    {
      id: 53970,
      order_name: "PCA60268",
      created_at: "2024-11-06T22:21:51.000000Z",
      design_manager_id: null,
      quality_analyst_id: null,
      designer_id: null,
      order_status: "Paid",
      store_id: 1,
      urjent_status: 0,
      name: "John Terrell",
      status: "",
      order_item_count: 1,
      store_name: "storetique.myshopify.com",
      designer_details: [],
      quality_analyst: [],
      background_images_status: 0,
      total_artwork: 1,
      total_artwork_charges: 0,
      order_item: [
        {
          id: 50075,
          order_id: 53970,
          name: "Custom Cartoon Art Wrapped Pet Canvas - 1 / Digital Download",
          sku: "Digital Download ONLY Sent Via Email (1 Pet)",
          quantity: "1",
          status: 1,
          price: "46.54",
          status_name: "New",
          image_url:
            "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
          slug: "new",
        },
      ],
    },
    {
      id: 53968,
      order_name: "PCA60267",
      created_at: "2024-11-06T22:16:45.000000Z",
      design_manager_id: null,
      quality_analyst_id: null,
      designer_id: null,
      order_status: "Paid",
      store_id: 1,
      urjent_status: 0,
      name: "Cindy Davis",
      status: "",
      order_item_count: 1,
      store_name: "storetique.myshopify.com",
      designer_details: [],
      quality_analyst: [],
      background_images_status: 0,
      total_artwork: 0,
      total_artwork_charges: 0,
      order_item: [
        {
          id: 50074,
          order_id: 53968,
          name: "Gift For Pet Owner Dog Lover Gift, Personalised Gift Turn Your Pet Into A Cartoon, Hand-Drawn Digital Pet Art, Photo To Cartoon - 12x18 Inch / 3 People or Pets",
          sku: "CanvsWrp-ImgWrp-12x18-7-CT1",
          quantity: "1",
          status: 10,
          price: "280.00",
          status_name: "Complete",
          image_url:
            "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
          slug: "complete",
        },
      ],
    },
    {
      id: 53955,
      order_name: "PCA60266",
      created_at: "2024-11-06T21:19:20.000000Z",
      design_manager_id: null,
      quality_analyst_id: null,
      designer_id: null,
      order_status: "Paid",
      store_id: 1,
      urjent_status: 0,
      name: "Sarah Bass",
      status: "",
      order_item_count: 3,
      store_name: "storetique.myshopify.com",
      designer_details: [],
      quality_analyst: [],
      background_images_status: 0,
      total_artwork: 2,
      total_artwork_charges: 0,
      order_item: [
        {
          id: 50071,
          order_id: 53955,
          name: "Add a Digital Download of Your Art",
          sku: "Add a Digital Download of Your Art",
          quantity: "1",
          status: 1,
          price: "7.76",
          status_name: "New",
          image_url:
            "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
          slug: "new",
        },
        {
          id: 50072,
          order_id: 53955,
          name: "Skip Queue: Receive Your Art Proof 2 Days faster",
          sku: "Skip-Art-Queue",
          quantity: "1",
          status: 1,
          price: "7.76",
          status_name: "New",
          image_url:
            "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
          slug: "new",
        },
        {
          id: 50073,
          order_id: 53955,
          name: 'Custom Cartoon Art Wrapped Pet Canvas - 2 / 8" x 10" (Small)',
          sku: "8x10White-20200717210424578-20201227235006745",
          quantity: "5",
          status: 1,
          price: "93.08",
          status_name: "New",
          image_url:
            "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
          slug: "new",
        },
      ],
    },
    {
      id: 53946,
      order_name: "PCA60265",
      created_at: "2024-11-06T20:38:07.000000Z",
      design_manager_id: null,
      quality_analyst_id: null,
      designer_id: null,
      order_status: "Paid",
      store_id: 1,
      urjent_status: 0,
      name: "Maggie Curtis",
      status: "",
      order_item_count: 3,
      store_name: "storetique.myshopify.com",
      designer_details: [],
      quality_analyst: [],
      background_images_status: 0,
      total_artwork: 1,
      total_artwork_charges: 0,
      order_item: [
        {
          id: 50068,
          order_id: 53946,
          name: "Skip Queue: Receive Your Art Proof 2 Days faster",
          sku: "Skip-Art-Queue",
          quantity: "1",
          status: 1,
          price: "7.76",
          status_name: "New",
          image_url:
            "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
          slug: "new",
        },
        {
          id: 50069,
          order_id: 53946,
          name: "Add a Digital Download of Your Art",
          sku: "Add a Digital Download of Your Art",
          quantity: "1",
          status: 1,
          price: "7.76",
          status_name: "New",
          image_url:
            "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
          slug: "new",
        },
        {
          id: 50070,
          order_id: 53946,
          name: 'Custom Cartoon Art Wrapped Pet Canvas - 1 / 8" x 10" (Small)',
          sku: "8x10-20240715141148657-2024071514162237",
          quantity: "1",
          status: 1,
          price: "77.54",
          status_name: "New",
          image_url:
            "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/Cartoondogstyle.jpg?v=1618673915",
          slug: "new",
        },
      ],
    },
  ];

  return (
    <Table
      // scroll={{x: 'auto', y: 400}}
      columns={columns}
      dataSource={orders}
      // loading={isSpinner}
      pagination={{
        current: 1,
        pageSize: 10,
        total: 100,
        //   current: page,
        //   pageSize: pageSize,
        //   total: listData?.total,
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} of ${total} items`,
        pageSizeOptions: ["10", "20", "50", "100", "500"],
        showSizeChanger: true,
        //   onChange: (page, pageSize) => {
        //     setPage(page);
        //     setPageSize(pageSize);
        //   },

        className: "custom-pagination",
      }}
      // loading={isLoading}
      // rowSelection={{
      //   type: "checkbox",
      //   selectedRowKeys: selectedRowKeys,
      //   onChange: handleRowSelect,
      // }}
      rowKey={(record) => record.id.toString()}
      // expandedRowRender={expandedRowRender}
      // onRow={(record) => ({
      //   onClick: () => setCurrentOrderId(record.id),
      // })}
      rowClassName={(record) =>
        record.urjent_status ? "table-active-row" : ""
      }
    />
  );
};

export default DataTable;
