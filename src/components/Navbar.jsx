import {  useState } from "react";
import { Link } from "react-router-dom";
import hamburguerIcon from "../assets/Icons/icon-menu.svg";
import closeHamburguerIcon from "../assets/Icons/x.svg";
const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <>
      <nav className="navigation">
        { isNavExpanded === true ? (
          <button className="hamburguer-icon" onClick ={()=>{ 
            setIsNavExpanded(!isNavExpanded)}}><img src={hamburguerIcon} alt="hamburguer icon" /></button>
        ):(
          <button className="hamburguer-icon-close" onClick ={()=>{ 
            setIsNavExpanded(!isNavExpanded)}}><img src={closeHamburguerIcon} alt="hamburguer icon close" /></button>
        )
      }
        
        <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
          <ul>
              <li>
                <Link to="/services" className="link-a">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="link-a">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link-a">
                  Contact
                </Link>
              </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
