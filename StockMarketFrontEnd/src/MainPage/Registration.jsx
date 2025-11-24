import React, { useState } from "react";
import { User, Mail, Lock, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Registration = () => {

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8">

        <h2 className="text-3xl font-bold text-center text-sky-700 mb-6">
          Create Your Account
        </h2>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Full Name</label>
          <div className="flex items-center bg-gray-200 p-2 rounded-lg">
            <User className="w-5 h-5 text-sky-700" />
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={form.fullName}
              onChange={handleChange}
              className="w-full bg-transparent outline-none ml-2"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Email</label>
          <div className="flex items-center bg-gray-200 p-2 rounded-lg">
            <Mail className="w-5 h-5 text-sky-700" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-transparent outline-none ml-2"
            />
          </div>
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Phone Number</label>
          <div className="flex items-center bg-gray-200 p-2 rounded-lg">
            <Phone className="w-5 h-5 text-sky-700" />
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-transparent outline-none ml-2"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Password</label>
          <div className="flex items-center bg-gray-200 p-2 rounded-lg">
            <Lock className="w-5 h-5 text-sky-700" />
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              className="w-full bg-transparent outline-none ml-2"
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Confirm Password</label>
          <div className="flex items-center bg-gray-200 p-2 rounded-lg">
            <Lock className="w-5 h-5 text-sky-700" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full bg-transparent outline-none ml-2"
            />
          </div>
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Gender</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
              />
              Male
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
              />
              Female
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="other"
                onChange={handleChange}
              />
              Other
            </label>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="mb-4 flex items-center gap-2">
          <input
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={handleChange}
          />
          <span className="text-sm">
            I agree to the{" "}
            <a className="text-sky-700 underline cursor-pointer">
              Terms & Conditions
            </a>
          </span>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-sky-700 text-white py-3 rounded-lg font-bold hover:bg-sky-800 transition-all">
          Register
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-sky-700 underline cursor-pointer">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Registration;
