import UseLottieAnimation from "../components/useLottieAnimation";
import meetingAnimation from "../assets/lotties/first-meeting.json";
import analysisAnimation from "../assets/lotties/analysis.json";
import strategyAnimation from "../assets/lotties/strategy.json";
import workAnimation from "../assets/lotties/work.json";
import testingAnimation from "../assets/lotties/testing.json";
import worldAnimation from "../assets/lotties/ready-world.json";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const ContentRightAbout = () => {
  const containerRef = useRef(null);              
  const { events } = useDraggable(containerRef);
  return (
    <div className="keen-slider" ref={containerRef} {...events}>
      <div className="slide-about-right slide-content">
        <div className="lottie-content-one">
          <UseLottieAnimation
            animationData={meetingAnimation}
            autoplay={true}
            loop={true}
          />
        </div>
        <h4 className="slide-count">01.</h4>
        <h3 className="slide-title">The first meeting</h3>
        <p className="slide-description">
          You bring to us an idea, and the first that we do is a meeting.
          <strong>In this meeting we discover your project</strong> and them we
          analize it with the team to create estimations.
        </p>
        <p className="slide-description">
          Then we make a brief of your project which we see together the scope
          of it.
        </p>
      </div>
      <div className="slide-about-right slide-content">
        <div className="lottie-content-two">
          <UseLottieAnimation
            animationData={analysisAnimation}
            autoplay={true}
            loop={true}
          />
        </div>
        <h4 className="slide-count">02.</h4>
        <h3 className="slide-title">Analysis and estimation</h3>
        <p className="slide-description">
          Then with the team we analyze your project. Together we define the
          time to use in each step and create the
          <strong>work plan.</strong>
        </p>
      </div>
      <div className="slide-about-right slide-content">
        <div className="lottie-content-tree">
          <UseLottieAnimation
            animationData={strategyAnimation}
            autoplay={true}
            loop={true}
          />
        </div>
        <h4 className="slide-count">03.</h4>
        <h3 className="slide-title">Strategy</h3>
        <p className="slide-description">
          TWe then determine the
          <strong>
            best way to strategically meet the goals of your company.
          </strong>
          We build the backbone of your project.
        </p>
      </div>
      <div className="slide-about-right slide-content">
        <div className="lottie-content-four">
          <UseLottieAnimation
            animationData={workAnimation}
            autoplay={true}
            loop={true}
          />
        </div>
        <h4 className="slide-count">04.</h4>
        <h3 className="slide-title">Let´s work</h3>
        <p className="slide-description">
          We create software with
          <strong>transparent code and transparent process.</strong> This meens
          that we test each step and you will part of that. Your feedback is so
          important to us.
        </p>
      </div>
      <div className="slide-about-right slide-content">
        <div className="lottie-content-five">
          <UseLottieAnimation
            animationData={testingAnimation}
            autoplay={true}
            loop={true}
          />
        </div>
        <h4 className="slide-count">05.</h4>
        <h3 className="slide-title">Testing</h3>
        <p className="slide-description">
          Testing the final product it’s fundamental to deliver an high-quality
          outcome. Our focus is to deliver
          <strong>high quality standards in user experience.</strong>
        </p>
      </div>
      <div className="slide-about-right slide-content">
        <div className="lottie-content-six">
          <UseLottieAnimation
            animationData={worldAnimation}
            autoplay={true}
            loop={true}
          />
        </div>
        <h4 className="slide-count">06.</h4>
        <h3 className="slide-title">Ready to world</h3>
        <p className="slide-description">
          When everything is ready, all set to go live,
          <strong>
            our design team ensures that the final experience meets the defined
            standards
          </strong>
          , original vision and main goal.
        </p>
      </div>
    </div>
  );
};
export default ContentRightAbout;
