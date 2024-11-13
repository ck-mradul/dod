import {
  FileDoneOutlined,
  HomeOutlined,
  SettingOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Dropdown, Menu, Tabs, TabsProps } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NavigationHandler: React.FC = () => {
  const [activeTabKey, setActiveTabKey] = useState<string | undefined>("");
  const pathname = usePathname();
  const newPathname = pathname.replace(/\//g, "");
  const router = useRouter();

  const menu = (
    <Menu
      onClick={({ key }) => {
        setActiveTabKey("manage-products");
        if (key === "connect-products") {
          router.push("/connect-products");
        } else if (key === "connected-products") {
          router.push("/connected-products");
        }
      }}
      items={[
        {
          key: "connect-products",
          label: "Connect Products",
        },
        {
          key: "connected-products",
          label: "Connected Products",
        },
      ]}
    />
  );

  const tabItems: TabsProps["items"] = [
    {
      key: "/dashboard",
      label: (
        <span>
          <HomeOutlined /> Dashboard
        </span>
      ),
    },
    {
      key: "/orders",
      label: (
        <span>
          <FileDoneOutlined /> Orders
        </span>
      ),
    },
    {
      key: "manage-products",
      label: (
        <Dropdown overlay={menu} trigger={["click"]}>
          <span>
            <ShoppingOutlined /> Manage Products
          </span>
        </Dropdown>
      ),
    },
    {
      key: "/settings",
      label: (
        <span>
          <SettingOutlined /> Settings
        </span>
      ),
    },
  ];

  const onChange = (key: string) => {
    if (key && key !== "manage-products") {
      setActiveTabKey(key);
      router.push(key);
    }
  };

  useEffect(() => {
    if (!activeTabKey) {
      setActiveTabKey(newPathname);
    }
  }, []);

  useEffect(() => {
    if (pathname.includes("/orders")) {
      setActiveTabKey("/orders");
    } else if (pathname.includes("/dashboard")) {
      setActiveTabKey("/dashboard");
    } else if (pathname.includes("/settings")) {
      setActiveTabKey("/settings");
    } else if (pathname.includes("/connect-products")) {
      setActiveTabKey("manage-products");
      router.push("/connect-products");
    } else if (pathname.includes("/connected-products")) {
      setActiveTabKey("manage-products");
      router.push("/connected-products");
    } else {
      setActiveTabKey("/dashboard");
    }
  }, [pathname, router]);

  return (
    <Tabs
      items={tabItems.map((item) => ({
        ...item,
        label: (
          <span
            className={`${
              activeTabKey === item.key
                ? "text-[#1E3D59] bg-white"
                : "text-white bg-transparent"
            } font-${
              activeTabKey === item.key ? "normal" : "light"
            } px-4 py-2 flex items-center rounded-lg transition-colors duration-300 text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-[18px] `}
          >
            <span>{item.label}</span>
          </span>
        ),
      }))}
      onChange={onChange}
      centered
      defaultActiveKey={activeTabKey}
      activeKey={activeTabKey}
      tabBarStyle={{
        backgroundColor: "#1E3D59",
        borderRadius: "8px",
        height: "48px",
      }}
    />
  );
};

export default NavigationHandler;
