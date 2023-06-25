import "../style/index.css";

export default function About() {
  return (
    <section
      className="about max-w-full p-10 bg-white container my-10"
      id="about"
    >
      <div className="about-img w-[250px] h-[250px]">
        <img
          src="/Ragul Img.jpg"
          alt="Picture"
          className="w-[250px] h-[250px]"
        />
      </div>

      <div className="about-container">
        <h2 className="heading2">
          About <span>Me</span>
        </h2>
        <h3 className="m-3">Frontend Developer</h3>
        <p className="p-3 font-serif leading-relaxed">
          Highly skilled and versatile Front-End Developer with expertise in
          HTML, CSS, JavaScript, ReactJS, Bootstrap, and Tailwind. Adept at
          translating designs into responsive and visually appealing web
          applications. Proven ability to create seamless user experiences
          through efficient code implementation and optimization. Strong
          problem-solving skills and a keen eye for detail. Passionate about
          staying up-to-date with the latest web development trends and
          technologies. Committed to delivering high-quality projects on time
          and exceeding client expectations.
        </p>
        <div>
          <a href="#" className="btn m-3">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
