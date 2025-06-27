import React from 'react';
import { Form, Input, Button } from 'antd';
import {  useSignupMutation } from '../../redux/Slices/apiSlice';
import { Navigate, useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [signup] = useSignupMutation()
 const navigate = useNavigate(); // ✅ use the hook h

  const onFinish = async (values) => {
    const { email, password } = values;

    try {
      const result = await signup({ email, password }).unwrap();
      console.log('Signup successful:', result);
         
    
      navigate('/verify-otp', { state: { email } }); 
    } catch (error) {
      console.error('Signup failed:', error);
 
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F9FAFB]">
      <div className="w-full max-w-md 8 bg-[#F9FAFB]  rounded-lg">
        <div className="text-center mb-6">
          {/* <img src="/logo.png" alt="Logo" className="h-10 mx-auto mb-2" /> */}
          <h2 className="text-2xl font-bold">Create account</h2>
          <p className="text-sm text-gray-600">
            Enter the email address associated with your account. We'll send you an OTP to your email.
          </p>
        </div>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Your Email"
            name="email"
            rules={[{ required: true, message: 'Please enter your email!' }]}
          >
            <Input placeholder="Enter Email" />
          </Form.Item>

          <Form.Item
            label="New Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password placeholder="Enter New Password" />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Please confirm your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('Passwords do not match!');
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm New Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Sign Up
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center text-sm">
          Already Have An Account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
