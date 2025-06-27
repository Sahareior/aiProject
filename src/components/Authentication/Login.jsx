import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useSigninMutation } from "../../redux/Slices/apiSlice";
// import { useSigninMutation } from "../../../redux/Slices/apiSlice"; // ✅ adjust path as needed

const SignInComponent = () => {
  const navigate = useNavigate();
  const [signin, { isLoading }] = useSigninMutation(); // ✅ use mutation hook

  const onFinish = async (values) => {
    try {
      const response = await signin({
        email: values.email,
        password: values.password,
      }).unwrap();

      if (response.accessToken) {
        localStorage.setItem("accessToken", response.accessToken);
        message.success("Login successful!");
        navigate("/chat");
      } else {
        message.error(response.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      message.error(
        error?.data?.message || "An error occurred during login"
      );
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Hello, Welcome!</h1>
      <p className="text-gray-600 text-center mb-8">
        Please Enter Your Details Below To Continue
      </p>

      <Form
        name="signin"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Your Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            prefix={<MailOutlined className="text-gray-300" />}
            placeholder="Enter Email"
            size="large"
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined className="text-gray-300" />}
            placeholder="Enter Password"
            size="large"
          />
        </Form.Item>

        <div className="flex justify-between items-center mb-6">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember Me</Checkbox>
          </Form.Item>

          <a
            href="#forgot-password"
            className="text-blue-500 hover:text-blue-700"
          >
            Forgot Password?
          </a>
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
            loading={isLoading} // 🔁 loading state from RTK query
            className="bg-blue-500 hover:bg-blue-600"
          >
            Login
          </Button>
        </Form.Item>
      </Form>

      <div className="text-center mt-4">
        <span className="text-gray-600">Don't have an account? </span>
        <Link to="/signup" className="text-blue-500 hover:text-blue-700">
          Create account, sign up
        </Link>
      </div>
    </div>
  );
};

export default SignInComponent;
