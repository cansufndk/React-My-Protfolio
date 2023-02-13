import React from "react";
import html from "../assest/html.svg";
import css from "../assest/css.svg";
import javascript from "../assest/javascript.svg";
import bootstrap from "../assest/bootstrap.svg";
import react from "../assest/react.svg";
import rn from "../assest/rn.svg";
import sass from "../assest/sass.svg";
import firebase from "../assest/firebase.svg";
import tailwind from "../assest/tailwind.svg";

const Header = () => {
  return (
    <div className=" w-full bg-violet-100 pt-10">
      <div className="h-screen font-serif flex flex-col items-center justify-center w-full text-zinc-700">
        <h1 className="p-10 font-bold text-4xl">Skills</h1>
        <div className="flex flex-row items-center w-full justify-evenly text-center">
          <div className="">
            <div className="hover:hover:scale-150 cursor-pointer ease-in duration-200">
              <p className="text-lg font-medium">HTML5</p>
              <img src={html} width="100" height="100" />
            </div>

            <div className="my-10 hover:hover:scale-150 cursor-pointer ease-in duration-200 ">
              <p className="text-lg font-medium">CSS3</p>
              <img src={css} width="100" height="100" />
            </div>

            <div className="hover:hover:scale-150 cursor-pointer ease-in duration-200">
              <p className="text-lg font-medium">SASS</p>
              <img src={sass} width="100" height="100" />
            </div>
          </div>

          <div>
            <div className="hover:hover:scale-150 cursor-pointer ease-in duration-200">
              <p className="text-lg font-medium">TAILWIND</p>
              <img src={tailwind} width="100" height="100" />
            </div>

            <div className="my-10 hover:hover:scale-150 cursor-pointer ease-in duration-200">
              <p className="text-lg font-medium">BOOTSTRAP</p>
              <img src={bootstrap} width="100" height="100" />
            </div>

            <div className="hover:hover:scale-150 cursor-pointer ease-in duration-200">
              <p className="text-lg font-medium">JAVASCRIPT</p>
              <img src={javascript} width="100" height="100" />
            </div>
          </div>

          <div className="  ">
            <div className="hover:hover:scale-150 cursor-pointer ease-in duration-200">
              <p className="text-lg font-medium ">REACT</p>
              <img src={react} width="100" height="100" />
            </div>

            <div className="my-10 hover:hover:scale-150 cursor-pointer ease-in duration-200">
              <p className=" font-medium text-lg flex flex-col">React-Native</p>
              <img src={rn} width="100" height="100" />
            </div>

            <div className="hover:hover:scale-150 cursor-pointer ease-in duration-200">
              <p className="text-lg font-medium">FIREBASE</p>
              <img src={firebase} width="100" height="100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
