import { Link } from "react-router-dom";

const CardServices = () =>{
    return (
        <>
            <div className="card-service-container">
                <h3 className="card-service-title">Creativity & organization</h3>
                <li className="card-service-list">
                    <Link to="/">
                        Ux/Ui
                    </Link>
                </li>
                <li className="card-service-list">
                    <Link to="/">
                        Web Apps
                    </Link>
                </li>
                <li className="card-service-list">
                    <Link to="/">
                        Apps Mobile
                    </Link>
                </li>
                <li className="card-service-list">
                    <Link to="/">
                        Best Websites
                    </Link>
                </li>
                <li className="card-service-list">
                    <Link to="/">
                        Branding
                    </Link>
                </li>
                <li className="card-service-list">
                    <Link to="/">
                        Social Media
                    </Link>
                </li>
                <li className="card-service-list">
                    <Link to="/">
                        Marketing strategy
                    </Link>
                </li>
                <li className="card-service-list">
                    <Link to="/">
                        Editorial
                    </Link>
                </li>
            </div>
        </>
    )
}
export default CardServices;