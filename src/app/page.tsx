"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    // router.push("/orders");
    router.push("/dashboard");
  }, []);

  return (
    <div className="flex items-center justify-center h-screen ">
      <h1 className="text-3xl">Welcome to the Protected Home Page</h1>
    </div>
  );
};

export default HomePage;
