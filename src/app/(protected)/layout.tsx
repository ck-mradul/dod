"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { Layout } from "antd";
import AppHeader from "../../components/layout/AppHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedRoute>
      <Layout className="!bg-white">
        <AppHeader />
        <div className="lg:container bg-white">
          <Layout.Content>{children}</Layout.Content>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
