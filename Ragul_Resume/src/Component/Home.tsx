import "../index.css";

export default function Home() {
  return (
    <section className="home" id="home">
      <section className="home-container">
        <h3>Hello, It's Me</h3>
        <h1>Ragul P</h1>
        <h3>
          And I'm a<span className="multiple-text"></span>
        </h3>
        <p>
          Experienced front-end developer proficient in HTML, CSS, JavaScript,
          ReactJS, Bootstrap, and Tailwind. Skilled in creating responsive,
          user-friendly interfaces and delivering high-quality web applications.
          Passionate about staying up-to-date with the latest industry trends
          and implementing best practices for optimal user experiences.
        </p>

        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/ragul-p-139346194/"
            className="my-media-1"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/ragulpalanisamy" className="my-media-2">
            <i className="bx bxl-github color-[#10a8f0]"></i>
          </a>
          <a href="https://codepen.io/ragulpalanisamy" className="my-media-3">
            <i className="bx bxl-codepen color-[#10a8f0]"></i>
          </a>
        </div>

        <div>
          <a href="/Ragul_Resume.pdf" className="btn">
            Download CV
          </a>
        </div>
      </section>
      <div className="home-img">
        <img src="/Ragul Img.jpg" alt="personal picture" />
      </div>
    </section>
  );
}
