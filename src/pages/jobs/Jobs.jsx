import { useViewport } from "../../context/viewportContext";
import ContainerSection from "../../layout/ContainerSection";
import ContainerHeaderSection from "../../components/ContainerHeaderSection";
import LogoHome from "../../components/LogoHome";
import logoWhite from "../../assets/Icons/logo-white.svg";
import Navbar from "../../components/Navbar";
import Icon from "../../components/IconContact";
import ContainerLeftSection from "../../components/ContainerLeftSection";
import CardJobs from "../../components/CardJobs";
import ContainerRightSection from "../../components/ContainerRightSection";
import RightContentJobs from "../../components/RightContentJobs";
const Jobs = () => {
  return  (
    <>
      <ContainerSection>
        <ContainerHeaderSection>
          <LogoHome logo={logoWhite} />
          <Navbar />
        </ContainerHeaderSection>
        <Icon size={45} color="#6C63FF" fill="#6C63FF" />

        <ContainerLeftSection>
          <CardJobs />
        </ContainerLeftSection>
        <ContainerRightSection>
            <RightContentJobs />
        </ContainerRightSection>
      </ContainerSection>
    </>
  )
};
export default Jobs;
