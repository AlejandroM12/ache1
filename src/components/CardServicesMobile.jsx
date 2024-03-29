import { useState } from "react";
import { useModal } from "../hooks/useModal";
import Button from "./Button";
import ModalApp from "./ModalsComponents/ModalApp";
import ModalUx from "./ModalsComponents/ModalUx";
import arrowBlue from "../assets/Icons/arrow-about.svg";
import ModalWebApps from "./ModalsComponents/ModalWebApps";
import ModalBranding from "./ModalsComponents/ModalBranding";
import ModalSocialMedia from "./ModalsComponents/ModalSocialMedia";
import ModalMarketing from "./ModalsComponents/ModalMarketing";
import MailTo from "./MailTo";

const CardServicesMobile = () => {
  const [linkActive, setLinkActive] = useState(1);
  const [activeList, setActiveList] = useState(true);
  const [isOpenModalWebApp, openModalWebApp, closeModalWebApp] =
    useModal(false);
  const [isOpenModalApp, openModalApp, closeModalApp] = useModal(false);
  const [isOpenModalUX, openModalUx, closeModalUx] = useModal(false);
  const [isOpenModalBranding, openModalBranding, closeModalBranding] =
    useModal(false);
  const [isOpenModalSocialMedia, openModalSocialMedia, closeModalSocialMedia] =
    useModal(false);
  const [isOpenModalMarketing, openModalMarketing, closeModalMarketing] =
    useModal(false);
  return (
    <>
      <div className="card-service-container-moblie">
        <h3 className="card-service-title-mobile">Creativity & organization</h3>
        {activeList && linkActive === 2 ? (
          <div className="container-card-services">
            <li className="card-services-list-mobile-active">
              <img
                src={arrowBlue}
                className="arrow-icon-mobile"
                alt="arrow icon"
              />
              Web Apps
            </li>
            <div className="container-list-services-mobile-active">
              <p className="card-description-services-mobile-active">
                You need to organize your business, nothing better than having
                your own online system that your entire team can access.
              </p>
              <Button buttonLabel="Biggest systems" onClick={openModalWebApp} />
            </div>
          </div>
        ) : (
          <li
            className="card-services-list-mobile"
            onClick={() => {
              setLinkActive(2);
              setActiveList(true);
            }}
          >
            Web Apps
          </li>
        )}
        {activeList && linkActive === 3 ? (
          <div className="container-card-services">
            <li className="card-services-list-mobile-active">
              <img
                src={arrowBlue}
                className="arrow-icon-mobile"
                alt="arrow icon"
              />
              Ux/Ui
            </li>
            <div className="container-list-services-mobile-active">
              <p className="card-description-services-mobile-active">
                We carry out a survey of the market and the competition. We plan
                and design the correct flow for your website to be successful.
              </p>
              <Button buttonLabel="How do we work?" onClick={openModalUx} />
            </div>
          </div>
        ) : (
          <li
            className="card-services-list-mobile"
            onClick={() => {
              setLinkActive(3);
              setActiveList(true);
            }}
          >
            Ux/Ui
          </li>
        )}

        {activeList && linkActive === 1 ? (
          <div className="container-card-services">
            <li className="card-services-list-mobile-active">
              <img
                src={arrowBlue}
                className="arrow-icon-mobile"
                alt="arrow icon"
              />
              Apps mobile
            </li>
            <div className="container-list-services-mobile-active">
              <p className="card-description-services-mobile-active">
                It makes your app unique. From usability analysis to testing to
                launch your MVP.
              </p>
              <Button buttonLabel="Our technologies" onClick={openModalApp} />
            </div>
          </div>
        ) : (
          <li
            className="card-services-list-mobile"
            onClick={() => {
              setLinkActive(1);
              setActiveList(true);
            }}
          >
            Apps mobile
          </li>
        )}
        {activeList && linkActive === 4 ? (
          <div className="container-card-services">
            <li className="card-services-list-mobile-active">
              <img
                src={arrowBlue}
                className="arrow-icon-mobile"
                alt="arrow icon"
              />
              Best Websites
            </li>
            <div className="container-list-services-mobile-active">
              <p className="card-description-services-mobile-active">
                Is your website still not responsive? Today 80% of accesses to
                your website are through mobile devices. To make your website
                accessible to any user, it must be adaptable to all devices.
              </p>
              <MailTo email="hi@ache1.com" subject="New Website">
                <Button buttonLabel="I want to start" />
              </MailTo>
            </div>
          </div>
        ) : (
          <li
            className="card-services-list-mobile"
            onClick={() => {
              setLinkActive(4);
              setActiveList(true);
            }}
          >
            Best Websites
          </li>
        )}
        {activeList && linkActive === 5 ? (
          <div className="container-card-services">
            <li className="card-services-list-mobile-active">
              <img
                src={arrowBlue}
                className="arrow-icon-mobile"
                alt="arrow icon"
              />
              Branding
            </li>
            <div className="container-list-services-mobile-active">
              <p className="card-description-services-mobile-active">
                Design your brand identity from scratch. Create a unique
                language that identifies you in the market.
              </p>
              <Button
                buttonLabel="I want to start"
                onClick={openModalBranding}
              />
            </div>
          </div>
        ) : (
          <li
            className="card-services-list-mobile"
            onClick={() => {
              setLinkActive(5);
              setActiveList(true);
            }}
          >
            Branding
          </li>
        )}
        {activeList && linkActive === 6 ? (
          <div className="container-card-services">
            <li className="card-services-list-mobile-active">
              <img
                src={arrowBlue}
                className="arrow-icon-mobile"
                alt="arrow icon"
              />
              Social Media
            </li>
            <div className="container-list-services-mobile-active">
              <p className="card-description-services-mobile-active">
                We perform a competitive analysis to create your brand strategy
                on social networks. Guidelines for communication, promotion and
                user monitoring.
              </p>
              <Button
                buttonLabel="Put your brand up!"
                onClick={openModalSocialMedia}
              />
            </div>
          </div>
        ) : (
          <li
            className="card-services-list-mobile"
            onClick={() => {
              setLinkActive(6);
              setActiveList(true);
            }}
          >
            Social Media
          </li>
        )}
        {activeList && linkActive === 7 ? (
          <div className="container-card-services">
            <li className="card-services-list-mobile-active marketing-active">
              <img
                src={arrowBlue}
                className="arrow-icon-mobile"
                alt="arrow icon"
              />
              Marketing strategy
            </li>
            <div className="container-list-services-mobile-active">
              <p className="card-description-services-mobile-active">
                Use our services and build a solid digital presence across
                digital marketing, creative web design, quality content, SEO,
                and media campaigns
              </p>
              <Button buttonLabel="Grow up now" onClick={openModalMarketing} />
            </div>
          </div>
        ) : (
          <li
            className="card-services-list-mobile"
            onClick={() => {
              setLinkActive(7);
              setActiveList(true);
            }}
          >
            Marketing strategy
          </li>
        )}
      </div>

      {isOpenModalWebApp && (
        <ModalWebApps
          isOpen={isOpenModalWebApp}
          closeModal={closeModalWebApp}
        />
      )}
      {isOpenModalApp && (
        <ModalApp isOpen={isOpenModalApp} closeModal={closeModalApp} />
      )}
      {isOpenModalUX && (
        <ModalUx isOpen={isOpenModalUX} closeModal={closeModalUx} />
      )}
      {isOpenModalBranding && (
        <ModalBranding
          isOpen={isOpenModalBranding}
          closeModal={closeModalBranding}
        />
      )}
      {isOpenModalSocialMedia && (
        <ModalSocialMedia
          isOpen={isOpenModalSocialMedia}
          closeModal={closeModalSocialMedia}
        />
      )}
      {isOpenModalMarketing && (
        <ModalMarketing
          isOpen={isOpenModalMarketing}
          closeModal={closeModalMarketing}
        />
      )}
    </>
  );
};
export default CardServicesMobile;
