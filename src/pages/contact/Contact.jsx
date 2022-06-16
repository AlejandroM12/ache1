import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import ContainerSection from "../../layout/ContainerSection";
import ContainerHeaderSection from "../../components/ContainerHeaderSection";
import Navbar from "../../components/Navbar";
import ContainerLeftSection from "../../components/ContainerLeftSection";
import ContainerRightSection from "../../components/ContainerRightSection";
import Icon from "../../components/IconContact";
import Form from "../../components/Form";
import animationCoffe from "../../assets/lotties/coffee-contact.json";
import logoWhite from "../../assets/Icons/logo-white.svg";
import LogoHome from "../../components/LogoHome";

const Contact = () => {
  return (
    <ContainerSection>
      <ContainerHeaderSection>
      <LogoHome logo={logoWhite}/>
        <Navbar />
      </ContainerHeaderSection>
      <Link to="/" className="icon-contact">
        <Icon size={45} color="#6C63FF" fill="#6C63FF" />
      </Link>
      <ContainerLeftSection>
        <Form />
      </ContainerLeftSection>
      <ContainerRightSection>
        <div className="contact-content-right">
            <h3 className="contact-title-right">Les´t work <br /> together</h3>
            <div className="contact-lottie-right">
                <Lottie animationData={animationCoffe}/>
            </div>
            <p className="contact-description-right">Tell us more about your project. 
            </p>
            <p className="contact-description-right"><span>Let's drink a coffee.</span></p>
        </div>
      </ContainerRightSection>
    </ContainerSection>
  );
};
export default Contact;
