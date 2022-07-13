import ContainerRight from "./ContainerRight";
import dotsWhite from "../assets/Icons/dots-white.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import UseLottieAnimation from "../components/useLottieAnimation";
import animationBranding from "../assets/lotties/branding.json";
import socialMediaAnimation from "../assets/lotties/social-media.json";
import marketingAnimation from "../assets/lotties/marketing.json";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { useModal } from "../hooks/useModal";
import ModalBranding from "./ModalsComponents/ModalBranding";
import ModalSocialMedia from "./ModalsComponents/ModalSocialMedia";

const CardHomeRight = () => {

  const [btnDot, setBtnDot] = useState(1);
  const [isOpenModalBranding, openModalBranding, closeModalBranding] = useModal(false);
  const [isOpenModalSocialMedia, openModalSocialMedia, closeModalSocialMedia] = useModal(false);
  const upHandler = () =>{
    if(btnDot >= 1){
      setBtnDot(btnDot + 1)
      if(btnDot === 3){
        setBtnDot(1)
      }
    }
  }
  const downHandler = () =>{
    if(btnDot >= 1 ){
      setBtnDot(btnDot - 1)
      if(btnDot === 1){
        setBtnDot(3)
      }
    }
  }
  return (
    <ContainerRight>
        
      <div className="dots-right">
        <div className="dots-icon-right">
          <img
            src={dotsWhite}
            alt="button icon"
            className={btnDot === 1 ? "active-right" : ""}
            onClick={() => {
              setBtnDot(1);
            }}
          />
        </div>
        <div className="dots-icon-right">
          <img
            src={dotsWhite}
            alt="button icon"
            className={btnDot === 2 ? "active-right" : ""}
            onClick={() => {
              setBtnDot(2);
            }}
          />
        </div>
        <div className="dots-icon-right">
          <img
            src={dotsWhite}
            alt="button icon"
            className={btnDot === 3 ? "active-right" : ""}
            onClick={() => {
              setBtnDot(3);
            }}
          />
        </div>
      </div>
      <ReactScrollWheelHandler
      upHandler={()=>downHandler()}
      downHandler={()=> upHandler()}
      >
      {btnDot === 1 && (
        <div className="content-card-right" data-aos="fade-up">
          <div className="content-lottie-branding">
            <UseLottieAnimation
              animationData={animationBranding}
              autoplay={true}
              loop={true}
            />
          </div>
          <h1 className="card-title-right">Branding</h1>
          <p className="card-description-right">
            Design your brand identity from scratch. Create a unique language
            that identifies you in the market.
          </p>
            <Button buttonLabel="I want start" onClick={openModalBranding}/>
        </div>
      )}
      {btnDot === 2 && (
        <div className="content-card-right" data-aos="fade-up">
          <div className="content-lottie-socialMedia">
            <UseLottieAnimation
              animationData={socialMediaAnimation}
              autoplay={true}
              loop={true}
              width={300}
              height={300}
            />
          </div>
          <h1 className="card-title-right">Social media</h1>
          <p className="card-description-right">
            We perform a competitive analysis to create your brand strategy on
            social networks. Guidelines for communication, promotion and user
            monitoring.
          </p>
            <Button buttonLabel="Your brand UP!" onClick={openModalSocialMedia}/>
        </div>
      )}
      {btnDot === 3 && (
        <div className="content-card-right" data-aos="fade-up">
          <div className="content-lottie-marketing">
            <UseLottieAnimation
              animationData={marketingAnimation}
              autoplay={true}
              loop={true}
              width={200}
              height={200}
            />
          </div>
          <h1 className="card-title-right">Marketing</h1>
          <p className="card-description-right">
            Use our services and build a solid digital presence across digital
            marketing, creative web design, quality content, SEO, and media
            campaigns.
          </p>
          <Link to="/">
            <Button buttonLabel="Grow up now" />
          </Link>
        </div>
      )}
      </ReactScrollWheelHandler>
      {isOpenModalBranding && (
        <ModalBranding isOpen={isOpenModalBranding} closeModal={closeModalBranding} />
      )}
      {isOpenModalSocialMedia && (
        <ModalSocialMedia isOpen={isOpenModalSocialMedia} closeModal={closeModalSocialMedia} />
      )}
    </ContainerRight>
  );
};
export default CardHomeRight;
