"use client";
import {
  FileDoneOutlined,
  ShoppingOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import type { GetProps } from "antd";
import { Button, Col, Input, Layout, Row, Tabs } from "antd";
import React from "react";
import CatalogProductsTab from "../components/tabs/CatalogProductsTab";
import OrdersTab from "../components/tabs/OrdersTab";
import VendorsTab from "../components/tabs/VendorsTab";
import CategoriesButton from "./CategoriesButton";

type SearchProps = GetProps<typeof Input.Search>;

const { Header } = Layout;
const { Search } = Input;

const tabItems = [
  {
    key: "orders",
    label: "Orders",
    icon: <FileDoneOutlined />,
    component: <OrdersTab />,
  },
  {
    key: "catalog-products",
    label: "Catalog Products",
    icon: <ShoppingOutlined />,
    component: <CatalogProductsTab />,
  },
  {
    key: "vendors",
    label: "Vendors",
    icon: <WalletOutlined />,
    component: <VendorsTab />,
  },
];

const AppHeader: React.FC = () => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <Header className="!sticky !bg-white !z-50 !w-full !h-28 !border-b-2">
      <Row justify="space-between" align="middle">
        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
          <div className="logo mr-5 font-extrabold">OLM LOGO</div>
        </Col>
        <Col xs={16} sm={16} md={16} lg={16} xl={16}>
          <div className="flex align-middle">
            <CategoriesButton />
            <Search
              placeholder="Search..."
              onSearch={onSearch}
              className="!w-1/2"
              size="large"
            />
          </div>
        </Col>

        <Col className="text-end" xs={4} sm={4} md={4} lg={4} xl={4}>
          <Button type="default" size="large">
            Sign In
          </Button>
        </Col>
      </Row>

      <div className="justify-center flex">
        <Tabs defaultActiveKey="orders">
          {tabItems.map((tab) => (
            <Tabs.TabPane
              key={tab.key}
              tab={
                <span className="flex">
                  {tab.icon}
                  <pre>{tab.label}</pre>
                </span>
              }
            >
              {tab.component}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
    </Header>
  );
};

export default AppHeader;
