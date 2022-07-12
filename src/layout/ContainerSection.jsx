const ContainerSection = ({ children }) => {
  return (
    <>
      <div className="site-section">
          <div className="container-section leftside-section"></div>
          <div className="container-section rightside-section"></div>
        <div className="content_container-section">{children}</div>
      </div>
    </>
  );
};
export default ContainerSection;
