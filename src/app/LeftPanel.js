import React from 'react';
import { TiShoppingCart } from "react-icons/ti";
const LeftPanel = () => {
  return (
    <div className="bg-orange-600  w-1/2 flex flex-col justify-center items-center p-10">
      <h1 className="text-6xl font-bold text-white ">Welcome Back</h1>
      <p className="mt-6 text-[20px] pr-24 text-white/70">Sign in with your credentials <br /> to enjoy our uninterrupted services</p>
      <p className="mt-4 text-black/30 pr-40 text-[20px]">Don’t have an account yet?</p>
      
      <div className="mt-6 w-[152px] h-[139px]">
      <TiShoppingCart className=' w-[152px] h-[139px]'/>
      </div>
      <div className="mt-8">
        <button className="border-white border-2 w-[392px] h-[60px] text-white px-4 py-2 rounded-full hover:bg-gray-500">
          CLICK HERE TO SIGN UP
        </button>
      </div>
    </div>
  );
};

export default LeftPanel;
