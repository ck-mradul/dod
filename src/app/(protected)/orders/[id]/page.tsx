"use client";
import SegmentHeading from "@/components/commonComponents/SegmentHeading";
import React from "react";
import ListAvatar from "./listAvatar";
import { MailOutlined, MobileFilled, UserOutlined } from "@ant-design/icons";
import { Button, Col, Divider, List, Row, Tabs, Tag, Typography } from "antd";
import Title from "antd/es/typography/Title";
import OrderActivityTimeline from "./OrderActivityTimelineCard";
import FileUpload from "@/components/commonComponents/FileUpload";

const OrderDetail = () => {
  const orderItems = [
    {
      id: 50110,
      store_id: 1,
      designer_id: null,
      design_manager_id: null,
      quality_analyst_id: null,
      store_type: 1,
      order_id: 54374,
      store_order_id: "5718966894810",
      line_item_id: "14080710181082",
      name: 'Custom Wrapped Canvas - Existing Customers - 8" x 10"',
      order_name: "#PCA60298",
      sku: "8x10White-20200717210424578-20210211233315934",
      product_id: "6270948147367",
      variant_id: "38138375438503",
      quantity: "1",
      status: 1,
      price: "41.02",
      order_item_processing_fee: "0.00",
      reject_reason: null,
      rejected_timestamp: null,
      reject_image_url: null,
      digital_download: "0",
      carrier_code: null,
      tracking_id: null,
      tracking_url: null,
      type: "order",
      product_type: 0,
      tracking_timestamp: null,
      background_image_url: null,
      created_at: "2024-11-08T05:27:23.000000Z",
      deleted_at: null,
      status_name: "New",
      image_url:
        "https://cdn.shopify.com/s/files/1/0055/0957/8803/products/canvas.jpg?v=1627616281",
      slug: "new",
      product_variant_images: [],
      customer_order_files: [],
      order_item_note: [],
      artwork_files: [],
      production_files: [],
      digital_download_files: [],
      order_item_property: [],
    },
  ];

  const items: TabsProps["items"] = [
    {
      key: "customer",
      label: "Customer files",
      children: <FileUpload />,
      //   <FileUpload
      //     files={customerFiles}
      //     // disabled={true}
      //     key={`customer_${selectedItem?.id}_${customerFiles?.length}`}
      //     accept="image/png, image/jpeg"
      //     onChange={handleFileChange(
      //       selectedItem?.id.toString(),
      //       listData?.id,
      //       "customer-file",
      //       "customer_upload_file"
      //     )}
      //     onRemove={(eventType: any) =>
      //       handlerRemoveCustomerUploadedFile(eventType, "customer_file")
      //     }
      //     isDownloaded={true}
      //   />
      // ),
    },
    {
      key: "backgroud",
      label: "Background Image",
      children: <FileUpload />,

      // disabled: !selectedItem?.background_image_url,
      // children: (
      //   <>
      //     {selectedItem?.background_image_url ? (
      //       <>
      //         <div style={{ width: 200, height: 200 }} key={selectedItem?.id}>
      //           <Image
      //             width="100%"
      //             height="100%"
      //             src={selectedItem?.background_image_url}
      //             alt="background image"
      //           />
      //         </div>
      //         <Button
      //           className="mt-2"
      //           type="primary"
      //           onClick={() => downloadFile(selectedItem?.background_image_url)}
      //         >
      //           Download
      //         </Button>
      //       </>
      //     ) : (
      //       <div style={{ height: 200 }}>
      //         <Alert
      //           message="No Background Image"
      //           description={<p>customer not select background image yet!!</p>}
      //           type="warning"
      //           showIcon
      //         />
      //       </div>
      //     )}
      //   </>
      // ),
    },
    {
      key: "approval",
      label: "Artwork files",
      children: <FileUpload />,

      // disabled: !permissions?.artwork_upload,
      // children: (
      //   <>
      //     <Tabs
      //       defaultActiveKey="1"
      //       items={uploadArtworkImages}
      //       onChange={(e) => {
      //         setArtWorkUploadTab(e);
      //         refetchListData();
      //       }}
      //     />
      //     <FileUpload
      //       accept="image/png, image/jpeg"
      //       files={artWorkFiles}
      //       key={`${selectedItem?.id}+${artWorkFiles?.length}+${artWorkUploadTab}`}
      //       onChange={handleFileChange(
      //         selectedItem?.id?.toString(),
      //         listData?.id,
      //         "artworkfile",
      //         artWorkUploadTab === "1"
      //           ? "front_artwork_file"
      //           : "back_artwork_file"
      //       )}
      //       onRemove={(eventType: any) =>
      //         handlerOnRemove(eventType, "artwork_file")
      //       }
      //       isDownloaded={true}
      //     />
      //   </>
      // ),
    },
    {
      key: "production",
      label: "Production files",
      children: <FileUpload />,

      // disabled: !permissions?.production_file_upload,
      // children: (
      //   <>
      //     <Tabs
      //       defaultActiveKey="1"
      //       items={uploadProdImages}
      //       onChange={(e) => {
      //         setProdUploadTab(e);
      //         refetchListData();
      //       }}
      //     />
      //     <FileUpload
      //       accept="image/png, image/jpeg"
      //       files={selectedItem?.production_files
      //         ?.filter((file) => file.type.toString() === prodUploadTab)
      //         .map((file) => ({
      //           id: file.id,
      //           image_url: file.production_file_url,
      //         }))}
      //       key={selectedItem?.id + prodUploadTab}
      //       onChange={handleFileChange(
      //         selectedItem?.id.toString(),
      //         listData?.id,
      //         "productionfile",
      //         prodUploadTab === "1"
      //           ? "front_production_file"
      //           : "back_production_file"
      //       )}
      //       onRemove={(eventType: any) =>
      //         handlerOnRemove(eventType, "production_file")
      //       }
      //       isDownloaded={true}
      //     />
      //   </>
      // ),
    },
    {
      key: "digital-production",
      label: "Digital download files",
      children: <FileUpload />,

      // children: (
      //   <FileUpload
      //     accept="image/png, image/jpeg"
      //     files={selectedItem?.digital_download_files?.map((file) => ({
      //       id: file.id,
      //       image_url: file.digital_url,
      //     }))}
      //     key={"digitalfile" + selectedItem?.id}
      //     onChange={handleFileChange(
      //       selectedItem?.id.toString(),
      //       listData?.id,
      //       "digitalfile",
      //       "digital_download_file"
      //     )}
      //     onRemove={(eventType: any) =>
      //       handlerOnRemove(eventType, "digital_download_file")
      //     }
      //     isDownloaded={true}
      //   />
      // ),
    },
  ];
  const timeLineData = [
    {
      id: 824022,
      order_id: 55363,
      order_item_id: null,
      title: null,
      message: "Nikolai Robillo assigend Order to Trix",
      updated_value: null,
      created_at: "2024-11-11T07:17:02.000000Z",
      updated_at: "2024-11-11T07:17:02.000000Z",
    },
  ];

  const selectedItem = {
    id: 50308,
    store_id: 1,
    designer_id: 11,
    design_manager_id: null,
    quality_analyst_id: null,
    store_type: 1,
    order_id: 55863,
    store_order_id: "5723246690522",
    line_item_id: "14088944812250",
    name: 'Custom Cartoon Art Wrapped Pet Canvas - 1 / 12" x 18" (Medium)',
    order_name: "#PCA60416",
    sku: "12x18 white-20200717210424578-20201227235006270",
    product_id: "5504164626599",
    variant_id: "37689169150119",
    quantity: "1",
    status: 4,
    price: "88.95",
    order_item_processing_fee: "0.00",
    reject_reason: null,
    rejected_timestamp: null,
    reject_image_url: null,
    digital_download: "0",
    carrier_code: null,
    tracking_id: null,
    tracking_url: null,
    type: "order",
    product_type: 0,
    tracking_timestamp: null,
    background_image_url: null,
    created_at: "2024-11-11T15:48:42.000000Z",
    deleted_at: null,
    status_name: "Waiting for approval",
    image_url:
      "https://cdn.shopify.com/s/files/1/0055/0957/8803/files/custom-cartoon-pet-canvas_4e60585b-556d-4df5-9acd-fe3a1bc4d88d.jpg?v=1721939297",
    slug: "send-for-approval",
    product_variant_images: [],
    customer_order_files: [
      {
        id: 173653,
        s3_image_url:
          "https://offiles.s3.eu-west-2.amazonaws.com/offiles/image_9347_20241111154845.jpeg",
        designer_id: 11,
        order_item_id: 50308,
        designer_details: {
          id: 11,
          name: "Edward Lanojan",
          email: "lanojan59@gmail.com",
          store_count: 0,
          billing_status: false,
          assigned_stores: [
            {
              id: 191,
              user_id: 11,
              store_id: 1,
              store_name: "PetCreationsArt",
            },
          ],
        },
      },
    ],
    order_item_note: [],
    artwork_files: [
      {
        id: 35967,
        order_id: 55863,
        order_item_id: 50308,
        designer_id: 11,
        artwork_url:
          "https://offiles.s3.eu-west-2.amazonaws.com/offiles/%23PCA60416_5723246690522_front_artwork_1731415877.png",
        approval_status: 0,
        rejected_by_name: null,
        type: "1",
        reject_reason: null,
        rejected_timestamp: null,
        reject_image_url: null,
        name: "PCA60416",
        custmName: "Richard Garrick",
        storeName: "storetique.myshopify.com",
      },
      {
        id: 35970,
        order_id: 55863,
        order_item_id: 50308,
        designer_id: 11,
        artwork_url:
          "https://offiles.s3.eu-west-2.amazonaws.com/offiles/%23PCA60416_5723246690522_front_artwork_1731451868.png",
        approval_status: 0,
        rejected_by_name: null,
        type: "1",
        reject_reason: null,
        rejected_timestamp: null,
        reject_image_url: null,
        name: "PCA60416",
        custmName: "Richard Garrick",
        storeName: "storetique.myshopify.com",
      },
    ],
    production_files: [],
    digital_download_files: [],
    order_item_property: [
      {
        id: 26086,
        order_item_id: 50308,
        key: "pet 1 URL",
        value: "https://ucarecdn.com/71acd463-f21a-43be-871e-cd1a95c9c5f7/",
      },
      {
        id: 26087,
        order_item_id: 50308,
        key: "Pet 1 Name",
        value: "Buddy",
      },
      {
        id: 26088,
        order_item_id: 50308,
        key: "Background Image",
        value: "Mountain",
      },
    ],
  };
  const isValidUrl = (string: string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  return (
    <>
      <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-40">
        <SegmentHeading text="Order Details" icon={true} />
        <div className="bg-white rounded-2xl p-6">
          <Row className=" justify-between ">
            <Col xs={24} sm={24} md={12}>
              <strong className="text-xl mb-2 ">Assigned Designer</strong>
              <Row className=" border-2 rounded-md border-gray-100 p-4 my-4 mr-4">
                <ListAvatar
                  iconImage={<UserOutlined />}
                  titleHeading="Designer Name"
                  titleName={"Not Available"}
                />
                <ListAvatar
                  iconImage={<MailOutlined />}
                  titleHeading="Email Address"
                  titleName={"Not Available"}
                />
              </Row>
            </Col>

            <Col xs={24} sm={24} md={12}>
              <strong className="text-xl mb-2"> Customer Information</strong>
              <Row className=" border-2 rounded-md border-gray-100 p-4 my-4 mr-4">
                <ListAvatar
                  iconImage={<UserOutlined />}
                  titleHeading={"abc"}
                  titleName={"def@gmail.com"}
                />
                <ListAvatar
                  iconImage={
                    // <i className="bi bi-telephone-fill me-2 green fs-3"></i>
                    <MobileFilled />
                  }
                  titleHeading="Phone Number"
                  titleName={"test Name"}
                />
              </Row>
            </Col>
          </Row>
          <Row className="justify-between">
            <Col xs={24} sm={24} md={6}>
              <div className="mb-4 mb-xl-8">
                <strong className=" mb-6 mb-xl-8 text-xl ">Order Item</strong>
              </div>
              <List
                bordered
                dataSource={orderItems}
                renderItem={(orderItem: any, index) => (
                  <List.Item className={`cursor-pointer rounded-3xl py-3 px-5`}>
                    <div className="row gap-3">
                      <Tag
                        className="m-0 fw-bold"
                        // color={getStatusColor(orderItem?.slug)}
                      >
                        {orderItem?.status_name}
                      </Tag>
                      <p className="my-2 text-sm font-medium text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[225px] 2xl:max-w-[350px]">
                        {orderItem.name}
                      </p>
                      <div className="flex">
                        <p className="productPrice mb-0 h5 text-muted me-4">
                          ${orderItem.price}
                        </p>
                        <Tag color="blue" bordered>
                          Qty:{orderItem?.quantity}
                        </Tag>
                      </div>
                    </div>
                  </List.Item>
                )}
              />
            </Col>
            <Col xs={24} sm={24} md={17} className="">
              <div className="mb-4 mb-xl-8">
                <strong className=" mb-6 mb-xl-8 text-xl">
                  Order Item Details
                </strong>
              </div>

              <div className="bg-slate-100 rounded-xl p-6 itemDetails">
                <Row className="g-4 justify-between">
                  <div className="col-auto">
                    <div>
                      <strong className="itemTitle mb-0 text-xl">
                        {`Custom Cartoon Art Wrapped Pet Canvas - 1 / 12" x 18"(Medium)`}
                      </strong>
                    </div>
                    <span className="text-[#6D6D6D] m-0 text-sm">
                      SKU: 12x18 white-20200717210424578-20201227235006270
                    </span>
                  </div>
                  <Button type="primary">Sample Button</Button>
                </Row>
                <Divider />
                {selectedItem &&
                  selectedItem?.order_item_property?.length > 0 && (
                    <div>
                      <Title className="heading mb-6 mb-xl-8" level={4}>
                        Product Information
                      </Title>

                      <List
                        header={
                          <div>
                            <p
                              style={{ width: "30%" }}
                              className="inline-block"
                            >
                              NAME
                            </p>
                            <p className="inline-block">VALUE</p>
                          </div>
                        }
                        bordered
                        dataSource={selectedItem?.order_item_property}
                        renderItem={(item) => (
                          <List.Item
                            className="justify-content-start"
                            key={item?.id}
                          >
                            <Typography style={{ width: "30%" }}>
                              {item?.key}
                            </Typography>
                            {isValidUrl(item.value) ? (
                              <a
                                style={{
                                  overflowWrap: "anywhere",
                                  width: "70%",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                }}
                                className="text-black orderDetailLink"
                                href={item.value}
                                target="_blank"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p style={{ width: "70%" }}>{item.value}</p>
                            )}
                          </List.Item>
                        )}
                      />
                    </div>
                  )}
                <Divider />

                <div className="photosWrapper pb-6">
                  <Title className=" mb-6 mb-xl-8" level={4}>
                    Photos
                  </Title>
                  {/* <div className="flex justify-between items-stretch flex-wrap bg-white rounded-xl p-5 flex-grow-0 py-0"> */}
                  <div className=" bg-white  rounded-xl p-4 flex-grow-0  custom-tabs">
                    <Tabs
                      defaultActiveKey="1"
                      items={items}
                      type="card"
                      // onChange={(tab) => onTabChange(tab)}
                    />
                  </div>
                  <div className="mt-3">
                    <strong>
                      You can upload multiple images by pressing Ctrl (Windows)
                      or Command (⌘) (Mac) and clicking on each image.
                    </strong>
                  </div>
                </div>
                {/* <Divider /> */}
                {/* {true && (
                  <>
                    <h3 className=" mb-6 mb-xl-8">Timeline Activity</h3>
                    <TimeLineCard
                      orderItemTimeLineDetails={orderItemTimeLineDetails}
                      selectedItem={selectedItem}
                    />
                  </>
                )} */}
              </div>
            </Col>
          </Row>
          <Divider />
          <div className="pt-8 mb-4 mb-xl-8">
            <strong className="mb-6 mb-xl-8 text-xl">
              Order Timeline Activity
            </strong>
          </div>

          <OrderActivityTimeline
            timeLineData={timeLineData}
            selectedItem={selectedItem}
          />
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
