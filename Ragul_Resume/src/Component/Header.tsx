import "../style/index.css";

export default function Header() {
  return (
    <header className="header">
      <a href="#" className="logo text-orange-500">
        Portfolio
      </a>
      <nav id="navbar_top" className="navbar">
        <a href="#home" className="active my-nav-class1">
          Home
        </a>
        <a href="#about" className="my-nav-class2">
          About
        </a>
        <a href="#skills " className="my-nav-class3">
          Skills
        </a>
        <a href="#project" className="my-nav-class4">
          Project
        </a>
        <a href="contact" className="my-nav-class5">
          Contact
        </a>
        <a href="#experience" className="my-nav-class6">
          Experience
        </a>
      </nav>
    </header>
  );
}
