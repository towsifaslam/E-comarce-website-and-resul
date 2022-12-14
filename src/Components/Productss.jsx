import React, { useState } from "react";
import Products from "./Products";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
function Productss({ item }) {
  const [hoverEffect, setHoverEffect] = useState(" opacity-0");
  const handleOverEnter = () => {
    setHoverEffect(" opacity-1 bg-[rgba(0,0,0,0.2)]");
  };
  const handleOverExit = () => {
    setHoverEffect(" opacity-0");
  };
  const iconStyle =
    "flex justify-center items-center  bg-white p-4 rounded-full m-3 cursor-pointer text-xl hover:scale-105 shadow-md shadow-black ";
  return (
    <div
      className="flex  flex-1 items-center justify-center min-w-[250px] min-h-[350px] overflow-hidden rounded-md shadow-md m-2 relative"
      onMouseEnter={handleOverEnter}
      onMouseLeave={handleOverExit}
    >
      <img src={item.src} alt="" />
      <div
        className={
          `flex items-center justify-center w-full h-full absolute ease-in duration-200` +
          hoverEffect
        }
      >
        <div className={iconStyle}>
          <AiOutlineShoppingCart className="" />
        </div>
        <div className={iconStyle}>
          <MdFavoriteBorder />
        </div>
        <div className={iconStyle}>
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
}

export default Productss;
