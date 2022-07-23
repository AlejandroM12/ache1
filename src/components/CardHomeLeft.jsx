import { useState } from "react";
import { useModal } from "../hooks/useModal";
import ContainerLeft from "./ContainerLeft";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Button from "./Button";
import dots from "../assets/Icons/dots.svg";
import ModalApp from "./ModalsComponents/ModalApp";
import ModalWebApps from "./ModalsComponents/ModalWebApps";
import UseLottieAnimation from "../components/useLottieAnimation";
import webAppsAnimation from "../assets/lotties/web-apps.json";
import appsMobileAnimation from "../assets/lotties/apps-mobile-home.json";
import bestWebsitesAnimation from "../assets/lotties/best-websites.json";
import MailTo from "./MailTo";

const CardHomeLeft = () => {
  const [btnState, setBtnState] = useState(1);
  const [isOpenModalApp, openModalApp, closeModalApp] = useModal(false);
  const [isOpenModalWebApp, openModalWebApp, closeModalWebApp] =
    useModal(false);

  const upHandler = () => {
    if (btnState >= 1) {
      setBtnState(btnState + 1);
      if (btnState === 3) {
        setBtnState(1);
      }
    }
  };
  const downHandler = () => {
    if (btnState >= 1) {
      setBtnState(btnState - 1);
      if (btnState === 1) {
        setBtnState(3);
      }
    }
  };
  return (
    <ContainerLeft>
      <div className="dots-left">
        <div className="dots-icon-left">
          <img
            src={dots}
            alt="button icon"
            className={btnState === 1 ? "active-left" : ""}
            onClick={() => {
              setBtnState(1);
            }}
          />
        </div>
        <div className="dots-icon-left">
          <img
            src={dots}
            alt="button icon"
            className={btnState === 2 ? "active-left" : ""}
            onClick={() => {
              setBtnState(2);
            }}
          />
        </div>
        <div className="dots-icon-left">
          <img
            src={dots}
            alt="button icon"
            className={btnState === 3 ? "active-left" : ""}
            onClick={() => {
              setBtnState(3);
            }}
          />
        </div>
        <div className="dots-icon-left">
          <img
            src={dots}
            alt="button icon"
            className={btnState === 4 ? "active-left" : ""}
            onClick={() => {
              setBtnState(4);
            }}
          />
        </div>
      </div>
      <ReactScrollWheelHandler
        upHandler={() => downHandler()}
        downHandler={() => upHandler()}
      >
        {btnState === 1 && (
          <div
            className="content-card-left content-web-apps"
            data-aos="fade-up"
          >
            <div className="content-lottie-webApps">
              <UseLottieAnimation
                animationData={webAppsAnimation}
                autoplay={true}
                loop={true}
              />
            </div>
            <h1 className="card-title-left">Web apps</h1>
            <p className="card-description-left">
              You need to organize your business; nothing better than having
              your own online system, in which your entire team has access.
            </p>
            <Button buttonLabel="Biggest systems" onClick={openModalWebApp} />
          </div>
        )}

        {btnState === 2 && (
          <div
            className="content-card-left content-apps-mobile"
            data-aos="fade-up"
          >
            <h1 className="card-title-left">Apps mobile</h1>
            <p className="card-description-left">
              It makes your app unique. From usability analysis to testing to
              launch your MVP.
            </p>
            <Button buttonLabel="Our tecnologies" onClick={openModalApp} />
            <div className="content-lottie-apps-mobile">
              <UseLottieAnimation
                animationData={appsMobileAnimation}
                autoplay={true}
                loop={true}
              />
            </div>
          </div>
        )}
        {btnState === 3 && (
          <div
            className="content-card-left content-best-websites-mobile"
            data-aos="fade-up"
          >
            <div className="content-lottie-web-sites-mobile">
              <UseLottieAnimation
                animationData={bestWebsitesAnimation}
                autoplay={true}
                loop={true}
              />
            </div>
            <h1 className="card-title-left">Best Websites</h1>
            <p className="card-description-left ">
              Is your website still not responsive? Today 80% of accesses to
              your website are through mobile devices. To make your website
              accessible to any user, it must be adaptable to all devices.
            </p>
            <MailTo email="hi@ache1.com" subject="New Website">
              <Button buttonLabel="I want to start" />
            </MailTo>
          </div>
        )}
      </ReactScrollWheelHandler>
      {isOpenModalApp && (
        <ModalApp isOpen={isOpenModalApp} closeModal={closeModalApp} />
      )}
      {isOpenModalWebApp && (
        <ModalWebApps
          isOpen={isOpenModalWebApp}
          closeModal={closeModalWebApp}
        />
      )}
    </ContainerLeft>
  );
};

export default CardHomeLeft;
