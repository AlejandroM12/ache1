import { Link } from "react-router-dom";

const LogoHome = (props) =>{
    return (
        <Link to="/" className="logo">
          <img src={props.logo} alt="ache1 logo" />
        </Link>
    )
}
export default LogoHome;