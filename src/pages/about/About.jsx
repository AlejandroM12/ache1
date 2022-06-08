import ContainerSection from "../../layout/ContainerSection";
import Logo from "../../components/Logo";
import logoSection from "../../assets/Icons/logoSection.svg";
import ContainerHeaderSection from "../../components/ContainerHeaderSection";
import Navbar from "../../components/Navbar";
import CardAbout from "../../components/CardAbout";
import ContainerLeftSection from "../../components/ContainerLeftSection";

const About = () => {
  return (
    <>
      <ContainerSection>
        <ContainerHeaderSection>
          <Logo logo={logoSection} />
          <Navbar />
        </ContainerHeaderSection>
        <ContainerLeftSection>
          <CardAbout />
        </ContainerLeftSection>
      </ContainerSection>
    </>
  );
};
export default About;
