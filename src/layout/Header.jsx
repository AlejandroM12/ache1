import { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Home/ache1-logo.svg";

const Header = ({ pivot, setPivot }) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const refNav = useRef();
  const refMenu = useRef();
  const refBtnToggle = useRef();
  const refIcon = useRef();

  const handleToggle = () => {
    if (menuToggle) {
      setMenuToggle(false);
      refMenu.current.style.top = "-100%";
      refIcon.current.classList.replace("bi-x-lg", "bi-list");
    } else {
      setMenuToggle(true);
      const calculate =
        refNav.current.offsetTop + refNav.current.clientHeight - 17;
      refMenu.current.style.top = calculate + "px";
      refIcon.current.classList.replace("bi-list", "bi-x-lg");
    }
  };
  return (
    <>
      <div className="header-container">
        <NavLink to="/" className="logo">
          <img src={logo} alt="ache1 logo" />
        </NavLink>
        <nav ref={refNav} className="menu">
          <button
            ref={refBtnToggle}
            onClick={handleToggle}
            className="btnToggle"
          >
            <i ref={refIcon} className="bi bi-list fs-1"></i>
          </button>
          <ul className="ul" ref={refMenu}>
            <li className="li">
              <Link
                to="/services"
                className={pivot === 1 ? "btnSelected" : ""}
                onClick={() => {
                  setPivot(1);
                }}
              >
                Services
              </Link>
            </li>
            <li className="li">
              <Link
                to="/about"
                className={pivot === 2 ? "btnSelected" : ""}
                onClick={() => {
                  setPivot(2);
                }}
              >
                About
              </Link>
            </li>
            <li className="li">
              <Link
                to="/cases"
                className={pivot === 3 ? "btnSelected" : ""}
                onClick={() => {
                  setPivot(3);
                }}
              >
                Cases
              </Link>
            </li>
            <li className="li">
              <Link
                to="/contact"
                className={pivot === 4 ? "btnSelected" : ""}
                onClick={() => {
                  setPivot(4);
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Header;
