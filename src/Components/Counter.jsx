import React, { useState } from "react";

function Counter() {
  const [incresNumber, setIncresNumebr] = useState(0);
  const increseBtn = () => {
    setIncresNumebr(incresNumber + 1);
  };
  const incrementNumber = () => {
    setIncresNumebr(incrementNumber - 1);
  };
  return (
    <div>
      <div className="flex items-center justify-center text-2xl">
        Quantity
        <div className="ml-5 shadow-md flex  ">
          <div
            className="bg-[#8a4af3] text-white w-10 flex items-center justify-center cursor-pointer rounded-l-md"
            onClick={increseBtn}
          >
            +
          </div>
          <div className="w-8 ml-3">{incresNumber}</div>
          <div
            className="bg-[#8a4af3] text-white w-10 flex items-center justify-center cursor-pointer rounded-r-md"
            onClick={incrementNumber}
          >
            -
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
