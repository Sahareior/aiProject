import React, { useState } from 'react';
import { Input, Button, message } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

const OtpVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  if (!email) {
    // If user lands directly, redirect back
    navigate('/signup');
  }

  const handleChange = (value, index) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Move to next input if value entered
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleSubmit = async () => {
    const enteredOtp = otp.join('');

    if (enteredOtp.length < 4) {
      return message.error('Please enter the complete OTP');
    }

    try {
      const response = await fetch('https://alibackend.duckdns.org/authentication_app/verify_otp/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp: enteredOtp }),
      });

      const data = await response.json();
console.log('otpData', data)
      if (response.ok) {
        message.success('OTP verified successfully!');
        navigate('/login');
      } else {
        message.error(data?.message || 'Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error(error);
      message.error('Something went wrong. Try again later.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="max-w-md w-full text-center">
        <img src="/logo.png" alt="Logo" className="h-12 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">OTP Verification</h2>
        <p className="text-gray-500 mb-6">
          Enter OTP Sent To <span className="font-medium">{email?.replace(/^(.{3})(.*)(@.*)$/, (_, a, b, c) => `${a}**${c}`)}</span>
        </p>

        <div className="flex justify-center gap-2 mb-6">
          {otp.map((digit, index) => (
            <Input
              key={index}
              id={`otp-${index}`}
              value={digit}
              onChange={(e) => handleChange(e.target.value.slice(-1), index)}
              maxLength={1}
              className="w-12 h-12 text-center text-xl border border-gray-300 rounded focus:border-blue-500"
            />
          ))}
        </div>

        <Button
          type="primary"
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700"
        >
          Submit
        </Button>

        <p className="text-sm text-gray-600 mt-4">
          Didn’t receive the code?{' '}
          <button className="text-blue-600 font-medium hover:underline" onClick={() => message.info('Resend OTP logic here')}>
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  );
};

export default OtpVerification;
