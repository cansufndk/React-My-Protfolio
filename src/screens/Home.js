import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import Section from "./Section";

const Home = () => {
  return (
    <div className="bg-violet-500 font-serif flex flex-col items-center justify-center w-full text-center text-zinc-700">
      <div className=" w-full h-screen">
        <Section />
        <Header />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
