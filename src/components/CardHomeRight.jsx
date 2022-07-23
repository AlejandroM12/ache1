import { useState } from "react";
import { useModal } from "../hooks/useModal";
import ContainerRight from "./ContainerRight";
import dotsWhite from "../assets/Icons/dots-white.svg";
import Button from "./Button";
import UseLottieAnimation from "../components/useLottieAnimation";
import animationBranding from "../assets/lotties/branding.json";
import socialMediaAnimation from "../assets/lotties/social-media.json";
import marketingAnimation from "../assets/lotties/marketing.json";
import animationUX from "../assets/lotties/ux.json";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import ModalBranding from "./ModalsComponents/ModalBranding";
import ModalSocialMedia from "./ModalsComponents/ModalSocialMedia";
import ModalMarketing from "./ModalsComponents/ModalMarketing";
import ModalUx from "./ModalsComponents/ModalUx";

const CardHomeRight = () => {

  const [btnDot, setBtnDot] = useState(1);
  const [isOpenModalUX, openModalUx, closeModalUx] = useModal(false);
  const [isOpenModalBranding, openModalBranding, closeModalBranding] = useModal(false);
  const [isOpenModalSocialMedia, openModalSocialMedia, closeModalSocialMedia] = useModal(false);
  const [isOpenModalMarketing, openModalMarketing, closeModalMarketing] = useModal(false);
  
  
  const upHandler = () =>{
    if(btnDot >= 1){
      setBtnDot(btnDot + 1)
      if(btnDot === 4){
        setBtnDot(1)
      }
    }
  }
  const downHandler = () =>{
    if(btnDot >= 1 ){
      setBtnDot(btnDot - 1)
      if(btnDot === 1){
        setBtnDot(4)
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
        <div className="dots-icon-right">
          <img
            src={dotsWhite}
            alt="button icon"
            className={btnDot === 4 ? "active-right" : ""}
            onClick={() => {
              setBtnDot(4);
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
            <div className="content-lottie-ux">
              <UseLottieAnimation
                animationData={animationUX}
                autoplay={true}
                loop={true}
              />
            </div>
            <h1 className="card-title-right">Ux</h1>
            <p className="card-description-right ux-description">
              We carry out a survey of the market and the competition. We plan
              and design the correct flow for your website to be successful.
            </p>
            <Button buttonLabel="How do we work?" onClick={openModalUx} />
          </div>
        )}
      {btnDot === 2 && (
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
            <Button buttonLabel="I want to start" onClick={openModalBranding}/>
        </div>
      )}
      {btnDot === 3 && (
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
            <Button buttonLabel="Put your brand up!" onClick={openModalSocialMedia}/>
        </div>
      )}
      {btnDot === 4 && (
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
            <Button buttonLabel="Grow up now" onClick={openModalMarketing}/>
        </div>
      )}
      </ReactScrollWheelHandler>
      {isOpenModalUX && (
        <ModalUx isOpen={isOpenModalUX} closeModal={closeModalUx} />
      )}
      {isOpenModalBranding && (
        <ModalBranding isOpen={isOpenModalBranding} closeModal={closeModalBranding} />
      )}
      {isOpenModalSocialMedia && (
        <ModalSocialMedia isOpen={isOpenModalSocialMedia} closeModal={closeModalSocialMedia} />
      )}
      {isOpenModalMarketing && (
        <ModalMarketing isOpen={isOpenModalMarketing} closeModal={closeModalMarketing} />
      )}
    </ContainerRight>
  );
};
export default CardHomeRight;
