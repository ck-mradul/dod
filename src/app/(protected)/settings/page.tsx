"use client";

import SegmentHeading from "@/components/commonComponents/SegmentHeading";
import React from "react";
import { Button, Form, Input } from "antd";

type FieldType = {
  dod_key?: string;
  dod_url?: string;
};

const Setting = () => {
  return (
    <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-20 2xl:mx-40">
      <SegmentHeading text="Settings" icon={false} />

      <section className="setting-container py-md-6 py-lg-10">
        <div className="col-12">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="DOD Key"
              name="dod_key"
              // rules={[
              //   { required: true, message: "Please input your username!" },
              // ]}
            >
              <Input />
            </Form.Item>
            <Form.Item<FieldType>
              label="DOD URL"
              name="dod_url"
              // rules={[
              //   { required: true, message: "Please input your username!" },
              // ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="ml-32">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default Setting;
