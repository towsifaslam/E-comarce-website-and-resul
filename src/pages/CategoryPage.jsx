import React from "react";
import Announce from "../Components/Announce";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NewsLetter from "../Components/NewsLetter";
import Products from "../Components/Products";

function CategoryPage() {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex flex-col p-5">
        <h1 className="text-[30px] font-bold">Men's Cloth</h1>
        <div className="flex items-center justify-between mt-3">
          <div className="flex  ">
            <p>Filter by</p>
            <select name="" id="" className="ml-3 border-2 border-[silver]">
              <option selected disabled value="">
                Size
              </option>
              <option value="">Small</option>
              <option value="">Medium</option>
              <option value="">Large</option>
            </select>
            <select name="" id="" className="ml-3 border-2 border-[silver]">
              <option value="" selected disabled>
                Color
              </option>
              <option value="">Black</option>
              <option value="">Yellow</option>
              <option value="">White</option>
            </select>
          </div>
          <div className="flex">
            <p>Sort by</p>
            <select name="" id="" className="ml-3 border-2 border-[silver]">
              <option value="">Newset (first)</option>
              <option value="">Oldes (first)</option>
              <option value="">Price (asc)</option>
              <option value="">Price (des)</option>
            </select>
          </div>
        </div>
      </div>
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default CategoryPage;
