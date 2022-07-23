import ContainerModal from "../../layout/ContainerModal";
import ContainerLeftModal from "../ContainerLeftModal";
import UseLottieAnimation from "../../components/useLottieAnimation";
import animationMarketing from "../../assets/lotties/marketing-full.json";
import ContainerRightModal from "../ContainerRightModal";
import arrowWhiteIcon from "../../assets/Icons/arrow-modal-marketing-icon.svg";
import Button from "../Button";
import MailTo from "../MailTo";

const ModalMarketing = ({ isOpen, closeModal }) => {
  return (
    <>
      <ContainerModal>
        <div className={`modal${isOpen && "is-open"}`}></div>
        <ContainerLeftModal>
          <div className="container-description-marketing-mobile">
            <div className="lottie-marketing-mobile">
              <UseLottieAnimation
                animationData={animationMarketing}
                autoplay={true}
                loop={true}
              />
            </div>
            <h3 className="modal-marketing-title-left">Marketing</h3>
            <p className="modal-marketing-description-left span">
              Nothing makes sense if we don't make the public see it. That is
              why it <span>is so important that you add a market strategy</span>{" "}
              to your venture or company.
            </p>
            <p className="modal-marketing-description-left">
              We have the best team of analysts and designers who will create a
              tailored strategy for your company.
            </p>
            <MailTo email="hi@ache1.com" subject="Marketing Grow Up">
              <Button buttonLabel="Grow up now" />
            </MailTo>
          </div>
        </ContainerLeftModal>
        <ContainerRightModal>
          <div className="container-marketing-modal-right">
            <div className="content-marketing-modal-right">
              <p className="content-marketing-modal-right-title">
                What do we do?
              </p>
              <ul className="container-list-marketing">
                <li className="list-marketing">
                  <img src={arrowWhiteIcon} alt="arrow icon" />
                  Survey: Interaction, brand awareness, traffic.
                </li>
                <li className="list-marketing">
                  <img src={arrowWhiteIcon} alt="arrow icon" />
                  Set up platforms from scratch: Facebook Business, Google
                  Analytics.
                </li>
                <li className="list-marketing">
                  <img src={arrowWhiteIcon} alt="arrow icon" />
                  Instalar Pixeles y código UA.
                </li>
                <li className="list-marketing">
                  <img src={arrowWhiteIcon} alt="arrow icon" />
                  Monthly Campaings.
                </li>
                <li className="list-marketing">
                  <img src={arrowWhiteIcon} alt="arrow icon" />
                  Bi-weekly or weekly dynamic reports
                </li>
              </ul>
            </div>
            <div className="content-marketing-modal-right">
              <p className="content-marketing-modal-right-title">
                What are our goals?
              </p>
              <ul className="container-list-marketing">
                <li className="list-marketing">
                  <img src={arrowWhiteIcon} alt="arrow icon" />
                  Survey: Interaction, brand awareness, traffic.
                </li>
                <li className="list-marketing">
                  <img src={arrowWhiteIcon} alt="arrow icon" />
                  Increase followers
                </li>
                <li className="list-marketing">
                  <img src={arrowWhiteIcon} alt="arrow icon" />
                  Generate direct inquires to activate sales.
                </li>
                <li className="list-marketing">
                  <img src={arrowWhiteIcon} alt="arrow icon" />
                  Make the brands recognized in the market.
                </li>
              </ul>
            </div>
          </div>
          <button className="close-modal" onClick={closeModal}>
            X
          </button>
        </ContainerRightModal>
      </ContainerModal>
    </>
  );
};
export default ModalMarketing;
