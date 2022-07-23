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
import bestWebsitesAnimation from "../assets/lotties/best-websites.json";
import ModalApp from "../components/ModalsComponents/ModalApp";
import ModalUx from "../components/ModalsComponents/ModalUx";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

const ContainerMobileHome = () => {
  const [btnState, setBtnState] = useState(1);
  const [isOpenModalApp, openModalApp, closeModalApp] = useModal(false);
  const [isOpenModalUX, openModalUx, closeModalUx] = useModal(false);
  const upHandler = () => {
    if (btnState >= 1) {
      setBtnState(btnState + 1);
      if (btnState === 7) {
        setBtnState(1);
      }
    }
  };
  const downHandler = () => {
    if (btnState >= 1) {
      setBtnState(btnState - 1);
      if (btnState === 1) {
        setBtnState(7);
      }
    }
  };
  return (
    <>
      <div className="container-mobile">
        <div className="dots-mobile">
          <div className="dots-icon-mobile">
            <img
              src={dotsWhite}
              alt="button icon"
              className={btnState === 1 ? "active-dots-mobile" : ""}
              onClick={() => {
                setBtnState(1);
              }}
            />
          </div>
          <div className="dots-icon-mobile">
            <img
              src={dotsWhite}
              alt="button icon"
              className={btnState === 2 ? "active-dots-mobile" : ""}
              onClick={() => {
                setBtnState(2);
              }}
            />
          </div>
          <div className="dots-icon-mobile">
            <img
              src={dotsWhite}
              alt="button icon"
              className={btnState === 3 ? "active-dots-mobile" : ""}
              onClick={() => {
                setBtnState(3);
              }}
            />
          </div>
          <div className="dots-icon-mobile">
            <img
              src={dotsWhite}
              alt="button icon"
              className={btnState === 4 ? "active-dots-mobile" : ""}
              onClick={() => {
                setBtnState(4);
              }}
            />
          </div>
          <div className="dots-icon-mobile">
            <img
              src={dotsWhite}
              alt="button icon"
              className={btnState === 5 ? "active-dots-mobile" : ""}
              onClick={() => {
                setBtnState(5);
              }}
            />
          </div>
          <div className="dots-icon-mobile">
            <img
              src={dotsWhite}
              alt="button icon"
              className={btnState === 6 ? "active-dots-mobile" : ""}
              onClick={() => {
                setBtnState(6);
              }}
            />
          </div>
          <div className="dots-icon-mobile">
            <img
              src={dotsWhite}
              alt="button icon"
              className={btnState === 7 ? "active-dots-mobile" : ""}
              onClick={() => {
                setBtnState(7);
              }}
            />
          </div>
        </div>

        <div className="container-mobile-up">
          <ReactScrollWheelHandler
            upHandler={() => downHandler()}
            downHandler={() => upHandler()}
          >
            {btnState === 1 && (
              <div className="content-card-mobile" data-aos="fade-up">
                <h1 className="card-title-mobile">Web apps</h1>
                <p className="card-description-mobile">
                  You need to organize your business, nothing better than having
                  your own online system that your entire team can access.
                </p>
                  <Button buttonLabel="Biggest systems" />
              </div>
            )}
            {btnState === 2 && (
              <div className="content-card-mobile" data-aos="fade-up">
                <h1 className="card-title-mobile">Apps mobile</h1>
                <p className="card-description-mobile">
                  It makes your app unique. From usability analysis to testing
                  to launch your MVP.
                </p>
                <Button buttonLabel="Our tecnologies" onClick={openModalApp} />
              </div>
            )}
            {btnState === 3 && (
              <div className="content-card-mobile" data-aos="fade-up">
                <h1 className="card-title-mobile">Best Websites</h1>
                <p className="card-description-mobile">
                Is your website still not responsive? Today 80% of accesses to your website are through mobile devices. For your website to be accessible to any user, it must be adaptable to all devices.
                </p>
                <Button buttonLabel="I want to start" />
              </div>
            )}
            {btnState === 4 && (
              <div className="content-card-mobile" data-aos="fade-up">
                <h1 className="card-title-mobile">Ux</h1>
                <p className="card-description-mobile">
                  We carry out a survey of the market and the competition. We
                  plan and design the correct flow for your website to be
                  successful.
                </p>
                <Button buttonLabel="How do we work?" onClick={openModalUx} />
              </div>
            )}
            {btnState === 5 && (
              <div className="content-card-mobile" data-aos="fade-up">
                <h1 className="card-title-mobile">Branding</h1>
                <p className="card-description-mobile">
                  Design your brand identity from scratch. Create a unique
                  language that identifies you in the market.
                </p>
                  <Button buttonLabel="I want to start" />
              </div>
            )}
            {btnState === 6 && (
              <div className="content-card-mobile" data-aos="fade-up">
                <h1 className="card-title-mobile">Social media</h1>
                <p className="card-description-mobile">
                  We perform a competitive analysis to create your brand
                  strategy on social networks. Guidelines for communication,
                  promotion and user monitoring.
                </p>
                  <Button buttonLabel="Put your brand up!" />
              </div>
            )}
            {btnState === 7 && (
              <div className="content-card-mobile" data-aos="fade-up">
                <h1 className="card-title-mobile">Marketing</h1>
                <p className="card-description-mobile">
                  Use our services and build a solid digital presence across
                  digital marketing, creative web design, quality content, SEO,
                  and media campaigns.
                </p>
                <Button buttonLabel="Grow up now" />
              </div>
            )}
          </ReactScrollWheelHandler>
        </div>
        <div className="container-mobile-down">
          {btnState === 1 && (
            <div className="content-lottie-webApps-mobile">
              <UseLottieAnimation
                animationData={webAppsFullAnimation}
                autoplay={true}
                loop={true}
              />
            </div>
          )}
          {btnState === 2 && (
            <div className="content-lottie-app-mobile">
              <UseLottieAnimation
                animationData={appMobileFullAnimation}
                autoplay={true}
                loop={true}
              />
            </div>
          )}
          {btnState === 3 && (
            <div className="content-lottie-best-websites">
              <UseLottieAnimation
                animationData={bestWebsitesAnimation}
                autoplay={true}
                loop={true}
              />
            </div>
          )}
          {btnState === 4 && (
            <div className="content-lottie-ux-mobile">
              <UseLottieAnimation
                animationData={uxFullAnimation}
                autoplay={true}
                loop={true}
              />
            </div>
          )}
          {btnState === 5 && (
            <div className="content-lottie-branding-mobile">
              <UseLottieAnimation
                animationData={brandingFullAnimation}
                autoplay={true}
                loop={true}
              />
            </div>
          )}
          {btnState === 6 && (
            <div className="content-lottie-socialMedia-mobile">
              <UseLottieAnimation
                animationData={socialMediaFullAnimation}
                autoplay={true}
                loop={true}
              />
            </div>
          )}
          {btnState === 7 && (
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
