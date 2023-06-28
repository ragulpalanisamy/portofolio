import { useState } from "react";
import "../style/index.css";

export default function Header() {
  const [isHome, setIsHome] = useState(true);
  const [isAbout, setIsAbout] = useState(false);

  const home = () => {
    setIsHome(true);
    setIsAbout(false);
  };

  const about = () => {
    setIsHome(false);
    setIsAbout(true);
  };
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <a href="/" className="logo text-6xl">
        Portfolio
      </a>
      <nav id="navbar_top" className="navbar">
        <a
          href="#home"
          className="my-nav-class1"
          onClick={() => scrollToSection("home")}
        >
          Home
        </a>
        <a
          href="#about"
          className="my-nav-class2"
          onClick={() => scrollToSection("about")}
        >
          About
        </a>
        <a
          href="#skills"
          className="my-nav-class3"
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </a>
        <a
          href="#project"
          className="my-nav-class4"
          onClick={() => scrollToSection("project")}
        >
          Project
        </a>
        <a
          href="#contact"
          className="my-nav-class5"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </a>
        <a
          href="#experience"
          className="my-nav-class6 active:text-[#18f5c9ec]"
          onClick={() => scrollToSection("experience")}
        >
          Experience
        </a>
      </nav>
    </header>
  );
}
