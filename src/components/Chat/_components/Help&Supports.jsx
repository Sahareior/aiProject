import React from 'react';
import { Input, Button, Typography, Form } from 'antd';

const { TextArea } = Input;
const { Title } = Typography;

export const Help = () => {
  const onFinish = (values) => {
    console.log('Form submitted:', values);
  };

  return (
    <div className=" bg-[#1E293B] h-screen flex justify-center p-8 px-4">
      <div className="w-full max-w-2xl">
        <Title level={4} className="!text-white mb-6">
          Help & Support
        </Title>

        <Form
          layout="vertical"
          onFinish={onFinish}
          className="space-y-6"
        >
          <Form.Item
            label={<span className="text-white">Your Email</span>}
            name="email"
            rules={[{ required: true, message: 'Please enter your email!' }]}
          >
            <Input
              placeholder="Enter Email"
              className="bg-[#334155] text-white placeholder:text-gray-300 border border-gray-400"
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-white">Description</span>}
            name="description"
            rules={[{ required: true, message: 'Please enter a description!' }]}
          >
            <TextArea
              rows={4}
              placeholder="Enter your query or feedback"
              className="bg-[#334155] text-white placeholder:text-gray-300 border border-gray-400"
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


