import About from "../Component/About";
import Header from "../Component/Header";
import Home from "../Component/Home";
import Project from "../Component/Project";
import Skills from "../Component/Skills";

export default function profile() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Project />
    </div>
  );
}
