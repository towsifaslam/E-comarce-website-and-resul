import React, { Component } from "react";

export class Resul extends Component {
  render() {
    return (
      <div className=" white max-w-screen-lg w-full h-full mx-auto mt-7 text-gray-500 uppercase">
        <div className="flex flex-col items-center justify-center text-center mt-8 ">
          <h1 className="text-[23px] text-center">
            Result of HSC Equivalent Examination -2021
          </h1>
          <div className="mt-7">
            <button className="bg-[#1bbabf] px-3 py-2 rounded-l-md">
              Search Again
            </button>
            <button className="px-3 py-2 bg-[green] rounded-r-md">Print</button>
          </div>
          <div className="mt-5 flex flex-row gap-14 text-2 border-2 border-gray-500 items-center justify-between">
            <p className=" border-r-2 border-black p-3 px-5 ">Roll</p>
            <p className=" border-r-2 border-black p-3 px-5 ">42323</p>
            <p className=" border-r-2 border-black p-3 px-5 ">
              Registration NO
            </p>
            <p className=" b border-black p-3 px-5 ">Not Showin</p>
          </div>
          <div className="">
            <div className="flex flex-row text-5 border-2  mt-3 px-14 gap-3  items-start justify-start  ">
              <div className="text-[21px]  left-15">Name of Student</div>
              <div className="text-[21px]  right-6">Abrar Johan</div>
            </div>
            <div className="flex flex-row text-5 border-2  mt-3 px-14 gap-3  items-start justify-start  ">
              <div className="text-[21px]  left-15">Father's name </div>
              <div className="text-[21px]  right-6"> Habibur Rahman</div>
            </div>
            <div className="flex flex-row text-5 border-2  mt-3 px-14 gap-3  items-start justify-start  ">
              <div className="text-[21px]  left-15">Mother's Name</div>
              <div className="text-[21px]  right-6">Sharna Athker</div>
            </div>
          </div>
          <div className="mt-2 flex flex-row gap-14 text-2  bg-gray-200 items-center justify-between">
            <p className="   p-3 px-5 ">Borde</p>
            <p className="   p-3 px-5 ">Chittagong</p>
            <p className="   p-3 px-5 ">Session</p>
            <p className=" b p-3 px-5 ">Not Showin</p>
          </div>
          <div className="mt-2 flex flex-row gap-14 text-2 border-1   items-center justify-between">
            <p className="   p-3 px-5 ">GROUP</p>
            <p className="   p-3 px-5 ">SCIENCe</p>
            <p className="   p-3 px-5 ">Sessing</p>
            <p className="  p-3 px-5 ">Not Showin</p>
          </div>
          <div className="mt-3 flex flex-row gap-14 text-2 border-1   items-center bg-gray-200 justify-between px-3">
            <p className="   p-3 px-5 ">Result</p>
            <p className="   p-3 px-5 ">GPA=5.00</p>
            <p className="   p-3 px-5 ">Date of birth</p>
            <p className="  p-3 px-5 ">N/B</p>
          </div>
          <h1 className="mt-3 text-xl text-black font-bold">
            Subject-Wise Grade/Marks
          </h1>
          <div className="flex flex-col">
            <div className="mt-5 flex flex-row gap-14 text-2 border-1 w-full bg-[#3cb63c] items-center justify-between px-14 py-3 text-white ">
              <p className=" px-4 text-xl">Subject Code</p>
              <p className="px-3 text-xl">Subject Name</p>

              <p className="px-3 text-xl">Grad</p>
            </div>
            <div className=" flex flex-row gap-14 text-2 border-1 w-full  items-center justify-between px-14 py-2 text-gray-600 border-2 border-gray-100  font-semibold">
              <div className=" px-4 text-xl">
                101 <br /> <p>102</p>
              </div>
              <div className="px-3 text-xl ">
                <p>
                  Bangla <br /> <p>Bangla</p>
                </p>
              </div>
              <div>
                <p>A+</p>
              </div>
            </div>
            <div className=" flex flex-row gap-14 text-2 border-1 w-full  items-center justify-between px-14 py-2 text-gray-600 border-2 border-gray-100  font-semibold">
              <div className=" px-4 text-xl">
                101 <br /> <p>102</p>
              </div>
              <div className="px-3 text-xl ">
                <p>
                  Bangla <br /> <p>Bangla</p>
                </p>
              </div>
              <div>
                <p>A+</p>
              </div>
            </div>
            <div className="flex flex-row gap-14 text-2 border-1 w-full  items-center justify-between px-14 py-2 text-gray-600 border-2 border-gray-100  font-semibold">
              <div className=" px-4 text-xl">
                107 <br /> <p>108</p>
              </div>
              <div className="px-3 text-xl ">
                <p>
                  English <br /> <p>English</p>
                </p>
              </div>
              <div>
                <p>A+</p>
              </div>
            </div>
            <div className="mt-5 flex flex-row gap-14 text-2 border-1 w-full  items-center justify-between px-14 py-2 text-gray-600 border-2 border-gray-100  font-semibold">
              <div className=" px-4 text-xl">
                <p>275</p>
              </div>
              <div className="px-3 text-xl ">
                <p>
                  <p>
                    Informationn and <br />
                    Communication technology
                  </p>
                </p>
              </div>
              <div>
                <p>A+</p>
              </div>
            </div>
            <div className="mt-5 flex flex-row gap-14 text-2 border-1 w-full  items-center justify-between px-14 py-2 text-gray-600 border-2 border-gray-100  font-semibold">
              <div className=" px-4 text-xl">
                174 <br /> <p>175</p>
              </div>
              <div className="px-3 text-xl ">
                <p>
                  Physics <br /> <p>physics</p>
                </p>
              </div>
              <div>
                <p>A+</p>
              </div>
            </div>
            <div className=" flex flex-row gap-14 text-2 border-1 w-full  items-center justify-between px-14 py-2 text-gray-600 border-2 border-gray-100  font-semibold">
              <div className=" px-4 text-xl">
                176 <br /> <p>177</p>
              </div>
              <div className="px-3 text-xl ">
                <p>
                  chemistry <br /> <p>chemistry</p>
                </p>
              </div>
              <div>
                <p>A+</p>
              </div>
            </div>
            <div className=" flex flex-row gap-14 text-2 border-1 w-full  items-center justify-between px-14 py-2 text-gray-600 border-2 border-gray-100  font-semibold">
              <div className=" px-4 text-xl">
                265 <br /> <p>266</p>
              </div>
              <div className="px-3 text-xl ">
                <p>
                  Higher mathematics <br /> <p>Higher Mathematics</p>
                </p>
              </div>
              <div>
                <p>A+</p>
              </div>
            </div>
            <div className=" flex flex-row gap-14 text-2 border-1 w-full  items-center justify-between px-14 py-2 text-gray-600 border-2 border-gray-100  font-semibold">
              <div className=" px-4 text-xl">
                178 <br /> <p>179</p>
              </div>
              <div className="px-3 text-xl ">
                <p>
                  biologay <br /> <p>biologay</p>
                </p>
              </div>
              <div>
                <p>A+</p>
              </div>
            </div>
          </div>
          {/*  */}

          {/*  */}
        </div>
      </div>
    );
  }
}

export default Resul;
