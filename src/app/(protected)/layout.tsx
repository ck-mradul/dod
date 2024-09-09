"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { Layout } from "antd";
import AppHeader from "./ui/AppHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedRoute>
      <Layout>
        <AppHeader />
        <Layout.Content>{children}</Layout.Content>
      </Layout>
    </ProtectedRoute>
  );
}
