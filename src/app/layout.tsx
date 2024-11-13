import type { Metadata } from "next";
import "@/assets/globals.scss";
import { ConfigProvider } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import theme from "../contants/theme/themeConfig";
import AuthProvider from "./(auth)/auth/auth";

export const metadata: Metadata = {
  title: "DOD",
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
      <AuthProvider>
        <html lang="en">
          <body>
            <AntdRegistry>{children}</AntdRegistry>
          </body>
        </html>
      </AuthProvider>
    </ConfigProvider>
  );
}
