import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hero } from "../assets";
import HeroTypeWritter from "../components/HeroTypeWritter";
import HomeSocialLinks from "../components/HomeSocialLinks";
import { Socials } from "../utils/helper";

const Home = () => {
  return (
    <section id="home" className="flex items-center justify-center flex-col gap-12 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="w-full h-full flex  flex-col items-center lg:items-start justify-center gap-4">
          <h2 className="text-3xl lg:text-4xl text-texlight">Hello, It's me 
            <spam className="block tracking-wider text-4xl lg:text-6xl mt-4 text-white">{" "} Urjasvita Awasthi</spam>
          </h2>

          <h2 className="text-2xl lg:text-4xl text-texlight">And I'm {" "}
            <HeroTypeWritter 
              speed={100}
              words={["A UI/UX Designer..", "an Unity Developer..", "a Civil Engineer..", "an Enterprenuer..", "a Freelancer.."]} />
          </h2>

          <p className="text-base text-texlight mt-6 text-center lg:text-left">
          As a passionate UI/UX designer with a background in civil engineering and project management, I'm dedicated to creating digital experiences that are both visually appealing and user-friendly. With a keen eye for detail and a strong understanding of user behavior, I strive to deliver exceptional design solutions that meet the needs of our clients.
          </p>
        

          <div className="flex items-center justify-center gap-16 mt-16">
            <AnimatePresence>
              {Socials && Socials.map((item, index) => (
                <HomeSocialLinks key={index} data={item} index={index} />)
              )}
            </AnimatePresence>
          </div>

          <a 
            href="#" 
            className="mt-12 border border-[rgba(255,255,255,0.3)] 
            rounded-xl px-8 py-3 active:95 group hover:border-primary">
            <p className="text-texlight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary" >
              Hire Me
            </p>
          </a>    

        </div>

        <div className="w-full h-full flex items-start justify-center lg:items-center">
          <motion.img 
            initial={{y: 0}}
            animate={{y: [-10, 10, -10]}}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }}
            src={Hero}
            className="w-auto h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
};

export default Home;
