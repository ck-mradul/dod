import {
  FileDoneOutlined,
  ShoppingOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { Tabs, TabsProps } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const tabItems: TabsProps["items"] = [
  {
    key: "orders",
    label: "Orders",
    icon: <FileDoneOutlined />,
  },
  {
    key: "catalog",
    label: "Catalog Products",
    icon: <ShoppingOutlined />,
  },
  {
    key: "vendors",
    label: "Vendors",
    icon: <WalletOutlined />,
  },
];

const NavigationHandler: React.FC = () => {
  const [activeTabKey, setActiveTabKey] = useState<string | undefined>();

  const pathname = usePathname();
  const newPathname = pathname.replace(/\//g, "");

  const router = useRouter();

  const onChange = (key: string) => {
    setActiveTabKey(key);
    router.push(key);
  };

  useEffect(() => {
    if (!activeTabKey) {
      setActiveTabKey(newPathname);
    }
  }, []);

  return (
    <Tabs
      items={tabItems}
      onChange={onChange}
      centered
      activeKey={activeTabKey}
      className="justify-center flex"
    />
  );
};

export default NavigationHandler;
