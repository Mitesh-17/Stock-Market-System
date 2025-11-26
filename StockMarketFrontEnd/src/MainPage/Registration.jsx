import React, { useState } from "react";
import axios from 'axios'
import { User, Mail, Lock, Phone } from "lucide-react";

const Registration = () => {
  const [agree, setTerms] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
      const { name, value } = e.target;

      setForm({
        ...form,
        [name]: value,
      });

      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
  };


  // ---------------- VALIDATION ----------------
  const validateForm = () => {
    const newErrors = {};

    // Full Name
    if (!form.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(form.fullName)) {
      newErrors.fullName = "Full Name should contain only letters";
    }

    // Email
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    // Phone
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    // Password
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Confirm Password
    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Gender
    if (!form.gender) {
      newErrors.gender = "Please select a gender";
    }

    // Terms
    if (!agree) {
      newErrors.agree = "You must accept the Terms & Conditions";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ---------------- SUBMIT ----------------
  const handleSubmit = async (e) => {
      e.preventDefault();

      if (!validateForm()) return;

      try {
        const response = await axios.post(
          "http://localhost:8080/stock/register",   // Spring Boot API endpoint
          {
            fullName: form.fullName,
            email: form.email,
            phone: form.phone,
            password: form.password,
            confirmPassword: form.confirmPassword,
            gender: form.gender,
            termsAccepted: agree
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        alert("Registration Successful!");

        console.log("Server Response:", response.data);

        // Clear all fields
        setForm({
          fullName: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          gender: "",
        });

        setTerms(false);
        setErrors({});
      } catch (error) {
        console.error("Registration Error:", error);

        if (error.response) {
          alert("Registration failed: " + error.response.data.message);
        } else {
          alert("Something went wrong. Try again.");
        }
      }
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
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
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
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
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
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
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
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          )}
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
                checked={form.gender === "male"}
                onChange={handleChange}
              />
              Male
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={form.gender === "female"}
                onChange={handleChange}
              />
              Female
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="other"
                checked={form.gender === "other"}
                onChange={handleChange}
              />
              Other
            </label>
          </div>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
        </div>

        {/* Terms */}
        <div className="mb-4 flex items-center gap-2">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setTerms(e.target.checked)}
          />
          <span className="text-sm">
            I agree to the{" "}
            <a className="text-sky-700 underline cursor-pointer">
              Terms & Conditions
            </a>
          </span>
        </div>
        {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}

        {/* Submit */}
        <button
          className="w-full bg-sky-700 text-white py-3 rounded-lg font-bold hover:bg-sky-800 transition-all"
          onClick={handleSubmit}
        >
          Register
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-sky-700 underline cursor-pointer">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Registration;