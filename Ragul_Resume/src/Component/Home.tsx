import { useEffect } from "react";
import {
  AiFillCodepenSquare,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import Typed from "typed.js";

import "../style/index.css";

export default function Home() {
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: ["Frontend developer", "perfectionalist", "Intern @codosphere"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        const navbarTop = document.getElementById("navbar_top");
        navbarTop?.classList.add("fixed-top");

        const navbarElement = document.querySelector(".navbar");
        const navbarHeight = (navbarElement as HTMLElement)?.offsetHeight ?? 0;

        document.body.style.paddingTop = `${navbarHeight}px`;
      } else {
        const navbarTop = document.getElementById("navbar_top");
        navbarTop?.classList.remove("fixed-top");

        document.body.style.paddingTop = "0";
      }
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section className="home max-w-full bg-[#707680]" id="home">
        <section className="home-container">
          <h3>Hello, It's Me</h3>
          <h1>Ragul P</h1>
          <h3>
            And I'm a <span className="multiple-text"></span>
          </h3>
          <p className="p-3 font-serif">
            Experienced front-end developer proficient in HTML, CSS, JavaScript,
            ReactJS, Bootstrap, and Tailwind. Skilled in creating responsive,
            user-friendly interfaces and delivering high-quality web
            applications. Passionate about staying up-to-date with the latest
            industry trends and implementing best practices for optimal user
            experiences.
          </p>

          <div className="social-media flex justify-center p-6">
            <a
              href="https://www.linkedin.com/in/ragul-p-139346194/"
              className="my-media-1"
            >
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/ragulpalanisamy" className="my-media-2">
              <AiFillGithub />
            </a>
            <a href="https://codepen.io/ragulpalanisamy" className="my-media-3">
              <AiFillCodepenSquare />
            </a>
            <a href="https://twitter.com/Ragul_1010" className="my-media-4">
              <AiFillTwitterSquare />
            </a>
          </div>
          <div>
            <a href="/Ragul_Resume.pdf" className="btn">
              Download CV
            </a>
          </div>
        </section>
        <div className="home-img w-[250px] h-[250px] top-0">
          <img
            src="/Ragul Img.jpg"
            alt="personal picture"
            className="w-[500px] h-[500px] rounded-full object-cover top-0"
          />
        </div>
      </section>
    </>
  );
}
