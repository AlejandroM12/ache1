import nodeLogo from "../../assets/Modal/node.svg";
import reactLogo from "../../assets/Modal/react.svg";
import netLogo from "../../assets/Modal/net.svg";
import ContainerLeftModal from "../ContainerLeftModal";
import ContainerRightModal from "../ContainerRightModal";
import ContainerModal from "../../layout/ContainerModal";
const ModalApp = ({isOpen, closeModal}) => {
  return (
    <>
    <ContainerModal >
      <div className={`modal${isOpen && "is-open"}`} ></div>
      <ContainerLeftModal>
        <div className="lottie-modal-app"></div>
        <h3 className="modal-app-title-left">Apps mobile</h3>
        <p className="modal-app-description-left">
          We are ready to create your app <span>in any language you want.</span>{" "}
          Respecting the latest trends in technologies.
        </p>
      </ContainerLeftModal>
      <ContainerRightModal>
        <h3 className="modal-title-app-right">We believe in this languages</h3>
        <div className="modal-app-img">
          <img src={nodeLogo} alt="" />
          <img src={reactLogo} alt="" />
          <img src={netLogo} alt="" />
        </div>
        <button className="close-modal" onClick={closeModal}>X</button>
      </ContainerRightModal>
      </ContainerModal>
    </>
  );
};
export default ModalApp;
