const ContainerRight = ({ children }) => {
  return (
    <>
      <div className="container rightside background width-right">
        <div className="content height-right">{children}</div>
      </div>
    </>
  );
};
export default ContainerRight;
