import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [pivot, setPivot] = useState(1);
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
      <nav ref={refNav} className="menu">
        <button ref={refBtnToggle} onClick={handleToggle} className="btnToggle">
          <i ref={refIcon} className="bi bi-list fs-1"></i>
        </button>
        <ul className="ul" ref={refMenu}>
          <li className="li">
            <Link
              to="/services"
              className={pivot === 2 ? "btnSelected" : ""}
              onClick={() => {
                setPivot(2);
                console.log(pivot);
              }}
            >
              Services
            </Link>
          </li>
          <li className="li">
            <Link
              to="/about"
              className={pivot === 3 ? "btnSelected" : ""}
              onClick={() => {
                setPivot(3);
                console.log(pivot);
              }}
            >
              About
            </Link>
          </li>
          <li className="li">
            <Link
              to="/contact"
              className={pivot === 4 ? "btnSelected" : ""}
              onClick={() => {
                setPivot(4);
                console.log(pivot);
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
