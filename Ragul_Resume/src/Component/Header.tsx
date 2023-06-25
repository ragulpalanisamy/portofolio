import { Link } from "react-router-dom";
import "../style/index.css";

export default function Header() {
  return (
    <header className="header">
      <a href="#" className="logo text-6xl">
        Portfolio
      </a>
      <nav id="navbar_top" className="navbar">
        <Link to="#home" className="my-nav-class1">
          Home
        </Link>
        <Link to="#about" className="my-nav-class2">
          About
        </Link>
        <Link to="#skills" className="my-nav-class3 active:text-[#18f5c9ec]">
          Skills
        </Link>
        <Link to="#project" className="my-nav-class4 active:text-[#18f5c9ec]">
          Project
        </Link>
        <Link to="contact" className="my-nav-class5 active:text-[#18f5c9ec]">
          Contact
        </Link>
        <Link
          to="#experience"
          className="my-nav-class6 active:text-[#18f5c9ec]"
        >
          Experience
        </Link>
      </nav>
    </header>
  );
}
