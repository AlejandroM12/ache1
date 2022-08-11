import ContainerLeftModal from "../ContainerLeftModal";
import ContainerRightModal from "../ContainerRightModal";
import ContainerModal from "../../layout/ContainerModal";
import UseLottieAnimation from "../../components/useLottieAnimation";
import animationAppMobile from "../../assets/lotties/apps-mobile.json";
import nodeLogo from "../../assets/Modal/node.svg";
import reactLogo from "../../assets/Modal/react.svg";
import netLogo from "../../assets/Modal/net.svg";
import iosLogo from "../../assets/Modal/ios.svg";
import androidLogo from "../../assets/Modal/android.svg";
import awsLogo from "../../assets/Modal/aws.svg";
import firebaseLogo from "../../assets/Modal/firebase.svg";
import Button from "../Button";
import MailTo from "../MailTo";

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
            <p className="modal-app-description-left">
              We focus on building{" "}
              <span>high-quality, high-performance custom solutions.</span> We
              create your custom app from design, strategy to its correct
              development.
            </p>
            <MailTo email="hi@ache1.com" subject="New App Project">
              <Button buttonLabel="I want to start" />
            </MailTo>
          </div>
        </ContainerLeftModal>
        <ContainerRightModal>
          <h3 className="modal-title-app-right">
            We believe in this languages
          </h3>
          <div className="container-modal-app-img-first">
            <div className="modal-node-logo">
              <img src={nodeLogo} className="app-modal-node-img" alt="nodejs" />
              <p>Node JS</p>
            </div>
            <div className="modal-react-native-logo">
              <img
                src={reactLogo}
                className="app-modal-react-native-img"
                alt="reactjs"
              />
              <p>React Native</p>
            </div>
            <div className="modal-net-logo">
              <img src={netLogo} className="app-modal-net-img" alt=".net" />
              <p>.NET</p>
            </div>
          </div>
          <div className="container-modal-app-img-two">
            <div className="content-modal-app-ios">
              <img src={iosLogo} className="app-modal-img" alt="ios" />
              <p>iOS</p>
            </div>
            <div className="content-modal-app-android">
              <img src={androidLogo} className="app-modal-img" alt="android" />
              <p>Android</p>
            </div>
            <div className="content-modal-app-aws">
              <img src={awsLogo} className="app-modal-img" alt="aws" />
              <p>Amazon</p>
            </div>
            <div className="content-modal-app-firebase">
              <img
                src={firebaseLogo}
                className="app-modal-img"
                alt="firebase"
              />
              <p>Firebase</p>
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
export default ModalApp;