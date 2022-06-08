import logoHome from "../assets/Home/ache1-logo.svg";
import ContainerHeader from "../components/ContainerHeader";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

const Header = ({ pivot, setPivot }) => {
  return (
    <ContainerHeader>
      <div className="header-container">
        <Logo
          logo={logoHome}
          onClick={() => {
            setPivot(1);
          }}
        />
        <Navbar pivot={pivot} setPivot={setPivot} />
      </div>
    </ContainerHeader>
  );
};
export default Header;
