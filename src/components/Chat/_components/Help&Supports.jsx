import React from 'react';
import { Input, Button, Typography, Form } from 'antd';

const { TextArea } = Input;
const { Title } = Typography;

export const Help = () => {
  const onFinish = (values) => {
    console.log('Form submitted:', values);
  };

  return (
    <div className=" text-black h-screen p-8 px-4">
      <div className="w-full max-w-2xl">
        <Title level={4} className="mb-6">
          Help & Support
        </Title>

        <Form
          layout="vertical"
          onFinish={onFinish}
          className="space-y-6"
        >
          <Form.Item
            label={<span className="">Your Email</span>}
            name="email"
            rules={[{ required: true, message: 'Please enter your email!' }]}
          >
            <Input
              placeholder="Enter Email"
              className=" text-white placeholder:text-gray-300 border border-gray-400"
            />
          </Form.Item>

          <Form.Item
            label={<span className="">Description</span>}
            name="description"
            rules={[{ required: true, message: 'Please enter a description!' }]}
          >
            <TextArea
              rows={4}
              placeholder="Enter your query or feedback"
              className=" text-white placeholder:text-gray-300 border border-gray-400"
            />
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              type="primary"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            >
              Send
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};


