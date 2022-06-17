import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";

const Form = () => {
  const [status, setStatus] = useState("");
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    interestedIn: "",
    aboutUs: "",
    message: "",
  });
  console.log(values);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_u1tfsgl", "template_9es16h5", values, "cuWvUKETrKkWLF3Db")
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setValues({
            name: "",
            company: "",
            email: "",
            interestedIn: "",
            aboutUs: "",
            message: "",
          });
          setStatus("SUCCESS");
        },
        (error) => {
          console.log("FAILED!", error);
        }
      );
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);
  const renderAlert = () => (
    <div className="submit-alert">
      <p>Your message submitted successfully</p>
    </div>
  );
  return (
    <form className="form" onSubmit={handleSubmit}>
      {status && renderAlert()}
      <div className="form-container">
        <h2 className="form-title">Say Hello!</h2>
        <div className="form-group-container">
          <div className="form-group">
            <input
              onChange={handleChange}
              type="text"
              name="name"
              value={values.name}
              className="form-input"
              placeholder=" "
            />
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <span className="form-line"></span>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange}
              type="text"
              name="company"
              value={values.company}
              className="form-input"
              placeholder=" "
            />
            <label className="form-label" htmlFor="company">
              Company
            </label>
            <span className="form-line"></span>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange}
              type="text"
              name="email"
              value={values.email}
              className="form-input"
              placeholder=" "
            />
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <span className="form-line"></span>
          </div>
        </div>
        <div className="form-group-select">
          <label className="form-label-select">I'm interested in</label>
          <select
            onChange={handleChange}
            value={values.interestedIn}
            name="interestedIn"
            className="form-select"
          >
            <option value="interestedIn" className="form-label-option">
              Bussines Branding
            </option>
            <option value="prueba1" className="form-label-option">
              Prueba 1
            </option>
            <option value="prueba2" className="form-label-option">
              Prueba 2
            </option>
          </select>
        </div>
        <div className="form-group-select">
          <label className="form-label-select">
            How did you hear about us?
          </label>
          <select
            onChange={handleChange}
            value={values.aboutUs}
            name="aboutUs"
            className="form-select"
          >
            <option value="aboutUs" className="form-label-option">
              From Google
            </option>
            <option value="prueba1" className="form-label-option">
              Prueba 1
            </option>
            <option value="prueba2" className="form-label-option">
              Prueba 2
            </option>
          </select>
        </div>
        <div className="form-group-textarea">
          <label className="form-label-textarea" htmlFor="message">
            Brief description of your project ...
          </label>
          <textarea
            onChange={handleChange}
            name="message"
            value={values.message}
            cols="30"
            rows="7"
          ></textarea>
        </div>
        <button className="form-submit" type="submit">
          SEND!
        </button>
      </div>
    </form>
  );
};
export default Form;
