import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FiExternalLink } from "react-icons/fi";

const certifications = [
  {
    title: "Full Stack Data Science and AI.",
    description: "Completed Full Stack Data Science and AI course from Naredh IT Technologies.",
    link: "https://drive.google.com/file/d/15MCS5ZN-ECa2CR1Xm0hsNmORAhkj0zaQ/view?usp=drive_link"
  },
  {
    title: "Business Intelligence & Analytics Course (NPTEL)",
    description: "Completed NPTEL course in Business Intelligence & Analytics IIT Madras.",
    link: "https://internalapp.nptel.ac.in/NOC/NOC25/SEM1/Ecertificates/106/noc25-cs09/Course/NPTEL25CS09S54700650904218897.pdf"
  },
  {
    title: "Generative AI (Edu Skill Academy)",
    description: "Certified in Generative AI from Google Cloud.",
    link: "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=23388a64aefca8955f6435ea17d7644b"
  },
  {
    title: "AI & ML (Amazon Web Services)", 
    description: "Certified in AI & ML from Amazon Web Services.",
    link: "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=2d1a492e4e5d2090a9e237689bdfdc09"
  },
];

const achievements = [
  {
    title: "Winner Hack Revolution Hackathon",
    description: "Won Hackathon In which 180+ Teams Prticipated 60 shortlisted which was Organized by MJCET College.",
  },
  {
    title: " RESEARCH AND PAPER PUBLICATION",
    description: "AI Powered Solution On Nutrition Management (International Conference On Data Mining And Information Security- Springers Publication) .",
  },
];

const Card3DEffect = ({ title, description, index }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-8 rounded-3xl xs:w-[320px] w-full shadow-2xl shadow-[#915EFF]/30 hover:scale-105 transition-transform duration-300'
    style={{
      perspective: '1000px',
      transformStyle: 'preserve-3d',
      boxShadow: '0 10px 40px 0 #915EFF55',
    }}
    whileHover={{ rotateY: 10, rotateX: 10, scale: 1.07 }}
    whileTap={{ rotateY: -10, rotateX: -10, scale: 0.97 }}
  >
    <h4 className='text-white font-bold text-[22px]'>{title}</h4>
    <p className='mt-2 text-secondary text-[16px]'>{description}</p>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Certifications</p>
          <h3 className={styles.sectionHeadText}>Certifications</h3>
        </motion.div>
        <div className="certifications-container" style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn("", "spring", idx * 0.5, 0.75)}
              className='bg-black-200 p-8 rounded-3xl xs:w-[320px] w-full shadow-2xl shadow-[#915EFF]/30 hover:scale-105 transition-transform duration-300 flex flex-col justify-between'
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d',
                boxShadow: '0 10px 40px 0 #915EFF55',
                minHeight: '220px',
                marginBottom: '8px',
              }}
              whileHover={{ rotateY: 10, rotateX: 10, scale: 1.07 }}
              whileTap={{ rotateY: -10, rotateX: -10, scale: 0.97 }}
            >
              <div>
                <h4 className='text-white font-bold text-[22px]'>{cert.title}</h4>
                <p className='mt-2 text-secondary text-[16px]'>{cert.description}</p>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center px-4 py-2 bg-[#007bff] text-white rounded-lg font-bold hover:bg-[#0056b3] transition-colors duration-200"
                style={{ textDecoration: "none", alignSelf: "flex-start" }}
              >
                View Certificate <FiExternalLink style={{ marginLeft: 6, verticalAlign: "middle" }} />
              </a>
            </motion.div>
          ))}
        </div>
        <motion.div variants={textVariant()} className='mt-16'>
          <p className={styles.sectionSubText}>Achievements</p>
          <h3 className={styles.sectionHeadText}>Achievements</h3>
        </motion.div>
        <div className='mt-10 flex flex-wrap gap-7'>
          {achievements.map((item, idx) => (
            <Card3DEffect key={item.title} index={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
