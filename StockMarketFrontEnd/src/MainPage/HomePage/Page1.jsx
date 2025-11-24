import React from 'react';
import videoFile from "../../assets/video.mp4";
import { useNavigate } from 'react-router-dom';

const Page1 = () => {

  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white">

      {/* Left Section */}
      <div className="w-full lg:w-[40vw] flex flex-col justify-center px-8 lg:px-16 py-10 bg-blue-50">
        
        <h1 className="font-bold text-4xl lg:text-5xl leading-tight text-gray-800">
          Master the Stock Market Investigator
        </h1>

        <p className="text-gray-700 text-lg lg:text-xl mt-4 leading-relaxed">
          Practice trading stocks, ETFs, and options without any risk.  
          Build your portfolio and test strategies in a simulated environment.
        </p>

        <button onClick={() => navigate('/login')} 
        className="mt-6 bg-emerald-600 hover:bg-emerald-700 transition-all text-white font-semibold px-6 py-3 rounded-xl shadow-lg w-fit">
          Get Started
        </button>

      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[60vw] h-full flex items-center justify-center bg-blue-50">

          <img src="" alt="" />
          <video 
            src={videoFile}
            autoPlay 
            loop 
            muted 
            className="w-[55vw] h-[70vh] mr-5 object-cover rounded-lg shadow-xl"
          >
          </video>

      </div>

    </div>
  );
};

export default Page1;
