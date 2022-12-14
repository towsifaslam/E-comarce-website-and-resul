import React from "react";
import { ApiCategories } from "../apifolder/CategoryApi";
function Categories() {
  return (
    <div className="flex justify-between items-center p-5">
      {ApiCategories.map((cat, inde) => {
        return (
          <div
            key={inde}
            className="flex-1 m-2 shadow-lg rounded-md overflow-hidden relative"
          >
            <img src={cat.src} alt={cat.title} className="w-full" />
            <div className="flex w-full h-full absolute  top-0 items-center justify-around flex-col">
              <h2 className="text-white font-medium text-xl">{cat.title}</h2>
              <button className="btn">See more</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
