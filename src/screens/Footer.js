import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full bg-violet-400">
      <div className="h-24 font-serif flex flex-col items-center text-center justify-center w-full text-zinc-700">
        <div className="flex">
          <div className="border rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer  hover:scale-110 ease-in duration-200">
            <Link to="https://www.linkedin.com/in/cansuayada/">
              <BsLinkedin size={30} className=" hover:text-indigo-900 ease-in duration-100" />
            </Link>
          </div>
          <div className="border mx-10 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
            <Link to="https://github.com/cansuayada">
              <BsGithub size={30} className="hover:text-black ease-in duration-100" />
            </Link>
          </div>
          <div className="border rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
            <Link to="https://gmail.google.com/">
              <MdEmail size={32} className="hover:text-red-600 ease-in duration-100" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
