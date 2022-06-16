import { Link } from "react-router-dom";
import { useState } from "react";
import { useModal } from "../hooks/useModal";
import ContainerLeft from "./ContainerLeft";
import Button from "./Button";
import dots from "../assets/Icons/dots.svg";
import ModalApp from "./ModalsComponents/ModalApp";
import ModalUx from "./ModalsComponents/ModalUx";
import UseLottieAnimation from "../components/useLottieAnimation";
import animationUX from "../assets/lotties/ux.json";
import webAppsAnimation from "../assets/lotties/web-apps.json";

const CardHomeLeft = () => {
  const [btnState, setBtnState] = useState(1);
  const [isOpenModalApp, openModalApp, closeModalApp] = useModal(false);
  const [isOpenModalUX, openModalUx, closeModalUx] = useModal(false);
  return (
    <>
      <ContainerLeft>
        <div className="dots-left">
          <div className="dots-icon-left">
            <img
              src={dots}
              alt=""
              className={btnState === 1 ? "active-left" : ""}
              onClick={() => {
                setBtnState(1);
              }}
            />
          </div>
          <div className="dots-icon-left">
            <img
              src={dots}
              alt=""
              className={btnState === 2 ? "active-left" : ""}
              onClick={() => {
                setBtnState(2);
              }}
            />
          </div>
          <div className="dots-icon-left">
            <img
              src={dots}
              alt=""
              className={btnState === 3 ? "active-left" : ""}
              onClick={() => {
                setBtnState(3);
              }}
            />
          </div>
          <div className="dots-icon-left">
            <img
              src={dots}
              alt=""
              className={btnState === 4 ? "active-left" : ""}
              onClick={() => {
                setBtnState(4);
              }}
            />
          </div>
        </div>
        {btnState === 1 && (
          <div className="content-card-left" data-aos="fade-up">
            <div className="content-lottie-ux">
              <UseLottieAnimation
                animationData={animationUX}
                autoplay={true}
                loop={true}
              />
            </div>
            <h1 className="card-title-left">Ux</h1>
            <p className="card-description-left">
              We carry out a survey of the market and the competition. We plan
              and design the correct flow for your website to be successful.
            </p>
            <Button buttonLabel="How we work?" onClick={openModalUx} />
          </div>
        )}
        {btnState === 2 && (
          <div className="content-card-left webApps" data-aos="fade-up">
            <div className="content-lottie-webApps">
              <UseLottieAnimation
                animationData={webAppsAnimation}
                autoplay={true}
                loop={true}
                width={200}
                height={200}
              />
            </div>
            <h1 className="card-title-left">Web apps</h1>
            <p className="card-description-left">
              You need to organize your business, nothing better than having
              your own online system that your entire team can access.
            </p>
            <img src="" alt="" />
            <Link to="/">
              <Button buttonLabel="Biggest systems" />
            </Link>
          </div>
        )}
        {btnState === 3 && (
          <div className="content-card-left appsMobile" data-aos="fade-up">
            <h1 className="card-title-left">Apps mobile</h1>
            <p className="card-description-left">
              It makes your app unique. From usability analysis to testing to
              launch your MVP.
            </p>
            <img src="" alt="" />
            <Button buttonLabel="Our tecnologies" onClick={openModalApp} />
          </div>
        )}
        {btnState === 4 && (
          <div className="content-card-left bestWebs" data-aos="fade-up">
            <h1 className="card-title-left">Best webs</h1>
            <p className="card-description-left">
              The culture of mobile first. Having a responsive website is not
              only important, it is essential. Today users access 80% of the web
              on their mobile phone. Do not stay behind, renew yourself!
            </p>
            <img src="" alt="" />
            <Link to="/">
              <Button buttonLabel="We can do it!" />
            </Link>
          </div>
        )}
      </ContainerLeft>
      {isOpenModalApp && (
        <ModalApp isOpen={isOpenModalApp} closeModal={closeModalApp} />
      )}
      {isOpenModalUX && (
        <ModalUx isOpen={isOpenModalUX} closeModal={closeModalUx} />
      )}
    </>
  );
};

export default CardHomeLeft;
