"use client";

import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import { useRouter } from "next/navigation";
import { AppName } from "@/contants/SystemVariables";
import "./page.scss";

const { Title, Text, Link } = Typography;

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFinish = (values: { email: string; password: string }) => {
    setLoading(true);

    setTimeout(() => {
      if (values.email === "admin@olm.com" && values.password === "admin") {
        localStorage.setItem("auth", "true");
        router.push("/");
      } else {
        alert("Invalid email or password");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-img">
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md mx-auto">
            <div className="text-center mb-8">
              <Title level={3}>{AppName || "Project Name"}</Title>
            </div>
            <Text>Welcome back! 👋</Text>
            <Title level={3} className="sign-in">
              Sign In To Your Account
            </Title>
            <Form
              name="login"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              className="login-form"
            >
              <Form.Item
                label="Your Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input placeholder="Your Email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>

              <div className="flex justify-between items-center mb-4">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember Me</Checkbox>
                </Form.Item>
                <Link href="/auth/forgot-password">Forgot Password?</Link>
              </div>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  block
                >
                  Continue
                </Button>
              </Form.Item>
            </Form>

            {/* Sign Up */}
            <div className="text-center mt-4">
              <Text>Don&apos;t Have An Account? </Text>
              <Link href="/auth/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
