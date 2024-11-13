"use client";
import type { GetProps } from "antd";
import { Avatar, Dropdown, Input, Layout, Menu, Row } from "antd";
import React from "react";
import NavigationHandler from "@/components/layout/navigation/NavigationHandler";
import { useAuth } from "@/app/(auth)/auth/auth";
import { FormOutlined, UserOutlined } from "@ant-design/icons";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import { clsx } from "yet-another-react-lightbox";
import Link from "next/link";

type SearchProps = GetProps<typeof Input.Search>;

const { Header } = Layout;
const { Search } = Input;

// eslint-disable-next-line @typescript-eslint/no-var-requires

const AppHeader: React.FC = () => {
  const { logout } = useAuth();

  const onSearch: SearchProps["onSearch"] = (value, _e, info) => {
    console.log(info?.source, value);
  };

  const menu = (
    <Menu className="w-[300px]">
      <Menu.Item className="menu-header text-center p-0">
        <div className="menu-content block align-items-center">
          <Avatar
            style={{
              backgroundColor: "#fceadd",
              verticalAlign: "middle",
              color: "#f19657",
            }}
            size="large"
          >
            {"L"}
          </Avatar>
          <div className="d-block">
            <div className="fw-bolder d-block align-items-center justify-between fs-5">
              {"Name"}
            </div>
            <a href="#" className="text-muted text-hover-primary fs-7">
              {"Email"}
            </a>
          </div>
        </div>
      </Menu.Item>
      <Menu.Item
        style={{ cursor: "default" }}
        className="bg-white text-center text-primary "
      >
        <Link href="/apps/userProfile/userProfile" className="h5 py-1">
          Edit Profile
        </Link>{" "}
        <FormOutlined
          style={{
            color: "#17BE9F",
          }}
        />
      </Menu.Item>
      <Menu.Item
        className="bg-primary rounded-2 text-center text-white fw-bold"
        onClick={logout}
      >
        Sign Out
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Row className=" !bg-Indigo !z-50 !w-full p-2 justify-between ">
        <a href="/">
          <Image
            width={280}
            height={100}
            src={logo}
            className="justify-start"
            alt="DOD LOGO"
          />
        </a>
        <div className="mt-4">
          <NavigationHandler />
        </div>
        <div className="mt-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-24 2xl:w-1/6 ">
          <Search placeholder="Search..." onSearch={onSearch} />
        </div>

        {/* <div className="hidden 2xl:block">
          <Search placeholder="Search..." onSearch={onSearch} size="large" />
        </div>

        <div className="hidden lg:block">
          <SearchOutlined className="text-white cursor-pointer mt-6" style={} />
        </div> */}
        <div className="mt-4">
          <Dropdown
            overlay={menu}
            trigger={["click"]}
            placement="bottomRight"
            // onOpenChange={(e) => {
            //   setShowUserMenu(e);
            // }}
          >
            <div
              className={clsx("cursor-pointer symbol")}
              data-of-menu-trigger="{default: 'click'}"
              data-of-menu-attach="parent"
              data-of-menu-placement="bottom-end"
            >
              <Avatar size={"large"} icon={<UserOutlined />} />
            </div>
          </Dropdown>
        </div>
      </Row>
    </>
  );
};

export default AppHeader;
