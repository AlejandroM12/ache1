const ContainerRight = ({ children }) => {
  return (
    <>
      <div className="container rightside background width-right" data-aos="fade-up">
        <div className="content height-right">{children}</div>
      </div>
    </>
  );
};
export default ContainerRight;
