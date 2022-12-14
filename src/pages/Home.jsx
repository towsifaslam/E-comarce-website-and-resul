import React from "react";
import Categories from "../Components/Categories";
import Announce from "../Components/Announce";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import Products from "../Components/Products";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <Announce />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;
