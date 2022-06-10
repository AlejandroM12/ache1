import ContainerSection from "../../layout/ContainerSection";
import logoSection from "../../assets/Icons/logoSection.svg";
import ContainerHeaderSection from "../../components/ContainerHeaderSection";
import Navbar from "../../components/Navbar";
import ContainerLeftSection from "../../components/ContainerLeftSection";
import CardServices from "../../components/CardServices";
import ContainerRightSection from "../../components/ContainerRightSection";
import RightContentService from "../../components/RightContentService";
import Icon from "../../components/IconContact";
import { Link } from "react-router-dom";
import LogoSection from "../../components/LogoSection";

const Services = () => {
  return (
    <>
      <ContainerSection>
        <ContainerHeaderSection>
          <LogoSection logo={logoSection}></LogoSection>
          <Navbar />
        </ContainerHeaderSection>
        <ContainerLeftSection>
          <CardServices />
        </ContainerLeftSection>
        <ContainerRightSection>
          <RightContentService />
        </ContainerRightSection>
        <Link to="/" className="icon-contact">
          <Icon size={45} color="#6C63FF" fill="#6C63FF" />
        </Link>
      </ContainerSection>
    </>
  );
};
export default Services;
