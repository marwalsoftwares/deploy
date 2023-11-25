"use client"
import React, { useState } from 'react';


export default function Home() {

  const [mobile, setMobile] = useState('');
  const [otp, setOTP] = useState('');

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };

  const handleOTPVerification = () => {
    // You should add your OTP verification logic here
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-semibold text-center">Mobile OTP Login</h2>
        <div className="mt-4">
          <label className="block mb-2" htmlFor="mobile">
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={mobile}
            onChange={handleMobileChange}
            placeholder="Enter your mobile number"
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mt-4">
          <label className="block mb-2" htmlFor="otp">
            OTP
          </label>
          <input
            type="number"
            id="otp"
            name="otp"
            value={otp}
            onChange={handleOTPChange}
            placeholder="Enter OTP"
            className="w-full p-2 border rounded-md"
          />
        </div>
        <button
          onClick={handleOTPVerification}
          className="mt-6 w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
        >
          Verify OTP
        </button>
      </div>
    </div>
  )
}
