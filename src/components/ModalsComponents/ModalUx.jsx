import ContainerModal from "../../layout/ContainerModal";
import ContainerLeftModal from "../ContainerLeftModal";
import ContainerRightModal from "../ContainerRightModal";
import uxProcess from "../../assets/Modal/ux-process.svg";
import uxAimation from "../../assets/lotties/modal-ux.json";
import UseLottieAnimation from "../../components/useLottieAnimation";


const ModalUx = ({ isOpen, closeModal }) => {
  return (
    <>
      <ContainerModal>
        <div className={`modal${isOpen && "is-open"}`}></div>
        <ContainerLeftModal>
          <div className="lottie-modal-ux">
            <UseLottieAnimation animationData={uxAimation} autoplay={true} loop={true} />
          </div>
          <h3 className="modal-ux-title-left">Ux</h3>
          <p className="modal-ux-description-left">
            How many times do we see that when launching our MVP we{" "}
            <span>missed solving essential things</span> for its correct use?
          </p>
          <p className="modal-ux-description-left">
            This happens to us by rushing and skipping stages. The most
            important is the <span>usability analysis stage.</span>{" "}
          </p>
          <p className="modal-ux-description-left">
            If you want your <span>application to be successful</span>, you have to spend the
            necessary time on ux design.
          </p>
        </ContainerLeftModal>
        <ContainerRightModal>
        <h3 className="modal-title-ux-right">Ux Process</h3>
        <img src={uxProcess} alt="" className="ux-modal-img"/>
        <button className="close-modal" onClick={closeModal}>X</button>
        </ContainerRightModal>
      </ContainerModal>
    </>
  );
};
export default ModalUx;
