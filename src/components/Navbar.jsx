import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, github, linkedin } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Mohd Shajie
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-8 items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[16px] font-medium cursor-pointer transition-colors duration-200 relative`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} className="relative">
                {nav.title}
                {active === nav.title && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#915EFF] rounded-full" />
                )}
              </a>
            </li>
          ))}

          {/* Resume Download Button */}
          <li className="ml-4">
            <a
              href="/ShajieResume.pdf"
              download="Mohd_Shajie_Resume.pdf"
              className="bg-gradient-to-r from-[#915EFF] to-[#7c3aed] hover:from-[#7c3aed] hover:to-[#915EFF] text-white px-6 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 border border-purple-500/20"
            >
              Download Resume
            </a>
          </li>

          {/* Social Links in Desktop Navbar */}
          <li className="flex gap-3 ml-2">
            <a
              href="https://github.com/mdshajie720"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-[#915EFF] transition-all duration-300 transform hover:scale-110 group border border-white/20"
            >
              <img
                src={github}
                alt="github"
                className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-200"
              />
            </a>
            <a
              href="http://www.linkedin.com/in/md-shajie720"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-[#0077B5] transition-all duration-300 transform hover:scale-110 group border border-white/20"
            >
              <img
                src={linkedin}
                alt="linkedin"
                className="w-5 h-5 object-contain filter invert group-hover:scale-110 transition-transform duration-200"
              />
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[180px] z-10 rounded-xl backdrop-blur-lg border border-white/10 shadow-2xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] w-full ${
                    active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-white transition-colors duration-200`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a
                    href={`#${nav.id}`}
                    className="block py-1 px-2 rounded hover:bg-white/10 transition-all duration-200"
                  >
                    {nav.title}
                  </a>
                </li>
              ))}

              {/* Resume Download Button in Mobile Menu */}
              <li className="mt-4 w-full">
                <a
                  href="/Mohd Shajie.pdf"
                  download="Mohd Shajie_Singh_Resume.pdf"
                  className="bg-gradient-to-r from-[#915EFF] to-[#7c3aed] hover:from-[#7c3aed] hover:to-[#915EFF] text-white px-4 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-300 block text-center shadow-lg border border-purple-500/20"
                  onClick={() => setToggle(!toggle)}
                >
                  Download Resume
                </a>
              </li>

              {/* Social Links in Mobile Menu */}
              <li className="flex gap-4 mt-4 justify-center w-full pt-3 border-t border-white/10">
                <a
                  href="https://github.com/mdshajie720"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-[#915EFF] transition-all duration-300 transform hover:scale-110 group border border-white/20"
                >
                  <img
                    src={github}
                    alt="github"
                    className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-200"
                  />
                </a>
                <a
                  href="http://www.linkedin.com/in/md-shajie720"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-[#0077B5] transition-all duration-300 transform hover:scale-110 group border border-white/20"
                >
                  <img
                    src={linkedin}
                    alt="linkedin"
                    className="w-6 h-6 object-contain filter invert group-hover:scale-110 transition-transform duration-200"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
