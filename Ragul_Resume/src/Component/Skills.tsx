import "../style/index.css";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="skill">Skills</h2>
      <div className="front">
        <i className="uil uil-arrow skills_icon"></i>
        <h3>Front-End Languages: </h3>
        <h5>HTML</h5>
        <h5>CSS</h5>
        <h5>JavaScript</h5>
        <h5>REACT JS</h5>
      </div>
      <div className="back">
        <h3>Back-End Languages: </h3>
        <h5>C</h5>
        <h5>C++</h5>
        <h5>Java</h5>
        <h5>JavaScript</h5>
        <h5>Express JS</h5>
      </div>
      <div className="db">
        <h3>Database: </h3>
        <h5>SQL</h5>
        <h5>PostgressSql</h5>
      </div>
    </section>
  );
}
