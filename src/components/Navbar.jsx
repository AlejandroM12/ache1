import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <div className="social-media-container">
              <li>
                <Link to="/" className="social-media">
                  <img src={linkedinIcon} alt="linkedin icon" />
                </Link>
              </li>
              <li>
                <Link to="/" className="social-media">
                  <img src={instagramIcon} alt="instagram icon" />
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;