import React from "react";
import Announce from "../Components/Announce";
import Counter from "../Components/Counter";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NewsLetter from "../Components/NewsLetter";

function Cart() {
  return (
    <div>
      <Announce />
      <Navbar />

      <div className=" ">
        <div className="flex justify-center text-5xl">Cart</div>
        <div className="flex items-center justify-between mr-4">
          <button className="btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] hover:text-white">
            Continue Shopping
          </button>
          <div className="flex underline text-lg hover:cursor-pointer gap-5">
            <p>imtes in you cart : 3</p>
            <p>Whitlist Item : 0</p>
          </div>
          <button className="btn">Chekout</button>
        </div>
        {/* central div */}
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="flex mt-7 bg-yellow-500">
              <div className="flex flex-col flex-1">
                <div>
                  <div className="products flex self-start pl-4">
                    <img
                      className="w-[7rem] h-[80%] rounded-lg shadow-lg hover:scale-105 ease-in duration-200"
                      src="https://plus.unsplash.com/premium_photo-1664267832158-bbc72d11e36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                      alt="cloth"
                    />
                    <div className="description flex flex-col ml-5 mt-3">
                      <p>
                        <b>ID: </b>123456545
                      </p>
                      <p>
                        <b>:Product</b> Dazzing sky shirt
                      </p>
                      <p>
                        <div className="flex flex-wrap">
                          <b>: Color</b>

                          <div className=" bg-[red] w-7 h-7 rounded-full ml-4 border-2 p-2 shadow-lg shadow-red cursor-pointer"></div>
                        </div>
                      </p>
                      <p>
                        <b>: Size</b>lg
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  items-center justify-start flex-auto bg-gray-600">
                {" "}
                <Counter />
                <p>
                  <b>705$</b>
                </p>
              </div>
            </div>
            <hr className="mt-7 mb-7 bg-black" />
            <div className="flex mt-7 bg-yellow-500">
              <div className="flex flex-col flex-1">
                <div>
                  <div className="products flex self-start pl-4">
                    <img
                      className="w-[7rem] h-[80%] rounded-lg shadow-lg hover:scale-105 ease-in duration-200"
                      src="https://plus.unsplash.com/premium_photo-1664267832158-bbc72d11e36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                      alt="cloth"
                    />
                    <div className="description flex flex-col ml-5 mt-3">
                      <p>
                        <b>ID: </b>123456545
                      </p>
                      <p>
                        <b>:Product</b> Dazzing sky shirt
                      </p>
                      <p>
                        <div className="flex flex-wrap">
                          <b>: Color</b>

                          <div className=" bg-[red] w-7 h-7 rounded-full ml-4 border-2 p-2 shadow-lg shadow-red cursor-pointer"></div>
                        </div>
                      </p>
                      <p>
                        <b>: Size</b>lg
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  items-center justify-start flex-auto bg-gray-600">
                {" "}
                <Counter />
                <p>
                  <b>705$</b>
                </p>
              </div>
            </div>
            <hr className="mt-7 mb-7 bg-black" />
            <div className="flex mt-7 bg-yellow-500">
              <div className="flex flex-col flex-1">
                <div>
                  <div className="products flex self-start pl-4">
                    <img
                      className="w-[7rem] h-[80%] rounded-lg shadow-lg hover:scale-105 ease-in duration-200"
                      src="https://plus.unsplash.com/premium_photo-1664267832158-bbc72d11e36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                      alt="cloth"
                    />
                    <div className="description flex flex-col ml-5 mt-3">
                      <p>
                        <b>ID: </b>123456545
                      </p>
                      <p>
                        <b>:Product</b> Dazzing sky shirt
                      </p>
                      <p>
                        <div className="flex flex-wrap">
                          <b>: Color</b>

                          <div className=" bg-[red] w-7 h-7 rounded-full ml-4 border-2 p-2 shadow-lg shadow-red cursor-pointer"></div>
                        </div>
                      </p>
                      <p>
                        <b>: Size</b>lg
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  items-center justify-start flex-auto bg-gray-600">
                {" "}
                <Counter />
                <p>
                  <b>705$</b>
                </p>
              </div>
            </div>
            <hr className="mt-7 mb-7 bg-black" />
            <div className="flex mt-7 bg-yellow-500">
              <div className="flex flex-col flex-1">
                <div>
                  <div className="products flex self-start pl-4">
                    <img
                      className="w-[7rem] h-[80%] rounded-lg shadow-lg hover:scale-105 ease-in duration-200"
                      src="https://plus.unsplash.com/premium_photo-1664267832158-bbc72d11e36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                      alt="cloth"
                    />
                    <div className="description flex flex-col ml-5 mt-3">
                      <p>
                        <b>ID: </b>123456545
                      </p>
                      <p>
                        <b>:Product</b> Dazzing sky shirt
                      </p>
                      <p>
                        <div className="flex flex-wrap">
                          <b>: Color</b>

                          <div className=" bg-[red] w-7 h-7 rounded-full ml-4 border-2 p-2 shadow-lg shadow-red cursor-pointer"></div>
                        </div>
                      </p>
                      <p>
                        <b>: Size</b>lg
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  items-center justify-start flex-auto bg-gray-600">
                {" "}
                <Counter />
                <p>
                  <b>705$</b>
                </p>
              </div>
            </div>
            <hr className="mt-7 mb-7 bg-black" />
            <div className="bg-gray-500 w-full h-300 flex flex-1 flex-col items-start justify-items-start bg text-xl">
              <h1 className="text-[2rem] flex items-center justify-center">
                Summary
              </h1>
              <div className="flex justify-between mt-3 w-[100%]">
                <p>subtotal</p>
                <p>$3453</p>
              </div>
              <div className="flex justify-between mt-3 w-[100%]">
                <p>shipng </p>
                <p>$324</p>
              </div>
              <div className="flex justify-between mt-3 w-[100%]">
                <p>shipping dischount</p>
                <p>140</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Cart;
