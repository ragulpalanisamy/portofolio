import { Formik, Form, Field } from "formik";
import { AiOutlineMail } from "react-icons/ai";

import "../style/index.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h3 className="text-center">Contact</h3>
      <div>
        <p>
          While I may be occupied with either taking a nap or working on an
          extraordinary project, please feel free to leave a message if you have
          any suggestions or if you'd like to collaborate. I'll be glad to
          connect with you.
        </p>
      </div>
      <div className="contact_inhtmlFormation">
        <div>
          <h3 className="contact_title">Email</h3>
          <span className="contact_subtitle" id="contact-email">
            <AiOutlineMail className="mr-3 my-auto contact_icon" />
            ragulpalanisamy1001@gmail.com
          </span>
        </div>
      </div>
      <div className="contact_inhtmlFormation">
        <div>
          <h3 className="contact_title mt-3">Location</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 contact_icon "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <span className="contact_subtitle">Bangalore, Karnataka</span>
        </div>
      </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          project: "",
          message: "",
        }}
        onSubmit={(values) => {
          // Handle form submission
          console.log(values);
        }}
      >
        <Form className="contact_htmlForm grid">
          <div className="contact_inputs grid">
            <div className="contact_content">
              <label htmlFor="name" className="contact_label">
                Name
              </label>
              <Field type="text" name="name" className="contact_input" />
            </div>
            <div className="contact_content">
              <label htmlFor="email" className="contact_label">
                Email
              </label>
              <Field type="email" name="email" className="contact_input" />
            </div>
          </div>
          <div className="contact_content">
            <label htmlFor="project" className="contact_label">
              Project
            </label>
            <Field type="text" name="project" className="contact_input" />
          </div>
          <div className="contact_content">
            <label htmlFor="message" className="contact_label">
              Message
            </label>
            <Field as="textarea" name="message" className="contact_input" />
          </div>
          <div>
            <button type="submit" className="button button-flex">
              Send Message
              <i className="uil uil-message button_icon"></i>
            </button>
          </div>
        </Form>
      </Formik>
    </section>
  );
}
