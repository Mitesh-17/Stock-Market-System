import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {

  const navigate = useNavigate();

  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  
  // ---------------- FORM VALIDATION ---------------- //
  const validateForm = () => {
    const newErrors = {};

    if (!userData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!userData.password) {
      newErrors.password = "Password is required";
    } else if (userData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!rememberMe) newErrors.rememberMe = "You must accept Remember Me";
    if (!captchaChecked) newErrors.captchaChecked = "Please verify 'I'm not a robot'";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ---------------- SUBMIT LOGIN ---------------- //
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await axios.post(
        "http://localhost:8080/stock/login",
        {
          email: userData.email,
          password: userData.password
        },
        {
          headers: { "Content-Type": "application/json" }
        }
      );

      if (response.data === "Login successful!") { 
          navigate("/stock-app/dashboard");
      } 
      else {
        alert(response.data);
        return;
      }

    } catch (error) {
      console.error("Login Error:", error);

      if (error.response) {
        alert("Login failed: " + error.response.data.message);
      } else {
        alert("Something went wrong. Try again.");
      }
    }

      // Reset UI
      setUserData({ email: "", password: "" });
      setRememberMe(false);
      setCaptchaChecked(false);
      setErrors({});
  };

  const forgotPassword = () =>{
    navigate("/forgot-password")
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 p-5">

        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>

            {/* ---------------- EMAIL ---------------- */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>         
                <div className={`flex items-center gap-2 border rounded-lg px-3 py-2 bg-gray-50 
                    ${errors.email ? "border-red-500" : "border-gray-300"}`}>
                    <Mail className="w-5 h-5 text-gray-500" />
                    <input type="email" value={userData.email}
                        className="w-full bg-transparent outline-none" placeholder="Enter your email"
                        onChange={(e) =>
                          setUserData({ ...userData, email: e.target.value })
                        }                  
                    />
                </div>
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* ---------------- PASSWORD ---------------- */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className={`flex items-center gap-2 border rounded-lg px-3 py-2 bg-gray-50 
                    ${errors.password ? "border-red-500" : "border-gray-300"}`}>
                    <Lock className="w-5 h-5 text-gray-500" />
                    <input type="password" value={userData.password}
                        className="w-full bg-transparent outline-none" placeholder="Enter your password"
                        onChange={(e) =>
                          setUserData({ ...userData, password: e.target.value })
                        }                    
                    />
                </div>
                {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* ---------------- REMEMBER ME ---------------- */}
            <div className="flex items-center justify-between mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  
                  <span className="text-sm text-gray-700">Remember Me</span>
                </label>

                <button onClick={forgotPassword}
                  className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                  Forgot Password?
                </button>
            </div>

            {/* ---------------- CAPTCHA ---------------- */}
            <div className="border rounded-lg p-4 bg-gray-50 flex justify-between items-center mb-5">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5"
                  checked={captchaChecked}
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

            {/* ---------------- LOGIN BUTTON ---------------- */}
            <button onClick={handleSubmit} disabled={!captchaChecked}
              className={`w-full py-3 rounded-lg text-white font-semibold text-lg transition 
                ${captchaChecked ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}> 
              Login 
            </button>

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
