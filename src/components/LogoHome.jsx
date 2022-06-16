import { NavLink } from "react-router-dom";

const LogoHome = (props) =>{
    return (
      <NavLink className={({ isActive }) => {
        return isActive ? "logo" : "logo"
      }} to='/' >
          <img src={props.logo} alt="ache1 logo" />
        </NavLink>
    )
}
export default LogoHome;