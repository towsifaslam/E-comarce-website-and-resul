import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
function Navbar() {
  const style = "ragister text-md cursor-pointer ml-4";
  return (
    <div className="navbar h-[60px] shadow-md relative z-10  ">
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px]  flex justify-between items-center">
        {/* left div */}
        <div className="left flex flex-1  items-center">
          <div className="language cursor-pointer text-[16px] font-bold text-gray-800">
            En
          </div>
          <div className="searchInput flex border-[2px] border-solid border-lighgray rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all duration-300">
            <input type="text" className="outline-none" />
            <AiOutlineSearch />
          </div>
        </div>
        {/* Logo */}
        <div className="center flex-1 text-center ">
          <div className="logo font-bold text-lg">Summer Kings</div>
        </div>
        {/* Right */}
        <div className="right flex flex-1 items-center justify-end">
          <div className={style}>Register</div>
          <div className={style}>Sign in</div>
          <div className={style}>
            {" "}
            <BsFillCreditCard2BackFill />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
