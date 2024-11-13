"use client";
import { useAuth } from "@/app/(auth)/auth/auth";
import React from "react";

const CatalogProductsTab: React.FC = () => {
  const { user, token } = useAuth();

  return (
    <div className="pt-8">
      <h1>Catalog Products Content</h1>
    </div>
  );
};

export default CatalogProductsTab;
