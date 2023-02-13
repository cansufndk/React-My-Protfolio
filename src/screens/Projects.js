import React from "react";

const Projects = () => {
  return (
    <div className=" w-full bg-violet-100 pt-10">
      <div className="h-screen font-serif flex flex-col items-center justify-center w-full text-zinc-700">
        <h1 className="p-10 font-bold text-4xl">Projects</h1>

        <div className="flex flex-col items-center w-full justify-center p-5">
          <div className="flex">
            <div className="shadow-xl hover:hover:scale-105 cursor-pointer ease-in duration-300">
              <img src={require("../assest/react-native.png")} width="500" />
            </div>

            <div className="ml-10 hover:hover:scale-105 cursor-pointer ease-in duration-300">
              <img src={require("../assest/react-shop.png")} width="500" />
            </div>
          </div>

          <div className="flex mt-10 ">
            <div className="hover:hover:scale-105 cursor-pointer ease-in duration-300">
              <img src={require("../assest/weather.png")} width="505" />
            </div>

            <div className=" ml-10 hover:hover:scale-105 cursor-pointer ease-in duration-300">
              <img src={require("../assest/mentor.jpg")} width="500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
