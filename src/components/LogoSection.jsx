import { NavLink } from "react-router-dom";

const LogoSection = (props) => {
  return (
    <NavLink
      className={({ isActive }) => {
        return isActive ? "logo" : "logo";
      }}
      to="/"
      onClick={props.onClick}
    >
      <img src={props.logo} alt="ache1 logo" />
      <span className="logo-span">ache1</span>
    </NavLink>
  );
};
export default LogoSection;