import { Link } from "react-router-dom";
import { useState } from "react";
import { useModal } from "../hooks/useModal";
import Button from "../components/Button";
import dotsWhite from "../assets/Icons/dots-white.svg";
import UseLottieAnimation from "../components/useLottieAnimation";
import uxFullAnimation from "../assets/lotties/modal-ux.json";
import webAppsFullAnimation from "../assets/lotties/web-apps-full.json";
import brandingFullAnimation from "../assets/lotties/branding-full.json";
import socialMediaFullAnimation from "../assets/lotties/social-media-full.json";
import marketingFullAnimation from "../assets/lotties/marketing-full.json";
import appMobileFullAnimation from "../assets/lotties/apps-mobile.json";
import ModalApp from "../components/ModalsComponents/ModalApp";
import ModalUx from "../components/ModalsComponents/ModalUx";

const ContainerMobileHome = () => {
  const [btnState, setBtnState] = useState(1);
  const [isOpenModalApp, openModalApp, closeModalApp] = useModal(false);
  const [isOpenModalUX, openModalUx, closeModalUx] = useModal(false);
  return (
    <>
      <div className="container-mobile">
        <div className="dots-mobile">
          <div className="dots-icon-mobile">
            <img
              src={dotsWhite}
              alt=""
              className={btnState === 1 ? "active-dots-mobile" : ""}
              onClick={() => {
                setBtnState(1);
              }}
            />
          </div>
          <div className="dots-icon-mobile">
            <img
              src={dotsWhite}
              alt=""
              className={btnState === 2 ? "active-dots-mobile" : ""}
              onClick={() => {
                setBtnState(2);
              }}
            />
          </div>
          <div className="dots-icon-mobile">
            <img
              src={dotsWhite}
              alt=""
              className={btnState === 3 ? "active-dots-mobile" : ""}
              onClick={() => {
                setBtnState(3);
              }}
            />
          </div>
          <div className="dots-icon-mobile">
            <img
              src={dotsWhite}
              alt=""
              className={btnState === 4 ? "active-dots-mobile" : ""}
              onClick={() => {
                setBtnState(4);
              }}
            />
          </div>
          <div className="dots-icon-mobile">
            <img
              src={dotsWhite}
              alt=""
              className={btnState === 5 ? "active-dots-mobile" : ""}
              onClick={() => {
                setBtnState(5);
              }}
            />
          </div>
          <div className="dots-icon-mobile">
            <img
              src={dotsWhite}
              alt=""
              className={btnState === 6 ? "active-dots-mobile" : ""}
              onClick={() => {
                setBtnState(6);
              }}
            />
          </div>
        </div>
        <div className="container-mobile-up">
          {btnState === 1 && (
            <div className="content-card-mobile" data-aos="fade-up">
              <h1 className="card-title-mobile">Ux</h1>
              <p className="card-description-mobile">
                We carry out a survey of the market and the competition. We plan
                and design the correct flow for your website to be successful.
              </p>
              <Button buttonLabel="How we work?" onClick={openModalUx} />
            </div>
          )}
          {btnState === 2 && (
            <div className="content-card-mobile" data-aos="fade-up">
              <h1 className="card-title-mobile">Web apps</h1>
              <p className="card-description-mobile">
                You need to organize your business, nothing better than having
                your own online system that your entire team can access.
              </p>
              <Link to="/">
                <Button buttonLabel="Biggest systems" />
              </Link>
            </div>
          )}
          {btnState === 3 && (
            <div className="content-card-mobile" data-aos="fade-up">
              <h1 className="card-title-mobile">Apps mobile</h1>
              <p className="card-description-mobile">
                It makes your app unique. From usability analysis to testing to
                launch your MVP.
              </p>
              <Button buttonLabel="Our tecnologies" onClick={openModalApp} />
            </div>
          )}
          {btnState === 4 && (
            <div className="content-card-mobile" data-aos="fade-up">
              <h1 className="card-title-mobile">Branding</h1>
              <p className="card-description-mobile">
                Design your brand identity from scratch. Create a unique
                language that identifies you in the market.
              </p>
              <Link to="/">
                <Button buttonLabel="I want start" />
              </Link>
            </div>
          )}
          {btnState === 5 && (
            <div className="content-card-mobile" data-aos="fade-up">
              <h1 className="card-title-mobile">Social media</h1>
              <p className="card-description-mobile">
                We perform a competitive analysis to create your brand strategy
                on social networks. Guidelines for communication, promotion and
                user monitoring.
              </p>
              <Link to="/">
                <Button buttonLabel="Your brand UP!" />
              </Link>
            </div>
          )}
          {btnState === 6 && (
            <div className="content-card-mobile" data-aos="fade-up">
              <h1 className="card-title-mobile">Marketing</h1>
              <p className="card-description-mobile">
                Use our services and build a solid digital presence across
                digital marketing, creative web design, quality content, SEO,
                and media campaigns.
              </p>
              <Link to="/">
                <Button buttonLabel="Grow up now" />
              </Link>
            </div>
          )}
        </div>
        <div className="container-mobile-down">
          {btnState === 1 && (
            <div className="content-lottie-ux-mobile">
              <UseLottieAnimation
                animationData={uxFullAnimation}
                autoplay={true}
                loop={true}
              />
            </div>
          )}
          {btnState === 2 && (
            <div className="content-lottie-webApps-mobile">
              <UseLottieAnimation
                animationData={webAppsFullAnimation}
                autoplay={true}
                loop={true}
              />
            </div>
          )}
          {btnState === 3 && (
            <div className="content-lottie-app-mobile">
              <UseLottieAnimation
                animationData={appMobileFullAnimation}
                autoplay={true}
                loop={true}
              />
            </div>
          )}
          {btnState === 4 && (
            <div className="content-lottie-branding-mobile">
              <UseLottieAnimation
                animationData={brandingFullAnimation}
                autoplay={true}
                loop={true}
              />
            </div>
          )}
          {btnState === 5 && (
            <div className="content-lottie-socialMedia-mobile">
              <UseLottieAnimation
                animationData={socialMediaFullAnimation}
                autoplay={true}
                loop={true}
              />
            </div>
          )}
          {btnState === 6 && (
            <div className="content-lottie-marketing-mobile">
              <UseLottieAnimation
                animationData={marketingFullAnimation}
                autoplay={true}
                loop={true}
              />
            </div>
          )}
        </div>
      </div>
      {isOpenModalApp && (
        <ModalApp isOpen={isOpenModalApp} closeModal={closeModalApp} />
      )}
      {isOpenModalUX && (
        <ModalUx isOpen={isOpenModalUX} closeModal={closeModalUx} />
      )}
    </>
  );
};
export default ContainerMobileHome;