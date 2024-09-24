import React from "react";
import { motion } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  return(
    <section id="skills" className="flex items-center justify-center flex-col gap-12 my-12">
      <div className="w-full flex items-center justify-center py-24">
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt=""/>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary" >Skills</p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt=""/>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">

        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary" >My Skills & Work Experience</p>


          <p className="text-texlight text-base tracking-wide text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae cupiditate nostrum eaque, 
            dicta explicabo perferendis voluptatem omnis maiores rem voluptatum non odit vitae, 
            labore ipsum? Doloribus incidunt quis necessitatibus.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae cupiditate nostrum eaque, 
            dicta explicabo perferendis voluptatem omnis maiores rem voluptatum non odit vitae, 
            labore ipsum? Doloribus incidunt quis necessitatibus.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae cupiditate nostrum eaque, 
            dicta explicabo perferendis voluptatem omnis maiores rem voluptatum non odit vitae, 
            labore ipsum? Doloribus incidunt quis necessitatibus.
          </p>
        </div>

        <div className="w-full flex flex-col gap-4 items-center justify-center px-8">
          <SkillCard skill={"HTML 5"} percentage={"95%"} color={"#FF3F3F"} move={true}/>
          <SkillCard skill={"CSS 3"} percentage={"75%"} color={"#008FFF"} />
          <SkillCard skill={"Javascript"} percentage={"85%"} color={"#FFB900"} move={true}/>
          <SkillCard skill={"Node Js"} percentage={"80%"} color={"#14D800"} />
          <SkillCard skill={"React & NextJs"} percentage={"90%"} color={"#00FFF3"} move={true}/>
          <SkillCard skill={"Mongo DB & Firebase"} percentage={"75%"} color={"#FFE400"} />
        </div>

      </div>
    </section>
  )
};

export default Skills;
