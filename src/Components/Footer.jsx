import React from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineGoogle,
  AiFillGithub,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
function Footer() {
  const socialStyle =
    "m-3 p-2 text-white bg-blue-700 rounded-full cursor-pointer hover:bg-white hover:text-blue-700  ease-out  hover:scale-110 duration-200  active:bg-[red]";
  return (
    <div className="flex items-center justify-around p-2">
      <div className="flex-1 flex flex-col flex-wrap p-2 ">
        {/* store information */}
        <h1 className="title text-2xl">SaniKeepsCode</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          quis quasi voluptas error veniam amet dolor dolorem nemo quaerat quia
          sint molestias, maiores velit alias ea veritatis neque blanditiis eius
          quam eaque repellat praesentium beatae! Libero molestiae tempora sequi
          in.
        </p>
        <div className="flex justify-center items-center self-start">
          {/* socile media */}
          <div className={socialStyle}>
            <AiFillFacebook size={25} />
          </div>
          <div className={socialStyle}>
            <AiFillGithub size={25} />
          </div>
          <div className={socialStyle}>
            <AiOutlineGoogle size={25} />
          </div>
          <div className={socialStyle}>
            <AiOutlineInstagram size={25} />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col p-2 text-gray-400">
        <div className="flex m-3">
          <GrLocation size={20} />
          <p className="ml-2">State of California</p>
        </div>
        <div className="flex m-3">
          <AiFillPhone size={20} />
          <p className="ml-2">+008 17900 72639</p>
        </div>
        <div className="flex m-3">
          <AiOutlineMail size={20} />
          <p className="ml-2">towsifaslamctg143@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
