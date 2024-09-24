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
            Project Management: Proficient in managing project scope, timelines, and budgets to ensure successful delivery.
            UI/UX Design: Skilled in wireframing, prototyping, and visual design using tools like Figma and Photoshop.
            Communication: Excellent interpersonal skills for maintaining clear communication with clients and stakeholders
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Technical Proficiency: Strong command of Microsoft Office Suite (Excel, Word, PowerPoint) and Jira for effective project tracking.
            Problem-solving: Adept at identifying risks and implementing solutions to enhance team performance.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Collaboration: Experience working with diverse teams to foster creativity and innovation in project execution.
            My diverse skill set allows me to adapt quickly to new challenges while maintaining a focus on delivering high-quality outcomes. 
            I am always eager to learn and grow in my professional journey.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            
          </p>
        </div>

        <div className="w-full flex flex-col gap-4 items-center justify-center px-8">
          <SkillCard skill={"Figma"} percentage={"95%"} color={"#FF3F3F"} move={true}/>
          <SkillCard skill={"PhotoShop"} percentage={"80%"} color={"#008FFF"} />
          <SkillCard skill={"Unity"} percentage={"95%"} color={"#FFB900"} move={true}/>
          <SkillCard skill={"3ds max"} percentage={"85%"} color={"#14D800"} />
          <SkillCard skill={"Project Management"} percentage={"95%"} color={"#00FFF3"} move={true}/>
          <SkillCard skill={"Microsoft Office Suite"} percentage={"80%"} color={"#FFE400"} />
        </div>

      </div>
    </section>
  )
};

export default Skills;
