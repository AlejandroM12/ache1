import ContainerSection from "../../layout/ContainerSection";
import Logo from "../../components/Logo";
import logoSection from "../../assets/Icons/logoSection.svg";
import ContainerHeaderSection from "../../components/ContainerHeaderSection";
import Navbar from "../../components/Navbar";

const About = () => {
  return (
    <>
      <ContainerSection>
        <ContainerHeaderSection>
        <Logo logo={logoSection} />
        <Navbar />
        </ContainerHeaderSection>
      </ContainerSection>
    </>
  );
};
export default About;
