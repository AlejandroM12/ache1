import { Link } from "react-router-dom";

const CardAbout = () =>{
    return (
        <>
            <div className="card-about-container">
                <h3 className="card-about-title">Creativity & organization</h3>
                <li className="card-about-list">
                    <Link to="/">
                        Ux/Ui
                    </Link>
                </li>
                <li className="card-about-list">
                    <Link to="/">
                        Web Apps
                    </Link>
                </li>
                <li className="card-about-list">
                    <Link to="/">
                        Apps Mobile
                    </Link>
                </li>
                <li className="card-about-list">
                    <Link to="/">
                        Best Websites
                    </Link>
                </li>
                <li className="card-about-list">
                    <Link to="/">
                        Branding
                    </Link>
                </li>
                <li className="card-about-list">
                    <Link to="/">
                        Social Media
                    </Link>
                </li>
                <li className="card-about-list">
                    <Link to="/">
                        Marketing strategy
                    </Link>
                </li>
                <li className="card-about-list">
                    <Link to="/">
                        Editorial
                    </Link>
                </li>
            </div>
        </>
    )
}
export default CardAbout;