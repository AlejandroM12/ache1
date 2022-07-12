import Navbar from "../../components/Navbar";
import ContainerSection from "../../layout/ContainerSection";
import Header from "../../layout/Header";
import ContainerLeftSection from "../../components/ContainerLeftSection";
import ContainerRightSection from "../../components/ContainerRightSection";
import ContentLeftAbout from "../../components/ContentLeftAbout";
import ContentRightAbout from "../../components/ContentRightAbout";
import LogoHome from "../../components/LogoHome";
import logoWhite from "../../assets/Icons/logo-white.svg";
import Icon from "../../components/IconContact";

const About = ({ pivot, setPivot }) => {
  return (
    <>
      <ContainerSection>
        <div className="background-header-about">
          <Header>
            <LogoHome logo={logoWhite} />
            <Navbar pivot={pivot} setPivot={setPivot} />
          </Header>
        </div>
        <ContainerLeftSection>
          <ContentLeftAbout />
        </ContainerLeftSection>
        <ContainerRightSection>
          <ContentRightAbout />
        </ContainerRightSection>
          <Icon size={45} color="#6C63FF" fill="#6C63FF" />
      </ContainerSection>
    </>
  );
};
export default About;
