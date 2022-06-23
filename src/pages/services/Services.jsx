import { Link } from "react-router-dom";
import { useViewport } from "../../context/viewportContext";
import ContainerSection from "../../layout/ContainerSection";
import ContainerHeaderSection from "../../components/ContainerHeaderSection";
import Navbar from "../../components/Navbar";
import CardServices from "../../components/CardServices";
import Icon from "../../components/IconContact";
import LogoHome from "../../components/LogoHome";
import logoWhite from "../../assets/Icons/logo-white.svg";
import CardServicesMobile from "../../components/CardServicesMobile";

const Services = () => {
  const { width } = useViewport();
  const breakpoint = 421;
  return width > breakpoint ? (
    <>
      <ContainerSection>
        <ContainerHeaderSection>
          <LogoHome logo={logoWhite} />
          <Navbar />
        </ContainerHeaderSection>
        <CardServices />
        <Link to="/" className="icon-contact">
          <Icon size={45} color="#6C63FF" fill="#6C63FF" />
        </Link>
      </ContainerSection>
    </>
  ) : (
    <>
      <ContainerSection>
        <ContainerHeaderSection>
          <LogoHome logo={logoWhite} />
          <Navbar />
        </ContainerHeaderSection>
        <CardServicesMobile />
        <Link to="/" className="icon-contact">
          <Icon size={45} color="#6C63FF" fill="#6C63FF" />
        </Link>
      </ContainerSection>
    </>
  );
};
export default Services;