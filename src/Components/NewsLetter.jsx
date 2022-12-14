import React from "react";
import { AiOutlineSend } from "react-icons/ai";
function NewsLetter() {
  return (
    <div className="flex items-center justify-center h-[350px] w-full flex-col bg-[#c4a4f9] ">
      <h1 className="text-[50px] font-bold">NEWSLETTER</h1>
      <h2 className="text-[20px] mt-2">
        Always in touch with us, For your favourite Products
      </h2>
      <div className="flex mt-[3rem] items-center justify-between min-w-[30rem] min-h-[2rem] bg-white border-[#cccccc] rounded-md overflow-hidden p-2 relative">
        <input
          type="email"
          className="outline-none pl-4 border-none flex-[5]"
          placeholder="examp23@gmail.com"
        />
        <button className={`btn h-full rounded-none absolute right-0`}>
          <AiOutlineSend className="text-white" />
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
