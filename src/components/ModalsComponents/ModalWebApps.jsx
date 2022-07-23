import ContainerModal from "../../layout/ContainerModal";
import ContainerLeftModal from "../ContainerLeftModal";
import ContainerRightModal from "../ContainerRightModal";
import Button from "../Button";
import UseLottieAnimation from "../../components/useLottieAnimation";
import animationWebApps from "../../assets/lotties/web-apps-full.json";
import nodeLogo from "../../assets/Modal/node.svg";
import reactLogo from "../../assets/Modal/react.svg";
import netLogo from "../../assets/Modal/net.svg";
import angularLogo from "../../assets/Modal/angular.svg";
import springLogo from "../../assets/Modal/spring.svg";
import MailTo from "../MailTo";

const ModalWebApps = ({ isOpen, closeModal }) => {
  return (
    <>
      <ContainerModal>
        <div className={`modal${isOpen && "is-open"}`}></div>
        <ContainerLeftModal>
          <div className="container-description-modal-web-apps">
            <div className="lottie-modal-web-apps">
              <UseLottieAnimation
                animationData={animationWebApps}
                autoplay={true}
                loop={true}
              />
            </div>
            <h3 className="modal-web-app-title-left">Web Apps</h3>
            <p className="modal-web-app-description-left">
              Every business needs its system, a system that adapts to its
              needs. That is why it is so important to create your web app from
              scratch, taking into account the starting point that will cover
              your immediate needs.
            </p>
            <p className="modal-web-app-description-left">
              <span>
                With your own web app you can optimize your company's processes
                and increase their performance.
              </span>
            </p>
            <MailTo email="hi@ache1.com" subject="Web App Project">
              <Button buttonLabel="Shall we start?" />
            </MailTo>
          </div>
        </ContainerLeftModal>
        <ContainerRightModal>
          <h3 className="modal-web-app-title-right">
            We believe in this languages
          </h3>
          <div className="container-modal-web-app-img-first">
            <div className="modal-web-app-node-logo">
              <img
                src={nodeLogo}
                className="web-app-modal-node-img"
                alt="nodejs"
              />
              <p>Node JS</p>
            </div>
            <div className="modal-web-app-react-native-logo">
              <img
                src={reactLogo}
                className="web-app-modal-react-native-img"
                alt="reactjs"
              />
              <p>React Native</p>
            </div>
            <div className="modal-web-app-net-logo">
              <img src={netLogo} className="web-app-modal-net-img" alt=".net" />
              <p>.NET</p>
            </div>
          </div>
          <div className="container-modal-web-app-img-two">
            <div className="modal-web-app-angular-logo">
              <img
                src={angularLogo}
                className="web-app-modal-angular-img"
                alt="angular"
              />
              <p>Angular</p>
            </div>
            <div className="modal-web-app-spring-logo">
              <img
                src={springLogo}
                className="web-app-modal-spring-img"
                alt="spring"
              />
              <p>Spring</p>
            </div>
          </div>
          <button className="close-modal" onClick={closeModal}>
            X
          </button>
        </ContainerRightModal>
      </ContainerModal>
    </>
  );
};
export default ModalWebApps;
