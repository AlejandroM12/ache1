import Navbar from "../../components/Navbar";
import ContainerSection from "../../layout/ContainerSection";
import logoSection from "../../assets/Icons/logoSection.svg";
import LogoSection from "../../components/LogoSection";
import Header from "../../layout/Header";
import ContainerLeftSection from "../../components/ContainerLeftSection";
import ContainerRightSection from "../../components/ContainerRightSection";
import ContentLeftAbout from "../../components/ContentLeftAbout";
import ContentRightAbout from "../../components/ContentRightAbout";
const About = ({ pivot, setPivot }) => {
  return (
    <>
      <ContainerSection>
        <div className="background-header-about">
          <Header>
            <LogoSection
              logo={logoSection}
              onClick={() => {
                setPivot(1);
              }}
            ></LogoSection>
            <Navbar pivot={pivot} setPivot={setPivot} />
          </Header>
        </div>
        <ContainerLeftSection>
          <ContentLeftAbout />
        </ContainerLeftSection>
        <ContainerRightSection>
          <ContentRightAbout />
        </ContainerRightSection>
      </ContainerSection>
    </>
  );
};
export default About;
