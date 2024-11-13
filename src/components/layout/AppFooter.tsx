"use client";
// import type { GetProps } from "antd";
import { Layout } from "antd";
import React from "react";
// import NavigationHandler from "@/components/layout/navigation/NavigationHandler";
// import { useAuth } from "@/app/(auth)/auth/auth";

// type SearchProps = GetProps<typeof Input.Search>;

const { Footer } = Layout;
// const { Search } = Input;

const AppFooter: React.FC = () => {
  //   const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  //     console.log(info?.source, value);

  return (
    <Footer className=" !bg-white !w-full ">
      <div className="flex justify-between">
        <div>Digital On Demand 2024©Dod</div>
        <div> 2024©Dod</div>
      </div>
    </Footer>
  );
};

export default AppFooter;
