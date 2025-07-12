import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import shajieprofile from "../assets/shajieprofile.png";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="xs:w-[250px] w-full tilt"
    tiltMaxAngleX={25}
    tiltMaxAngleY={25}
    scale={1.05}
    transitionSpeed={250}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Flex container for overview text and profile image */}
      <div className="flex flex-row items-center justify-between gap-10 mt-4">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] max-w-3xl leading-[30px] flex-1"
        >
          I'm Mohd Shajie, a passionate full-stack data science enthusiast who loves turning raw datasets into valuable business intelligence. My journey blends analytics, AI, and automation to solve real-world problems with impactful results. From building interactive dashboards to designing GenAI-powered RAG chatbots, I specialize in combining technical depth with practical application.
        </motion.p>
        <div className="relative flex justify-center items-center min-w-[224px] min-h-[224px]">
          <div className="absolute w-64 h-64 rounded-full bg-purple-500 blur-2xl opacity-60 animate-pulse"></div>
          <img
            src={shajieprofile}
            alt="Profile"
            className="relative w-56 h-56 rounded-full border-4 border-white object-cover shadow-lg"
            style={{ zIndex: 1 }}
          />
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
