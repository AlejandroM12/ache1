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
          <h1 className="card-title-right">Ux</h1>
          <p className="card-description-right">
            We carry out a survey of the market and the competition. We plan and
            design the correct flow for your website to be successful.
          </p>
          <img src="" alt="" />
          <Link to="/">
            <Button buttonLabel="How we work?" />
          </Link>
        </div>
      )}
      {btnDot === 2 && (
        <div className="content-card-right">
          <h1 className="card-title-right">Web apps</h1>
          <p className="card-description-right">
            You need to organize your business, nothing better than having your
            own online system that your entire team can access.
          </p>
          <img src="" alt="" />
          <Link to="/">
            <Button buttonLabel="Biggest systems" />
          </Link>
        </div>
      )}
      {btnDot === 3 && (
        <div className="content-card-right">
          <h1 className="card-title-right">Apps mobile</h1>
          <p className="card-description-right">
            It makes your app unique. From usability analysis to testing to
            launch your MVP.
          </p>
          <img src="" alt="" />
          <Link to="/">
            <Button buttonLabel="Our tecnologies" />
          </Link>
        </div>
      )}
      {btnDot === 4 && (
        <div className="content-card-right">
          <h1 className="card-title-right">Best webs</h1>
          <p className="card-description-right">
            The culture of mobile first. Having a responsive website is not only
            important, it is essential. Today users access 80% of the web on
            their mobile phone. Do not stay behind, renew yourself!
          </p>
          <img src="" alt="" />
          <Link to="/">
            <Button buttonLabel="We can do it!" />
          </Link>
        </div>
      )}
    </ContainerRight>
  );
};
export default CardHomeRight;
