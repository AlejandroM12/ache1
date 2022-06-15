import { useState } from "react";
import ContainerLeftSection from "./ContainerLeftSection";
import ContainerRightSection from "./ContainerRightSection";
import App from "../assets/Services/apps-mobile.svg";
import Button from "./Button";

const CardServices = () => {
  const [linkActive, setLinkActive] = useState(1);
  return (
    <>
      <ContainerLeftSection>
        <div className="card-service-container">
          <h3 className="card-service-title">Creativity & organization</h3>
          <li
            className={
              linkActive === 2
                ? "card-services-list linkActive"
                : "card-services-list"
            }
            onClick={() => {
              setLinkActive(2);
            }}
          >
            Ux/Ui
          </li>
          <li
            className={
              linkActive === 3
                ? "card-services-list linkActive"
                : "card-services-list"
            }
            onClick={() => {
              setLinkActive(3);
            }}
          >
            Web Apps
          </li>
          <li
            className={
              linkActive === 1
                ? "card-services-list linkActive"
                : "card-services-list"
            }
            onClick={() => {
              setLinkActive(1);
            }}
          >
            Apps Mobile
          </li>
          <li
            className={
              linkActive === 4
                ? "card-services-list linkActive"
                : "card-services-list"
            }
            onClick={() => {
              setLinkActive(4);
            }}
          >
            Best Websites
          </li>
          <li
            className={
              linkActive === 5
                ? "card-services-list linkActive"
                : "card-services-list"
            }
            onClick={() => {
              setLinkActive(5);
            }}
          >
            Branding
          </li>
          <li
            className={
              linkActive === 6
                ? "card-services-list linkActive"
                : "card-services-list"
            }
            onClick={() => {
              setLinkActive(6);
            }}
          >
            Social Media
          </li>
          <li
            className={
              linkActive === 7
                ? "card-services-list linkActive"
                : "card-services-list"
            }
            onClick={() => {
              setLinkActive(7);
            }}
          >
            Marketing strategy
          </li>
          <li
            className={
              linkActive === 8
                ? "card-services-list linkActive"
                : "card-services-list"
            }
            onClick={() => {
              setLinkActive(8);
            }}
          >
            Editorial
          </li>
        </div>
      </ContainerLeftSection>
      <ContainerRightSection>
        {linkActive === 1 && (
          <div className="content-service">
            <div className="content-card-right" data-aos="fade-up">
              <h3 className="card-title-right">Apps mobile</h3>
              <img src={App} alt="" className="card-img-right" />
              <p className="card-description-right">
                It makes your app unique. From usability analysis to testing to
                launch your MVP.
              </p>

              <Button buttonLabel="Our tecnologies" />
            </div>
          </div>
        )}
        {linkActive === 2 && (
          <div className="content-service">
            <div className="content-card-right" data-aos="fade-up">
              <h3 className="card-title-right">Ux/Ui</h3>
              <img src={App} alt="" className="card-img-right" />
              <p className="card-description-right">
                We carry out a survey of the market and the competition. We plan
                and design the correct flow for your website to be successful.
              </p>

              <Button buttonLabel="How we work?" />
            </div>
          </div>
        )}

        {linkActive === 3 && (
          <div className="content-service">
            <div className="content-card-right" data-aos="fade-up">
              <h3 className="card-title-right">Web apps</h3>
              <img src={App} alt="" className="card-img-right" />
              <p className="card-description-right">
                You need to organize your business, nothing better than having
                your own online system that your entire team can access.
              </p>

              <Button buttonLabel="Biggest systems" />
            </div>
          </div>
        )}
        {linkActive === 4 && (
          <div className="content-service">
            <div className="content-card-right" data-aos="fade-up">
              <h3 className="card-title-right">Best Websites</h3>
              <img src={App} alt="" className="card-img-right" />
              <p className="card-description-right">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea non
                sit, laudantium modi corporis nemo!
              </p>

              <Button buttonLabel="Biggest systems" />
            </div>
          </div>
        )}
        {linkActive === 5 && (
          <div className="content-service">
            <div className="content-card-right" data-aos="fade-up">
              <h3 className="card-title-right">Branding</h3>
              <img src={App} alt="" className="card-img-right" />
              <p className="card-description-right">
                Design your brand identity from scratch. Create a unique
                language that identifies you in the market.
              </p>

              <Button buttonLabel="I want start" />
            </div>
          </div>
        )}
        {linkActive === 6 && (
          <div className="content-service">
            <div className="content-card-right" data-aos="fade-up">
              <h3 className="card-title-right">Social Media</h3>
              <img src={App} alt="" className="card-img-right" />
              <p className="card-description-right">
                We perform a competitive analysis to create your brand strategy
                on social networks. Guidelines for communication, promotion and
                user monitoring.
              </p>

              <Button buttonLabel="Your brand UP!" />
            </div>
          </div>
        )}
        {linkActive === 7 && (
          <div className="content-service">
            <div className="content-card-right" data-aos="fade-up">
              <h3 className="card-title-right">Marketing strategy</h3>
              <img src={App} alt="" className="card-img-right" />
              <p className="card-description-right">
                Use our services and build a solid digital presence across
                digital marketing, creative web design, quality content, SEO,
                and media campaigns.
              </p>

              <Button buttonLabel="Grow up now" />
            </div>
          </div>
        )}
        {linkActive === 8 && (
          <div className="content-service">
            <div className="content-card-right" data-aos="fade-up">
              <h3 className="card-title-right">Marketing strategy</h3>
              <img src={App} alt="" className="card-img-right" />
              <p className="card-description-right">
                Use our services and build a solid digital presence across
                digital marketing, creative web design, quality content, SEO,
                and media campaigns.
              </p>

              <Button buttonLabel="Grow up now" />
            </div>
          </div>
        )}
      </ContainerRightSection>
    </>
  );
};
export default CardServices;
