import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import shajieprofile from "../assets/shajieprofile.png";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Left side: Hero text */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Mohd Shajie</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            DevOps Engineer & Full-Stack Developer!
          </p>
          {/* Download Resume button (assumed to be here) */}
          {/* Place profile image below the button */}
          <div className="flex justify-center mt-4">
            <div className="relative flex items-center">
              <div className="absolute w-24 h-24 rounded-full bg-purple-500 blur-2xl opacity-60"></div>
              <img
                src={shajieprofile}
                alt="Profile"
                className="relative w-20 h-20 rounded-full border-4 border-white object-cover shadow-lg"
                style={{ zIndex: 1 }}
              />
            </div>
          </div>
        </div>
        {/* Remove right-side image code */}
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
