import App from "../assets/Services/apps-mobile.svg";
import Button from "./Button";
const RightContentService = () => {
  return (
    <>
      <div className="content-service">
        <div className="content-card-right" data-aos="fade-up">
          <h3 className="card-title-right">Apps mobile</h3>
          <img src={App} alt="" className="card-img-right"/>
          <p className="card-description-right">
          It makes your app unique. From usability analysis to testing to launch your MVP.
          </p>
          
          <Button buttonLabel="Our tecnologies" />
        </div>
      </div>
    </>
  );
};
export default RightContentService;
