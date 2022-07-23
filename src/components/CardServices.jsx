import { useState } from "react";
import { useModal } from "../hooks/useModal";
import ContainerLeftSection from "./ContainerLeftSection";
import ContainerRightSection from "./ContainerRightSection";
import UseLottieAnimation from "../components/useLottieAnimation";
import Button from "./Button";
import animationUX from "../assets/lotties/ux.json";
import ModalApp from "./ModalsComponents/ModalApp";
import ModalUx from "./ModalsComponents/ModalUx";
import webAppsAnimation from "../assets/lotties/web-apps.json";
import animationBrandingBlack from "../assets/lotties/branding-black.json";
import socialMediaAnimation from "../assets/lotties/social-media.json";
import marketingAnimation from "../assets/lotties/marketing.json";
import appsMobileAnimation from "../assets/lotties/apps-mobile-home.json";

const CardServices = () => {
  const [linkActive, setLinkActive] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const [isOpenModalApp, openModalApp, closeModalApp] = useModal(false);
  const [isOpenModalUX, openModalUx, closeModalUx] = useModal(false);

  return (
    <>
      <ContainerLeftSection>
        <div className="card-services-container">
          <h3 className="card-services-title">Creativity & organization</h3>
          
          <li
            className={
              linkActive === 2 && isHovering === false
                ? "card-services-list linkActive"
                : "card-services-list"
            }
            onClick={() => {
              setLinkActive(2);
            }}
            onMouseEnter={() => {
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
            }}
          >
            Web Apps
          </li>
          <li
            className={
              linkActive === 3 && isHovering === false
                ? "card-services-list linkActive"
                : "card-services-list"
            }
            onMouseEnter={() => {
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
            }}
            onClick={() => {
              setLinkActive(3);
            }}
          >
            Ux/Ui
          </li>
          <li
            className={
              linkActive === 1 && isHovering === false
                ? "card-services-list linkActive"
                : "card-services-list"
            }
            onClick={() => {
              setLinkActive(1);
            }}
            onMouseEnter={() => {
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
            }}
          >
            Apps Mobile
          </li>
          <li
            className={
              linkActive === 4 && isHovering === false
                ? "card-services-list linkActive"
                : "card-services-list"
            }
            onClick={() => {
              setLinkActive(4);
            }}
            onMouseEnter={() => {
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
            }}
          >
            Branding
          </li>
          <li
            className={
              linkActive === 5 && isHovering === false
                ? "card-services-list linkActive"
                : "card-services-list"
            }
            onClick={() => {
              setLinkActive(5);
            }}
            onMouseEnter={() => {
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
            }}
          >
            Social Media
          </li>
          <li
            className={
              linkActive === 6 && isHovering === false
                ? "card-services-list linkActive"
                : "card-services-list"
            }
            onClick={() => {
              setLinkActive(6);
            }}
            onMouseEnter={() => {
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
            }}
          >
            Marketing strategy
          </li>
        </div>
      </ContainerLeftSection>
      <ContainerRightSection>
        {linkActive === 1 && (
          <div className="content-services">
            <div
              className="content-services-card-right"
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
            >
              <h3 className="card-services-title-right">Apps mobile</h3>
              <p className="card-services-description-right">
                It makes your app unique. From usability analysis to testing to
                launch your MVP.
              </p>
              <Button buttonLabel="Our tecnologies" onClick={openModalApp} />
              <div className="content-services-lottie-apps-mobile">
                <UseLottieAnimation
                  animationData={appsMobileAnimation}
                  autoplay={true}
                  loop={true}
                />
              </div>
            </div>
          </div>
        )}
        {linkActive === 3 && (
          <div className="content-services">
            <div
              className="content-services-card-right"
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
            >
              <h3 className="card-services-title-right">Ux/Ui</h3>
              <p className="card-services-description-right">
                We carry out a survey of the market and the competition. We plan
                and design the correct flow for your website to be successful.
              </p>

              <Button buttonLabel="How do we work?" onClick={openModalUx} />
              <div className="content-services-lottie-ux">
                <UseLottieAnimation
                  animationData={animationUX}
                  autoplay={true}
                  loop={true}
                />
              </div>
            </div>
          </div>
        )}

        {linkActive === 2 && (
          <div className="content-services">
            <div
              className="content-services-card-right"
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
            >
              <h3 className="card-services-title-right">Web apps</h3>
              <p className="card-services-description-right">
                You need to organize your business, nothing better than having
                your own online system that your entire team can access.
              </p>

              <Button buttonLabel="Biggest systems" />
              <div className="content-services-lottie-web-apps">
                <UseLottieAnimation
                  animationData={webAppsAnimation}
                  autoplay={true}
                  loop={true}
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        )}
        {linkActive === 4 && (
          <div className="content-services">
            <div
              className="content-services-card-right"
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
            >
              <div className="content-services-lottie-branding">
                <UseLottieAnimation
                  animationData={animationBrandingBlack}
                  autoplay={true}
                  loop={true}
                />
              </div>
              <h3 className="card-services-title-right">Branding</h3>
              <p className="card-services-description-right">
                Design your brand identity from scratch. Create a unique
                language that identifies you in the market.
              </p>
              <Button buttonLabel="I want to start" />
              
            </div>
          </div>
        )}
        {linkActive === 5 && (
          <div className="content-services">
            <div
              className="content-services-card-right social-media"
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
            >
              <div className="content-services-lottie-social-media">
                <UseLottieAnimation
                  animationData={socialMediaAnimation}
                  autoplay={true}
                  loop={true}
                />
              </div>
              <h3 className="card-services-title-right">Social Media</h3>
              <p className="card-services-description-right">
                We perform a competitive analysis to create your brand strategy
                on social networks. Guidelines for communication, promotion and
                user monitoring.
              </p>
              <Button buttonLabel="Put your brand up!" />
              
            </div>
          </div>
        )}
        {linkActive === 6 && (
          <div className="content-services">
            <div className="content-services-card-right marketing-strategy" data-aos="fade-right">
              <div className="content-services-lottie-marketing">
                <UseLottieAnimation
                  animationData={marketingAnimation}
                  autoplay={true}
                  loop={true}
                />
              </div>
              <h3 className="card-services-title-right">Marketing strategy</h3>
              <p className="card-services-description-right">
                Use our services and build a solid digital presence across
                digital marketing, creative web design, quality content, SEO,
                and media campaigns.
              </p>
              <Button buttonLabel="Grow up now" />
            </div>
          </div>
        )}
      </ContainerRightSection>
      {isOpenModalApp && (
        <ModalApp isOpen={isOpenModalApp} closeModal={closeModalApp} />
      )}
      {isOpenModalUX && (
        <ModalUx isOpen={isOpenModalUX} closeModal={closeModalUx} />
      )}
    </>
  );
};
export default CardServices;
