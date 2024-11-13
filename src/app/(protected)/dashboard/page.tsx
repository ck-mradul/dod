import { Avatar, Col, Row } from "antd";
import React from "react";
import DashBoardCard from "./dashboardCard";
import { ShoppingCartOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import SegmentHeading from "@/components/commonComponents/SegmentHeading";

const Dashboard = () => {
  const dashboardData = {};
  console.log("dashboard loaded");
  return (
    <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-40">
      <SegmentHeading text="Dashboard" icon={false} />
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 30, xl: 30, xxl: 30 }}
        // className="justify-between"
      >
        <Col
          className="gutter-row"
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={8}
          xxl={7}
        >
          <DashBoardCard
            title="Total Shopify store"
            value={dashboardData?.shopify_store_count || "1"}
            icon={
              <Avatar
              // src={<img src={"media/icons/shopify.svg"} alt="avatar" />}
              />
            }
            subLitle="Shopify store list"
            url={"/orders"}
          />
        </Col>
        <Col
          className="gutter-row"
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={8}
          xxl={7}
        >
          <DashBoardCard
            title="Total Etsy store"
            value={dashboardData?.etsy_store_count || "0"}
            icon={
              <Avatar
              // src={<img src={"media/icons/etsy.svg"} alt="avatar" />}
              />
            }
            subLitle="Etsy store list"
            url={"/orders"}

            // url={isAdmin ? "apps/stores?s=2" : "/u/connectStore?s=2"}
          />
        </Col>
        <Col
          className="gutter-row"
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={8}
          xxl={7}
        >
          <DashBoardCard
            title="Total Store Managers"
            value={dashboardData?.total_store_manager || "0"}
            icon={<UsergroupAddOutlined style={{ fontSize: "28px" }} />}
            subLitle="Store Manager list"
            url={"/orders"}
          />
        </Col>
      </Row>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 30, xl: 30, xxl: 30 }}
        // className="justify-between"
      >
        <Col
          className="gutter-row"
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={8}
          xxl={7}
        >
          <DashBoardCard
            title="New Orders"
            value={dashboardData?.new_order || "0"}
            icon={<ShoppingCartOutlined style={{ fontSize: "28px" }} />}
            subLitle="New Orders list"
            url="/u/ordersPage/ordersListing?new_tab"
          />
        </Col>

        <Col
          className="gutter-row"
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={8}
          xxl={7}
        >
          <DashBoardCard
            title="Waiting for Approval Orders"
            value={dashboardData?.awating_order || "0"}
            icon={<ShoppingCartOutlined style={{ fontSize: "28px" }} />}
            subLitle="Waiting for Approval Orders list"
            url="/u/ordersPage/ordersListing"
          />
        </Col>

        <Col
          className="gutter-row"
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={8}
          xxl={7}
        >
          <DashBoardCard
            title="Total Orders"
            value={dashboardData?.total_orders_count || "0"}
            icon={<ShoppingCartOutlined style={{ fontSize: "28px" }} />}
            subLitle="All Orders list"
            url="/u/ordersPage/ordersListing"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
