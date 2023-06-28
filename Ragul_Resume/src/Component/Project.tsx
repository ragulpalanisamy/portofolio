import { Button } from "@mui/material";
import "../style/index.css";

export default function Project() {
  return (
    <section id="project" className="project mt-10 container">
      <h2 className="task">Projects</h2>
      {/* <!-- E-Bus Pass --> */}
      <div className="grid grid-cols-3 space-x-3 border-spacing-3 mt-10 mx-auto">
        <div className="">
          <h3 className="p-3">E-Bus Pass Renewal</h3>
          <p className="p-3 flex justify-evenly">
            To serve school/college students and working professionals, we
            developed the website "E-BUS PASS." They may apply and renew their
            bus pass via the website.
          </p>
          <div className="flex justify-center">
            <Button
              href="https://selvakumar2152001.wixsite.com/website"
              className=""
            >
              Know More
            </Button>
          </div>
        </div>
        {/* <!-- AI Powered Recaster --> */}
        <div>
          <h3 className="p-3">AI Powered Recaster</h3>
          <p className="p-3 flex justify-evenly overflow-y-scroll h-[100px] z-10 bg-blend-overlay">
            Developed a website for student and working professionals with the
            concept of learning the english with 12 forms of tenses. For
            professional, they given any keyword it will generate the content.
            Using Turnitin and GPT-3 Algorithm, implemented the website.
          </p>
          <div className="flex justify-center mt-6">
            <Button
              href="https://selvakumar2152001.wixsite.com/website"
              className=""
            >
              Know More
            </Button>
          </div>
        </div>
        {/* <!-- Movies App --> */}
        <div>
          <h3 className="p-3">Movies App</h3>
          <p className="p-3 flex justify-evenly">
            Developed Movies Application using React Js, Express Js, Postgress
            SQL, Tailwind, Reactstrap and Node Js. I have gained experience to
            work with the integration of components in the application.
          </p>
          <div className="flex justify-center">
            <Button
              href="https://selvakumar2152001.wixsite.com/website"
              className=""
            >
              Know More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
