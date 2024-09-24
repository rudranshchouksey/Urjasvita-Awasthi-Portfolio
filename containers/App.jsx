import React from "react";
import Header from "./Header";
import Home from "./Home";
import ServiceCount from "./ServiceCount"
import About from "./About";
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"
import { AnimatePresence } from "framer-motion";
import HomeSocialLinks from "../components/HomeSocialLinks";
import { Socials } from "../utils/helper";
import ParticlesContainer from "./ParticlesContainer";

const App = () => {
  return (
    <div className="w-full xl:w-[1400px] py-32 px-4 lg:px-12 pr-4 lg:pr-32">
      <ParticlesContainer />

      <Header />

      <Home />

      <ServiceCount />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <div className="w-full flex flex-col items-center justify-start mt-32 mb-12">
        <p className="text-3xl tracking-wide text-texlight">Urjasvita Awasthi</p>
        <div className="flex items-center justify-center gap-16 mt-16">
          <AnimatePresence>
            {Socials && Socials.map((item, index) => (
              <HomeSocialLinks key={index} data={item} index={index} />)
            )}
          </AnimatePresence>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 mt-12">
            <p className="text-texlight text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Sapiente, necessitatibus? Nihil voluptates quaerat repudiandae pariatur. 
              Molestias, harum corrupti. Dolorem provident cupiditate laborum distinctio 
              atque nam inventore quia eaque! Sequi, ea!
            </p>
            <p className="text-texlight text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Sapiente, necessitatibus? Nihil voluptates quaerat repudiandae pariatur. 
              Molestias, harum corrupti. Dolorem provident cupiditate laborum distinctio 
              atque nam inventore quia eaque! Sequi, ea!
            </p>
            <div className="w-full flex flex-col items-center justify-center gap-3">
              <p className="text-texlight text-center">
                urjasvitaawasthi@gmail.com
              </p>
              <p className="text-texlight text-center">+91 79748-40783</p>
              <a href="#">
                <p className="text-texlight text-center">Hire Me</p>
              </a>
            </div>
        </div>
      </div>

    </div>
  );
};

export default App;
