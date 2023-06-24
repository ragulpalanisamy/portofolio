import "../style/index.css";

export default function Project() {
  return (
    <section id="project" className="project">
      <h2 className="task">Projects</h2>
      {/* <!-- E-Bus Pass --> */}
      <div className="">
        <h3>E-Bus Pass Renewal</h3>
        <p>
          To serve school/college students and working professionals, we
          developed the website "E-BUS PASS." They may apply and renew their bus
          pass via the website.
        </p>
      </div>
      {/* <!-- AI Powered Recaster --> */}
      <div>
        <h3>AI Powered Recaster</h3>
        <p>
          Developed a website for student and working professionals with the
          concept of learning the english with 12 forms of tenses. For
          professional, they given any keyword it will generate the content.
          Using Turnitin and GPT-3 Algorithm, implemented the website.
        </p>
      </div>
      {/* <!-- Movies App --> */}
      <div>
        <h3>Movies App</h3>
        <p>
          Developed Movies Application using React Js, Express Js, Postgress
          SQL, Tailwind, Reactstrap and Node Js. I have gained experience to
          work with the integration of components in the application.
        </p>
      </div>
    </section>
  );
}
