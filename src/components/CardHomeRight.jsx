import ContainerRight from "./ContainerRight";
import dotsWhite from "../assets/Icons/dots-white.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const CardHomeRight = () => {
  const [btnDot, setBtnDot] = useState(1);
  return (
    <ContainerRight>
      <div className="dots-right">
        <div className="dots-icon-right">
          <img
            src={dotsWhite}
            alt=""
            className={btnDot === 1 ? "active-right" : ""}
            onClick={() => {
              setBtnDot(1);
            }}
          />
        </div>
        <div className="dots-icon-right">
          <img
            src={dotsWhite}
            alt=""
            className={btnDot === 2 ? "active-right" : ""}
            onClick={() => {
              setBtnDot(2);
            }}
          />
        </div>
        <div className="dots-icon-right">
          <img
            src={dotsWhite}
            alt=""
            className={btnDot === 3 ? "active-right" : ""}
            onClick={() => {
              setBtnDot(3);
            }}
          />
        </div>
        <div className="dots-icon-right">
          <img
            src={dotsWhite}
            alt=""
            className={btnDot === 4 ? "active-right" : ""}
            onClick={() => {
              setBtnDot(4);
            }}
          />
        </div>
      </div>
      {btnDot === 1 && (
        <div className="content-card-right">
          <h1 className="card-title-right">Branding</h1>
          <p className="card-description-right">
            Design your brand identity from scratch. Create a unique language
            that identifies you in the market.
          </p>
          <img src="" alt="" />
          <Link to="/">
            <Button buttonLabel="I want start" />
          </Link>
        </div>
      )}
      {btnDot === 2 && (
        <div className="content-card-right">
          <h1 className="card-title-right">Social media</h1>
          <p className="card-description-right">
            We perform a competitive analysis to create your brand strategy on
            social networks. Guidelines for communication, promotion and user
            monitoring.
          </p>
          <img src="" alt="" />
          <Link to="/">
            <Button buttonLabel="Your brand UP!" />
          </Link>
        </div>
      )}
      {btnDot === 3 && (
        <div className="content-card-right">
          <h1 className="card-title-right">Marketing</h1>
          <p className="card-description-right">
            Use our services and build a solid digital presence across digital
            marketing, creative web design, quality content, SEO, and media
            campaigns.
          </p>
          <img src="" alt="" />
          <Link to="/">
            <Button buttonLabel="Grow up now" />
          </Link>
        </div>
      )}
      {btnDot === 4 && (
        <div className="content-card-right">
          <h1 className="card-title-right">Editorial</h1>
          <p className="card-description-right">
            Make your project a reality and turn it into a successful book. Hand
            in hand with the best editorial designers on the market.
          </p>
          <img src="" alt="" />
          <Link to="/">
            <Button buttonLabel="Let´s talk" />
          </Link>
        </div>
      )}
    </ContainerRight>
  );
};
export default CardHomeRight;
