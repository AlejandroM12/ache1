import { Link } from "react-router-dom";
import Button from "./Button";
import ContainerLeft from "./ContainerLeft";
import dots from "../assets/Icons/dots.svg";
import { useState } from "react";

const CardHomeLeft = () => {
  const [btnState, setBtnState] = useState(1);
  return (
    <ContainerLeft>
      <div className="dots">
        <div className="dots-icon">
          <img
            src={dots}
            alt=""
            className={btnState === 1 ? "active" : ""}
            onClick={() => {
              setBtnState(1);
            }}
          />
        </div>
        <div className="dots-icon">
          <img
            src={dots}
            alt=""
            className={btnState === 2 ? "active" : ""}
            onClick={() => {
              setBtnState(2);
            }}
          />
        </div>
        <div className="dots-icon">
          <img
            src={dots}
            alt=""
            className={btnState === 3 ? "active" : ""}
            onClick={() => {
              setBtnState(3);
            }}
          />
        </div>
        <div className="dots-icon">
          <img
            src={dots}
            alt=""
            className={btnState === 4 ? "active" : ""}
            onClick={() => {
              setBtnState(4);
            }}
          />
        </div>
      </div>
      {btnState === 1 && (
        <div className="content-card">
          <h1 className="card-title">Ux</h1>
          <p className="card-description">
            We carry out a survey of the market and the competition. We plan and
            design the correct flow for your website to be successful.
          </p>
          <img src="" alt="" />
          <Link to="/">
            <Button buttonLabel="How we work?" />
          </Link>
        </div>
      )}
      {btnState === 2 && (
        <div className="content-card">
          <h1 className="card-title">Web apps</h1>
          <p className="card-description">
            You need to organize your business, nothing better than having your
            own online system that your entire team can access.
          </p>
          <img src="" alt="" />
          <Link to="/">
            <Button buttonLabel="Biggest systems" />
          </Link>
        </div>
      )}
      {btnState === 3 && (
        <div className="content-card">
          <h1 className="card-title">Apps mobile</h1>
          <p className="card-description">
            It makes your app unique. From usability analysis to testing to
            launch your MVP.
          </p>
          <img src="" alt="" />
          <Link to="/">
            <Button buttonLabel="Our tecnologies" />
          </Link>
        </div>
      )}
      {btnState === 4 && (
        <div className="content-card">
          <h1 className="card-title">Best webs</h1>
          <p className="card-description">
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
    </ContainerLeft>
  );
};

export default CardHomeLeft;
