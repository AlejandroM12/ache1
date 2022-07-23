import { useState } from "react";
import { NavLink } from "react-router-dom";
import hamburguerIcon from "../assets/Icons/icon-menu.svg";
import closeHamburguerIcon from "../assets/Icons/x.svg";
import linkedinIcon from "../assets/Icons/linkedin.svg";
import instagramIcon from "../assets/Icons/instagram.svg";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  return (
    <>
      <nav className="navigation">
        {isNavExpanded === true ? (
          <button
            className="hamburguer-icon"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <img src={hamburguerIcon} alt="hamburguer icon" />
          </button>
        ) : (
          <button
            className="hamburguer-icon-close"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <img src={closeHamburguerIcon} alt="hamburguer icon close" />
          </button>
        )}

        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "active" : "link-a";
                }}
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "active" : "link-a";
                }}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "active" : "link-a";
                }}
                to="/jobs"
              >
                Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "active" : "link-a";
                }}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <div className="social-media-container">
              <li>
                <a href="https://www.linkedin.com/in/ache-uno-design-16988a205/" className="social-media" target="_blank" rel="noreferrer">
                  <img src={linkedinIcon} alt="linkedin icon" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ache1.design/" className="social-media" target="_blank" rel="noreferrer">
                  <img src={instagramIcon} alt="instagram icon" />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;