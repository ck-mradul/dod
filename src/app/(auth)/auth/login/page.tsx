"use client";

import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Typography, Image } from "antd";
import { useRouter } from "next/navigation";
import { AppName } from "@/contants/SystemVariables";
import "./page.scss";
import { useAuth } from "../auth";
import { toAbsoluteUrl } from "@/app/core/helperMethods";

const { Title, Text, Link } = Typography;

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const onFinish = async (values: { email: string; password: string }) => {
    setLoading(true);
    login(values);
    // router.push("/");
    setLoading(false);
    // router.push("/orders");
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-img">
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md mx-auto">
            <div className="text-center mb-8">
              <Title level={3}>{AppName || "Project Name"}</Title>
              {/* <Image
                width={300}
                height={80}
                src={toAbsoluteUrl("/static/logo.png")}
                className="justify-start"
                alt="DOD LOGO"
                preview={false}
              /> */}
            </div>
            <Text className="mb-2">Welcome back! 👋</Text>
            <Title level={3} className="sign-in mt-2">
              Sign In To Your Account
            </Title>
            <Form
              name="login"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              className="login-form"
              requiredMark={false}
            >
              <Form.Item
                label="Your Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
                // requiredMark={false}
              >
                <Input placeholder="Your Email" className="login-input" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  placeholder="Password"
                  className="login-input"
                />
              </Form.Item>

              <div className="flex justify-between items-center mb-4">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember Me</Checkbox>
                </Form.Item>
                <Link href="/auth/forgot-password" className="primary-color">
                  Forgot Password?
                </Link>
              </div>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  block
                  style={{ height: "45px", boxShadow: "none" }}
                >
                  Continue
                </Button>
              </Form.Item>
            </Form>

            {/* Sign Up */}
            <div className="text-center mt-4">
              <Text>Don&apos;t Have An Account? </Text>
              <Link href="/auth/signup" className="primary-color">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
