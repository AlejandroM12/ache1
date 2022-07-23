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
      <div className="slide-about-right slide-content first">
        <div className="lottie-content-one">
          <UseLottieAnimation
            animationData={meetingAnimation}
            autoplay={true}
            loop={true}
          />
        </div>
        <h4 className="slide-count">01.</h4>
        <h3 className="slide-title">First meeting</h3>
        <p className="slide-description">
          You bring us an idea, and the first thing that we do is to arrange a
          meeting.
        </p>
        <p className="slide-description">
          During this step, <span>we discover your project and analyze it</span>{" "}
          with our team to create estimations.
        </p>
        <p className="slide-description">
          Then we make a <span>brief</span> of your project so we see together
          the scope of it.
        </p>
      </div>
      <div className="slide-about-right slide-content second">
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
          Secondly, our team analyzes your project.
        </p>
        <p className="slide-description">
          We define the time to spend during each step and create a{" "}
          <span>working plan.</span>
        </p>
      </div>
      <div className="slide-about-right slide-content third">
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
          Finally, we determine the{" "}
          <span>
            best way to strategically reach the goals of your company.
          </span>{" "}
          We build the backbone of your project.
        </p>
      </div>
      <div className="slide-about-right slide-content fourth">
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
          We create software with{" "}
          <span>transparent code and a transparent process.</span> This means
          that we test each step while you are being part of the process, your
          feedback is really important for us.
        </p>
      </div>
      <div className="slide-about-right slide-content fifth">
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
          outcome. Our focus is to deliver{" "}
          <span>high quality standards for the user experience.</span>
        </p>
      </div>
      <div className="slide-about-right slide-content sixth">
        <div className="lottie-content-six">
          <UseLottieAnimation
            animationData={worldAnimation}
            autoplay={true}
            loop={true}
          />
        </div>
        <h4 className="slide-count">06.</h4>
        <h3 className="slide-title">Ready for the world</h3>
        <p className="slide-description">
          When everything is ready, all setted to go out, our design team
          ensures that the final <span>experience reaches the defined standards,</span> from
          the original vision and main goal.
        </p>
      </div>
    </div>
  );
};
export default ContentRightAbout;
