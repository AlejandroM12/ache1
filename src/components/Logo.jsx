import { Link } from "react-router-dom";


const Logo = (props) =>{
    return (
        <Link to="/" className="logo">
          <img src={props.logo} alt="ache1 logo" />
          <span className="logo-span">ache1</span>
        </Link>
          
    )
}
export default Logo;