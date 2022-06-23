import nodeLogo from "../../assets/Modal/node.svg";
import reactLogo from "../../assets/Modal/react.svg";
import netLogo from "../../assets/Modal/net.svg";
import ContainerLeftModal from "../ContainerLeftModal";
import ContainerRightModal from "../ContainerRightModal";
import ContainerModal from "../../layout/ContainerModal";
import UseLottieAnimation from "../../components/useLottieAnimation";
import animationAppMobile from "../../assets/lotties/apps-mobile.json";

const ModalApp = ({ isOpen, closeModal }) => {
  return (
    <>
      <ContainerModal>
        <div className={`modal${isOpen && "is-open"}`}></div>
        <ContainerLeftModal>
          <div className="container-description-modal-app-mobile">
            <div className="lottie-modal-app-mobile">
              <UseLottieAnimation
                animationData={animationAppMobile}
                autoplay={true}
                loop={true}
              />
            </div>
            <h3 className="modal-app-title-left">Apps mobile</h3>
            <p className="modal-app-description-left">
              We are ready to create your app{" "}
              <span>in any language you want.</span> Respecting the latest
              trends in technologies.
            </p>
          </div>
        </ContainerLeftModal>
        <ContainerRightModal>
          <h3 className="modal-title-app-right">
            We believe in this languages
          </h3>
          <div className="container-modal-app-img">
            <img src={nodeLogo} className="app-modal-img" alt="nodejs" />
            <img src={reactLogo} className="app-modal-img" alt="reactjs" />
            <img src={netLogo} className="app-modal-img" alt=".net" />
          </div>
          <button className="close-modal" onClick={closeModal}>
            X
          </button>
        </ContainerRightModal>
      </ContainerModal>
    </>
  );
};
export default ModalApp;