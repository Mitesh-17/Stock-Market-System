import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";

const Login = () => {
  const [captchaChecked, setCaptchaChecked] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2 bg-gray-50">
            <Mail className="w-5 h-5 text-gray-500" />
            <input
              type="email"
              className="w-full bg-transparent outline-none"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2 bg-gray-50">
            <Lock className="w-5 h-5 text-gray-500" />
            <input
              type="password"
              className="w-full bg-transparent outline-none"
              placeholder="Enter your password"
            />
          </div>
        </div>

        {/* Remember Me */}
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4" />
            <span className="text-sm text-gray-700">Remember Me</span>
          </label>

          <button className="text-sm text-blue-600 hover:text-blue-800">
            Forgot Password?
          </button>
        </div>

        {/* CAPTCHA Box */}
        <div className="border rounded-lg p-4 bg-gray-50 flex justify-between items-center mb-5">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5"
              onChange={(e) => setCaptchaChecked(e.target.checked)}
            />
            <span className="text-sm text-gray-700">I'm not a robot</span>
          </label>

          <img
            src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
            alt="captcha"
            className="w-10 opacity-70"
          />
        </div>

        {/* Login Button */}
        <button
          disabled={!captchaChecked}
          className={`w-full py-3 rounded-lg text-white font-semibold text-lg transition 
          ${captchaChecked ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}
          `}
        >
          Login
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-5">
          Don't have an account?{" "}
          <a href="/signIn" className="text-blue-600 font-semibold hover:text-blue-800">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
