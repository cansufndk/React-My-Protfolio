import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
const Section = () => {
  return (
    <div className="bg-violet-100 border">
      <div className="h-screen font-serif flex flex-col items-center justify-center w-full border text-zinc-700">
        <div className=" flex flex-col items-center justify-center text-center p-5">
          <h1 className=" text-4xl font-bold">Hi I'm Cansu Ayada</h1>
          <h2 className="text-2xl my-7 font-semibold">Jr. Frontend Developer</h2>
          <p className="text-xl mb-10 text-center">I focused on creating projects with React and React Native and moving forward in this area.</p>
        </div>
        <div className="flex">
          <div className="border rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer  hover:scale-110 ease-in duration-200">
            <Link to="https://www.linkedin.com/in/cansuayada/">
              <BsLinkedin size={30} className=" hover:text-indigo-600 ease-in duration-100" />
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

export default Section;
