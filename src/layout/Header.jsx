import ContainerHeader from "../components/ContainerHeader";

const Header = ({ children }) => {
  return (
    <ContainerHeader>
      <div className="header-container">{children}</div>
    </ContainerHeader>
  );
};
export default Header;
