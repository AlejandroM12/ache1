import { Link } from "react-router-dom";
import { useState } from "react";
import { useModal } from "../../hooks/useModal";
import ContainerLeft from "../ContainerLeft";
import Button from "../Button";
import dots from "../../assets/Icons/dots.svg";
import ModalApp from "../ModalsComponents/ModalApp";
import ModalUx from "../ModalsComponents/ModalUx";
import UseLottieAnimation from "../../components/useLottieAnimation";
import animationUX from "../../assets/lotties/ux.json";
import webAppsAnimation from "../../assets/lotties/web-apps.json";
import animationBranding from "../../assets/lotties/branding.json";
import socialMediaAnimation from "../../assets/lotties/social-media.json";
import marketingAnimation from "../../assets/lotties/marketing.json";

const CardHomeLeftMobile = () => {
  const [btnState, setBtnState] = useState(1);
  const [isOpenModalApp, openModalApp, closeModalApp] = useModal(false);
  const [isOpenModalUX, openModalUx, closeModalUx] = useModal(false);
  return (
    <>
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
        <div className="dots-icon-left">
          <img
            src={dots}
            alt=""
            className={btnState === 5 ? "active-left" : ""}
            onClick={() => {
              setBtnState(5);
            }}
          />
        </div>
        <div className="dots-icon-left">
          <img
            src={dots}
            alt=""
            className={btnState === 6 ? "active-left" : ""}
            onClick={() => {
              setBtnState(6);
            }}
          />
        </div>
        <div className="dots-icon-left">
          <img
            src={dots}
            alt=""
            className={btnState === 7 ? "active-left" : ""}
            onClick={() => {
              setBtnState(7);
            }}
          />
        </div>
        <div className="dots-icon-left">
          <img
            src={dots}
            alt=""
            className={btnState === 8 ? "active-left" : ""}
            onClick={() => {
              setBtnState(8);
            }}
          />
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
          <div
            className="content-card-left content-web-apps"
            data-aos="fade-up"
          >
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
          </div>
        )}
        {btnState === 4 && (
          <div
            className="content-card-left content-best-webs"
            data-aos="fade-up"
          >
            <h1 className="card-title-left">Best webs</h1>
            <p className="card-description-left">
              The culture of mobile first. Having a responsive website is not
              only important, it is essential. Today users access 80% of the web
              on their mobile phone. Do not stay behind, renew yourself!
            </p>
            <Link to="/">
              <Button buttonLabel="We can do it!" />
            </Link>
          </div>
        )}
        {btnState === 5 && (
          <div className="content-card-left" data-aos="fade-up">
            <div className="content-lottie-branding">
              <UseLottieAnimation
                animationData={animationBranding}
                autoplay={true}
                loop={true}
              />
            </div>
            <h1 className="card-title-left">Branding</h1>
            <p className="card-description-left">
              Design your brand identity from scratch. Create a unique language
              that identifies you in the market.
            </p>
            <Link to="/">
              <Button buttonLabel="I want start" />
            </Link>
          </div>
        )}
        {btnState === 6 && (
          <div className="content-card-left" data-aos="fade-up">
            <div className="content-lottie-socialMedia">
              <UseLottieAnimation
                animationData={socialMediaAnimation}
                autoplay={true}
                loop={true}
                width={300}
                height={300}
              />
            </div>
            <h1 className="card-title-left">Social media</h1>
            <p className="card-description-left">
              We perform a competitive analysis to create your brand strategy on
              social networks. Guidelines for communication, promotion and user
              monitoring.
            </p>
            <Link to="/">
              <Button buttonLabel="Your brand UP!" />
            </Link>
          </div>
        )}
        {btnState === 7 && (
          <div className="content-card-left" data-aos="fade-up">
            <div className="content-lottie-marketing">
              <UseLottieAnimation
                animationData={marketingAnimation}
                autoplay={true}
                loop={true}
                width={200}
                height={200}
              />
            </div>
            <h1 className="card-title-left">Marketing</h1>
            <p className="card-description-left">
              Use our services and build a solid digital presence across digital
              marketing, creative web design, quality content, SEO, and media
              campaigns.
            </p>
            <Link to="/">
              <Button buttonLabel="Grow up now" />
            </Link>
          </div>
        )}
        {btnState === 8 && (
          <div className="content-card-left" data-aos="fade-up">
            <h1 className="card-title-left">Editorial</h1>
            <p className="card-description-left">
              Make your project a reality and turn it into a successful book.
              Hand in hand with the best editorial designers on the market.
            </p>
            <Link to="/">
              <Button buttonLabel="Let´s talk" />
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
export default CardHomeLeftMobile;
