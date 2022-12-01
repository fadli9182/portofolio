import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";

const Skill = () => {
  return (
    <>
      <div className="judul font-bold text-center relative bottom-16">
        <h1 className="text-7xl opacity-20 ">My Services</h1>
        <p className="absolute right-[20%] top-[40%] z-10 text-4xl">My Services</p>
      </div>
      <div className="grid grid-cols-2 gap-3 pb-44 items-center relative ">
        <div className="text-center">
          <h1 className="text-center text-2xl p-5 rounded-lg font-bold">What did you get from me ?</h1>
          <div className="m-4 cursor-pointer">
            <h2 className="bg-slate-700 -translate-x-10 -translate-y-4 p-3 rounded-3xl hover:scale-95">IT Support</h2>
            <h2 className="bg-slate-700 translate-x-14 p-3 rounded-3xl hover:scale-95">Design</h2>
            <h2 className="bg-slate-700 translate-y-4 -translate-x-5 p-3 rounded-3xl hover:scale-95">Web Develop</h2>
          </div>
        </div>

        <div className="bg-secondary text-center py-8 rounded-2xl hover:bg-slate-200 hover:text-primary">
          <h2 className="text-blue-500 font-bold text-2xl ">UI Designer</h2>
          <p className="leading-tight mt-2 z-10">I can make your website looks beautiful</p>
        </div>
        <div className="bg-secondary text-center py-8 rounded-2xl hover:bg-slate-200 hover:text-primary">
          <h2 className="text-blue-500 font-bold text-2xl">Web Designer</h2>
          <p className="leading-tight mt-2">I can make your website looks beautiful</p>
        </div>
        <div className="bg-secondary hover:bg-slate-200 hover:text-primary text-center py-8 rounded-2xl">
          <h2 className="text-blue-500 font-bold text-2xl">IT Support</h2>
          <p className="leading-tight mt-2">I can make your website looks beautiful</p>
        </div>
      </div>
    </>
  );
};

export default Skill;
