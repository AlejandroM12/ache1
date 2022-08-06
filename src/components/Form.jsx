import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import check from "../assets/Icons/check.png";
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
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_upup1po", "template_c51k1gg", values, "Ey3ADQshkjKKdsC_L")
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
      }, 2000);
    }
  }, [status]);
  const renderAlert = () => (
    <div className="submit-alert">
      <p className="submit-message">Your message submitted successfully</p>
      <img className="icon" src={check} alt="check icon" />
    </div>
  );
  return (
    <form className="form" onSubmit={handleSubmit}>
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
              required
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
              required
            />
            <label className="form-label" htmlFor="company">
              Company
            </label>
            <span className="form-line"></span>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={values.email}
              className="form-input"
              placeholder=" "
              required
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
            <option value="apps" className="form-label-option">
              Apps Mobile
            </option>
            <option value="business" className="form-label-option">
              Business Systems
            </option>
            <option value="social" className="form-label-option">
              Social Media
            </option>
            <option value="website" className="form-label-option">
              Web site development
            </option>
            <option value="marketing" className="form-label-option">
              Marketing
            </option>
            <option value="uxui" className="form-label-option">
              Ux/Ui Desing
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
            <option value="linkedin" className="form-label-option">
              From Linkedin
            </option>
            <option value="instagram" className="form-label-option">
              From Instagram
            </option>
            <option value="email" className="form-label-option">
              From E-mail Champain
            </option>
            <option value="client" className="form-label-option">
              From another client
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
          ></textarea>
        </div>
        {status === "SUCCESS" ? (
          renderAlert()
        ) : (
          <button className="form-submit" type="submit">
            <span className="text-send"> SEND!</span>
          </button>
        )}
      </div>
    </form>
  );
};
export default Form;
