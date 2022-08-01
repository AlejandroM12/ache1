import { useViewport } from "../../context/viewportContext";
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
import FormMobile from "../../components/FormMobile";
import linkedinIcon from "../../assets/Icons/linkedin-blue.svg";
import instagramIcon from "../../assets/Icons/instagram-blue.svg";

const Contact = () => {
  const { width } = useViewport();
  const breakpoint = 421;
  return width > breakpoint ? (
    <ContainerSection>
      <ContainerHeaderSection>
        <LogoHome logo={logoWhite} />
        <Navbar />
      </ContainerHeaderSection>
      <Icon size={45} color="#6C63FF" fill="#6C63FF" />
      <ContainerLeftSection>
        <Form />
      </ContainerLeftSection>
      <ContainerRightSection>
        <div className="contact-content-right">
          <h3 className="contact-title-right">
            Let´s work <br /> together
          </h3>
          <div className="contact-lottie-right">
            <Lottie animationData={animationCoffe} />
          </div>
          <p className="contact-description-right">
            Tell us more about your project.
          </p>
          <p className="contact-description-right">
            <span>Let's have some coffee.</span>
          </p>
        </div>
      </ContainerRightSection>
    </ContainerSection>
  ) : (
    <ContainerSection>
      <ContainerHeaderSection>
        <LogoHome logo={logoWhite} />
        <Navbar />
      </ContainerHeaderSection>
      <Icon size={45} color="#6C63FF" fill="#6C63FF" />
      <FormMobile />
      <div className="social-media-container-mobile-contact">
        <li>
          <a
            href="https://www.linkedin.com/in/ache-uno-design-16988a205/"
            className="social-media-mobile-contact"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/ache1.design/"
            className="social-media-mobile-contact"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramIcon} alt="instagram icon" />
          </a>
        </li>
      </div>
    </ContainerSection>
  );
};
export default Contact;
