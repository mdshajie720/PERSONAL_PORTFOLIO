import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const certifications = [
  {
    title: "RHCSA (Red Hat Certified System Administrator)",
    issuer: "Certified by Red Hat for system administration skills.",
    description: "",
  },
  {
    title: "Computer Graphics (NPTEL)",
    issuer: "Completed NPTEL course in Computer Graphics.",
    description: "",
  },
  {
    title: "MongoDB in Python (MongoDB)",
    issuer: "Certification for MongoDB with Python integration.",
    description: "",
  },
  {
    title: "UI/UX (Internshala)",
    issuer: "UI/UX design certification from Internshala.",
    description: "",
  },
];

const achievements = [
  {
    title: "Winner LAN Gaming Tournament",
    description: "Won the LAN Gaming Tournament competition.",
  },
  {
    title: "Project Presentation at E-Cell ACEIT",
    description: "Presented project at E-Cell ACEIT event.",
  },
];

const CertificationCard = ({ index, title, issuer }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-6 rounded-3xl xs:w-[320px] w-full"
  >
    <div className="mt-1">
      <h3 className="text-white font-bold text-[20px] mb-2">{title}</h3>
      <p className="text-secondary text-[14px] leading-[18px]">{issuer}</p>
    </div>
  </motion.div>
);

const AchievementCard = ({ index, title, description }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-6 rounded-3xl xs:w-[320px] w-full"
  >
    <div className="mt-1">
      <h3 className="text-white font-bold text-[20px] mb-2">{title}</h3>
      <p className="text-secondary text-[14px] leading-[18px]">{description}</p>
    </div>
  </motion.div>
);

const Certifications = () => {
  return (
    <div className="mt-20">
      {/* Certifications Section */}
      <div className={`bg-black-100 rounded-[20px]`}>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>CERTIFICATIONS</p>
            <h2 className={styles.sectionHeadText}>Certifications</h2>
          </motion.div>
        </div>
        <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
          {certifications.map((certification, index) => (
            <CertificationCard
              key={certification.title}
              index={index}
              {...certification}
            />
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className={`mt-20 bg-black-100 rounded-[20px]`}>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>ACHIEVEMENTS</p>
            <h2 className={styles.sectionHeadText}>Achievements</h2>
          </motion.div>
        </div>
        <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.title}
              index={index}
              {...achievement}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, "certifications");
