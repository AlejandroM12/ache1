import logoSection from "../assets/Home/ache1-logo.svg";
import LogoHome from "../components/LogoHome";

const ContainerModal = ({ children }) => {
  return (
    <div
      className="modal-site"
      data-aos="fade-left"
    >
      <div className="modal-background">
        <div className="container-rightside-modal"></div>
        <div className="container-leftside-modal"></div>
      </div>
      <div className="content-container-modal">
        <div className="header-modal">
          <LogoHome logo={logoSection} />
        </div>
        {children}
      </div>
    </div>
  );
};
export default ContainerModal;
