"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { Layout } from "antd";
import AppHeader from "../../components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ProtectedRoute>
    //   <AppHeader />
    //   <Layout className="!bg-slate-200">
    //     <div className="lg:container bg-white">
    //       <Layout.Content>{children}</Layout.Content>
    //     </div>
    //   </Layout>
    //   <AppFooter />
    // </ProtectedRoute>

    <ProtectedRoute>
      <div className="flex flex-col min-h-screen ">
        <AppHeader />
        <Layout className="!bg-GrayishBlue rounded-2xl ">
          {/* <div className="lg:container  rounded-2xl my-10"> */}
          <Layout.Content>{children}</Layout.Content>
          {/* </div> */}
        </Layout>
        <AppFooter />
      </div>
    </ProtectedRoute>
  );
}
