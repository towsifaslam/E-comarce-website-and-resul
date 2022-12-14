import React, { useState } from "react";
import {
  AiFillCaretRight,
  AiFillCaretLeft,
  AiFillPlayCircle,
} from "react-icons/ai";
import { ApiSlides } from "../apifolder/SliderApi";
function Slider() {
  // useState hooks

  const [slide, setSlide] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);

  const style =
    "  font-light bg-slate-400  w-10 h-10 rounded-full flex items-center justify-center hover:bg-white group-hover:text-red-400 shadow-md shadow-black   cursor-pointer";

  const nextSlid = () => {
    if (activeSlide === slide.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };
  const perSlid = () => {
    if (activeSlide === 0) {
      setActiveSlide(slide.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };
  return (
    <div className="parentDiv h-[540px]   flex items-center justify-between group">
      {/* leftarrow div */}
      <div className="leftarrow">
        <AiFillCaretRight size={25} className={style} onClick={perSlid} />
      </div>
      {/* slide div */}
      {slide.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div
              className={`wrapper flex w-[100%] h-[500px]  items-center justify-center rounded-lg  border-[#c0c0c0] overflow-hidden relative shadow-2xl bg-gray-200`}
            >
              <div className="slid flex items-center justify-around  h-full  ">
                <div className="forImage flex flex-1 justify-center items-center h-full -ml-15">
                  <img className="h-full object-cover" src={slide.src} alt="" />
                </div>
                <div className="des flex flex-col flex-1 place-items-start justify-start">
                  <h2 className="des text-[50px] ">{slide.content.h2}</h2>
                  <p className="text-[30px]">{slide.content.p}</p>
                  <button className="btn">Shop Now{slide.id}</button>
                </div>
              </div>
            </div>
          );
        }
      })}
      {/* righ arrow div */}
      <div className="rigtharrow">
        <AiFillCaretLeft size={25} className={style} onClick={nextSlid} />
      </div>
    </div>
  );
}

export default Slider;
