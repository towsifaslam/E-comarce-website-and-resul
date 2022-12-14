import React from "react";
import Announce from "../Components/Announce";
import Counter from "../Components/Counter";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NewsLetter from "../Components/NewsLetter";

function ProductPage() {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex justify-center">
        <div className="flex flex-1 items-center justify-center">
          {/* Right */}
          <img
            src="https://images.pexels.com/photos/9725690/pexels-photo-9725690.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt="product img"
            className="w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-105 ease-in duration-200"
          />
        </div>
        <div className="flex-1 flex items-start justify-items-start flex-col mt-12">
          {/* left */}
          <h2 className="title text-[40px]">Creamy hody cotton</h2>
          <p className="pr-[4rem] text-justify mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptates rerum ipsam nesciunt! In aperiam, fuga sit culpa
            exercitationem velit sunt ad laboriosam cumque sequi porro deleniti
            ex, ratione maiores dolorem ut, totam quidem pariatur!
          </p>
          <p className="mt-7 text-3xl mt-7">
            Price:: <b>$74</b>
          </p>
          {/* color variants */}
          <div className="flex text-2xl">
            Colors
            <div className=" bg-[red] w-7 h-7 rounded-full ml-4 border-2 p-4 shadow-lg shadow-red cursor-pointer"></div>
            <div className=" bg-[black] w-7 h-7 rounded-full ml-4 border-2 p-4"></div>
            <div className=" bg-[green] w-7 h-7 rounded-full ml-4 border-2 p-4"></div>
          </div>
          <div className="mt-7 text-2xl">
            Size
            <select name="" id="" className="ml-5 border-2">
              <option value="" selected disabled>
                select
              </option>
              <option value="">Small</option>
              <option value="">Medium</option>
              <option value="">Large</option>
            </select>
          </div>
          <div className="mt-5">
            <Counter />
          </div>
          <button className="btn mt-5">Add to cart</button>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default ProductPage;
