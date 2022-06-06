import { Link } from "react-router-dom";
import vector from "../assets/Icons/vector.svg";

const Icon = () =>{
    return (
        <>
                <Link to="/" className="icon-contact">
                    <img src={vector} alt="icon contact"/>
                </Link>
        </>
    )
}
export default Icon;