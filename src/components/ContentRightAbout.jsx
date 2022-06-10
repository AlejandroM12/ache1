import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Lottie from "lottie-react";
import calendarAnimation from "../assets/lotties/calendar-about.json";

const ContentRightAbout = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      origin: "center",
      perView: 1,
      spacing: 10,
    },
    vertical: true,
  });
  return (
    <>
      <div ref={sliderRef} className="keen-slider" style={{ height: 500}}>
        <div className="keen-slider__slide number-slide1 slide-content">
          <div className="lottie-content">
            <Lottie
              animationData={calendarAnimation}
              className="lottie-slide"
            />
          </div>

          <h4 className="slide-count">01.</h4>
          <h3 className="slide-title">The first meeting</h3>
          <p className="slide-description">
            You bring to us an idea, and the first that we do is a meeting.{" "}
            <strong>In this meeting we discover your project</strong> and them
            we analize it with the team to create estimations.
            <p className="slide-description">Then we make a
            brief of your project which we see together the scope of it.</p>
          </p>
        </div>
        <div className="keen-slider__slide number-slide2 slide-content">
        <div className="lottie-content">
            <Lottie
              animationData={calendarAnimation}
              className="lottie-slide"
            />
          </div>
          <h4 className="slide-count">02.</h4>
          <h3 className="slide-title">Analysis and estimation</h3>
          <p className="slide-description">
            Then with the team we analyze your project. Together we define the
            time to use in each step and create the <strong>work plan.</strong>
          </p>
        </div>
        <div className="keen-slider__slide number-slide3 slide-content">
        <div className="lottie-content">
            <Lottie
              animationData={calendarAnimation}
              className="lottie-slide"
            />
          </div>
          <h4 className="slide-count">03.</h4>
          <h3 className="slide-title">Strategy</h3>
          <p className="slide-description">
            TWe then determine the{" "}
            <strong>
              best way to strategically meet the goals of your company.
            </strong>
            We build the backbone of your project.
          </p>
        </div>
        <div className="keen-slider__slide number-slide4 slide-content">
        <div className="lottie-content">
            <Lottie
              animationData={calendarAnimation}
              className="lottie-slide"
            />
          </div>
          <h4 className="slide-count">04.</h4>
          <h3 className="slide-title">Let´s work</h3>
          <p className="slide-description">
            We create software with{" "}
            <strong>transparent code and transparent process.</strong> This
            meens that we test each step and you will part of that. Your
            feedback is so important to us.
          </p>
        </div>
        <div className="keen-slider__slide number-slide5 slide-content">
        <div className="lottie-content">
            <Lottie
              animationData={calendarAnimation}
              className="lottie-slide"
            />
          </div>
          <h4 className="slide-count">05.</h4>
          <h3 className="slide-title">Testing</h3>
          <p className="slide-description">
            Testing the final product it’s fundamental to deliver an
            high-quality outcome. Our focus is to deliver{" "}
            <strong>high quality standards in user experience.</strong>
          </p>
        </div>
        <div className="keen-slider__slide number-slide6 slide-content">
        <div className="lottie-content">
            <Lottie
              animationData={calendarAnimation}
              className="lottie-slide"
            />
          </div>
          <h4 className="slide-count">06.</h4>
          <h3 className="slide-title">Ready to world</h3>
          <p className="slide-description">
            When everything is ready, all set to go live,{" "}
            <strong>
              our design team ensures that the final experience meets the
              defined standards
            </strong>
            , original vision and main goal.{" "}
          </p>
        </div>
      </div>
    </>
  );
};
export default ContentRightAbout;
