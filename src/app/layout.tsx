import type { Metadata } from "next";
import "@/assets/globals.scss";
import { ConfigProvider } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import theme from "../contants/theme/themeConfig";

export const metadata: Metadata = {
  title: "OLM 2.0",
  description: "Welcome!",
  icons: {
    icon: "../assets/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConfigProvider theme={theme}>
      <html lang="en">
        <body>
          <AntdRegistry>{children}</AntdRegistry>
        </body>
      </html>
    </ConfigProvider>
  );
}
