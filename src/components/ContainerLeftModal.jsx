const ContainerLeftModal = ({children}) => {
  return (
    <>
      <div className="container-leftside-modal">
        <div className="content-modal-lefstside">
            {children}
        </div>
      </div>
    </>
  );
};
export default ContainerLeftModal;
