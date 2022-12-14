import React, { Component } from "react";

export default class Loging extends Component {
  state = {
    username: "",
    password: "",
  };

  render() {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col absolute top-[50%] shadow-lg border-[2px] rounded-lg p-5 w-[50%]">
          <text className="text-2xl">Loging</text>
          <div className="flex mt-3">
            <input
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
              type="text"
              placeholder="username"
              name="username"
            />
          </div>
          <div className="flex mt-3">
            <input
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
              type="password"
              placeholder="password"
            />
          </div>
          <input type="button" value="Loging" className="btn mt-4" />
        </div>
      </div>
    );
  }
}
