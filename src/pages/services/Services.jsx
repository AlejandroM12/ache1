import { Link } from "react-router-dom";
import ContainerSection from "../../layout/ContainerSection";
import logoSection from "../../assets/Icons/logoSection.svg";
import ContainerHeaderSection from "../../components/ContainerHeaderSection";
import Navbar from "../../components/Navbar";
import CardServices from "../../components/CardServices";
import Icon from "../../components/IconContact";
import LogoSection from "../../components/LogoSection";

const Services = () => {
  return (
    <>
      <ContainerSection>
        <ContainerHeaderSection>
          <LogoSection logo={logoSection}></LogoSection>
          <Navbar />
        </ContainerHeaderSection>
        <CardServices />
        <Link to="/" className="icon-contact">
          <Icon size={45} color="#6C63FF" fill="#6C63FF" />
        </Link>
      </ContainerSection>
    </>
  );
};
export default Services;
