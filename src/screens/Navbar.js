import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const Navbar = () => {
  const [pixel, setPixel] = useState(false);
  const changePixel = () => {
    setPixel(!pixel);
    console.log("click");
  };
  return (
    <div className="fixed font-serif border bg-violet-100  w-full flex shadow-xl flex-row h-20 justify-between items-center ">
      <div className=" flex shadow-xl flex-row justify-between w-full h-20 items-center text-center z-50 opacity-100">
        <div className="ml-10">
          <img src={require("../assest/logo.png")} width="50" className="rounded-full cursor-pointer" />
        </div>
        <div className="">
          <ul className="hidden md:flex flex-row text-zinc-700">
            <Link to="/">
              <li className="mr-10 hover:underline hover:scale-105 ease-in duration-150">HOME</li>
            </Link>
            <Link to="/section">
              <li className="mr-10 hover:underline hover:scale-105 ease-in duration-150 ">ABOUT</li>
            </Link>
            <Link to="/header">
              <li className="mr-10 hover:underline hover:scale-105 ease-in duration-150 ">SKILLS</li>
            </Link>
            <Link to="/projects">
              <li className="mr-10 hover:underline hover:scale-105 ease-in duration-150">PROJECTS</li>
            </Link>
          </ul>
        </div>
      </div>
      <div onClick={changePixel} className="md:hidden  px-5">
        <GiHamburgerMenu size={35} />
      </div>
      <div className={pixel ? "md:hidden fixed left-0 top-0 w-full h-screen bg-violet-100/80" : ""}>
        <div
          className={
            pixel
              ? "md:hidden fixed right-0 top-20 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-violet-300/80 pt-2 ease-in duration-300"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-300 "
          }
        >
          <div className="flex w-full items-center justify-between ">
            <div onClick={changePixel} className=" cursor-pointer">
              <AiOutlineClose size={30} />
            </div>
            <div></div>
          </div>
          <div className="border-b my-2">
            <div className="py-4 flex flex-col mx-5">
              <ul className="uppercase">
                <Link to="/">
                  <li className="py-3 text-sm">Home</li>
                </Link>
                <Link to="/section">
                  <li className="py-3 text-sm">About</li>
                </Link>
                <Link to="/header">
                  <li className="py-3 text-sm">Skills</li>
                </Link>
                <Link to="/projects">
                  <li className="py-3 text-sm">Project</li>
                </Link>
              </ul>

              <div className="absolute bottom-20 left-10">
                <p className="text-center">Let's Connect</p>
                <div className="flex justify-center items-center my-5">
                  <div className="border rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer  hover:scale-110 ease-in duration-200">
                    <Link to="https://www.linkedin.com/in/cansuayada/">
                      <BsLinkedin size={25} className=" hover:text-indigo-600 ease-in duration-100" />
                    </Link>
                  </div>
                  <div className="border mx-10 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
                    <Link to="https://github.com/cansuayada">
                      <BsGithub size={25} className="hover:text-black ease-in duration-100" />
                    </Link>
                  </div>
                  <div className="border rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
                    <Link to="https://gmail.google.com/">
                      <MdEmail size={25} className="hover:text-red-600 ease-in duration-100" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
