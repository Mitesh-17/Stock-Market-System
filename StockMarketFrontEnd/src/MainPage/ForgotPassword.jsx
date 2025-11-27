import React, { useState } from "react";
import { Mail, ArrowLeft, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [showPasswordFields, setShowPasswordFields] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // success | error

  // STEP 1: Verify Email
  const handleEmailSubmit = async (e) => {
        e.preventDefault();

        if (!email.trim()) {
            setMessage("Please enter your email address.");
            setMessageType("error");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage("Please enter a valid email address.");
            setMessageType("error");
            return;
        }

        try{
            const response = await axios.post(
                "http://localhost:8080/stock/forgot-password" ,
                {
                    email : email
                },
                {
                    headers: { "Content-Type": "application/json" }
                }
            );

            if(response.data == "Email Exists"){
                // Email verification success simulation
                setMessage("Email verified! Please enter your new password.");
                setMessageType("success");
                setShowPasswordFields(true);

            }else{
                alert(response.data);
                setEmail("")
                return;
            }
        }catch(error){
            console.error("Emain Error:", error);

            if (error.response) {
                alert("Email Not Found: " + error.response.data.message);
            } else {
                alert("Something went wrong. Try again.");
            }
        }
  };

  const getNewPassword = async () => {
        console.log("New Password is : "+newPassword);
        console.log("Confirm Password is : "+confirmPassword)

        try{
            const response = await axios.patch(
                    "http://localhost:8080/stock/update-password",
                    {
                        email : email,
                        newPassword : newPassword,
                        confirmPassword : confirmPassword
                    },
                    {
                        headers : { "Content-Type": "application/json" }
                    }
            );

            if(response.data == "updated"){
                setMessage("Password successfuly Reset..!");
                setMessageType("success");
            }else{
                alert(response.data);
                return;
            }
        }
        catch(error){
            console.error("Emain Error:", error);

            if (error.response) {
                alert("Email Not Found: " + error.response.data.message);
            } else {
                alert("Something went wrong. Try again.");
            }
        }
    }

  // STEP 2: Reset Password
  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    if (newPassword.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      setMessageType("error");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      setMessageType("error");
      return;
    }

    setMessage("Password reset successfully!");
    setMessageType("success");

    // After success → redirect to login after 2 sec
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-blue-100 to-blue-300 p-4">

      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-lg p-8">

        {/* Back Button */}
        <button
          className="flex items-center gap-2 text-blue-600 mb-5 hover:text-blue-800"
          onClick={() => navigate("/login")}
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Login
        </button>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
          Forgot Password?
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Enter your email to reset your password.
        </p>

        {/* Message Box */}
        {message && (
          <div
            className={`p-3 mb-4 text-center rounded-lg ${
              messageType === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        {/* Step 1 — Email Form */}
        {!showPasswordFields && (
          <form onSubmit={handleEmailSubmit}>
            <label className="block font-medium text-gray-700 mb-1">
              Enter Email Address
            </label>

            <div className="flex items-center gap-2 border rounded-lg px-3 py-2 bg-gray-50 mb-4">
              <Mail className="w-5 h-5 text-gray-500" />
              <input
                type="email"
                placeholder="Enter your registered email"
                className="w-full bg-transparent outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold text-lg shadow-md"
            >
              Verify Email
            </button>
          </form>
        )}

        {/* Step 2 — Password Fields */}
        {showPasswordFields && (
          <form onSubmit={handlePasswordSubmit} className="mt-6">
            {/* New Password */}
            <label className="block font-medium text-gray-700 mb-1">
              New Password
            </label>

            <div className="flex items-center gap-2 border rounded-lg px-3 py-2 bg-gray-50 mb-4">
              <Lock className="w-5 h-5 text-gray-500" />
              <input
                type="password"
                placeholder="Enter new password (min 6 characters)"
                className="w-full bg-transparent outline-none"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            {/* Confirm Password */}
            <label className="block font-medium text-gray-700 mb-1">
              Confirm Password
            </label>

            <div className="flex items-center gap-2 border rounded-lg px-3 py-2 bg-gray-50 mb-6">
              <Lock className="w-5 h-5 text-gray-500" />
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full bg-transparent outline-none"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button onClick={getNewPassword}
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-lg font-semibold text-lg shadow-md"
            >
              Reset Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
