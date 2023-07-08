import About from "../Component/About";
import AlternateHeader from "../Component/AlternateHeader";
import Contact from "../Component/Contact";
import Experience from "../Component/Experience";
import Header from "../Component/Header";
import Home from "../Component/Home";
import Project from "../Component/Project";
import Skills from "../Component/Skills";

export default function profile() {
  return (
    <div>
      <Header />
      <AlternateHeader />
      <Home />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Contact />
    </div>
  );
}
