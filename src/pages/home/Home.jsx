import { useState, useEffect } from "react";
import { useViewport } from "../../context/viewportContext";
import Container from "../../layout/Container";
import ContainerRight from "../../components/ContainerRight";
import Header from "../../layout/Header";
import LogoHome from "../../components/LogoHome";
import logoTitle from "../../assets/Home/home-design-title.svg";
import ContainerLeft from "../../components/ContainerLeft";
import UseLottieAnimation from "../../components/useLottieAnimation";
import animationData from "../../assets/lotties/animation-home.json";
import arrow from "../../assets/Icons/arrow.svg";
import Icon from "../../components/IconContact";
import CardHomeLeft from "../../components/CardHomeLeft";
import CardHomeRight from "../../components/CardHomeRight";
import logoHome from "../../assets/Home/ache1-logo.svg";
import logoMobile from "../../assets/Icons/logo-mobile.svg";
import Navbar from "../../components/Navbar";
import ContainerMobileHome from "../../layout/ContainerMobileHome";


const Home = ({ pivot, setPivot }) => {
  const [change, setChange] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { width } = useViewport();
  const breakpoint = 421;
  const handleInter = () => {
    setScrolled(true);
    setTimeout(() => {
      setChange(true);
    }, 500);
  };

  const handleScroll = (e) => {
    const wDelta = e.wheelDelta < 0 ? "down" : "up";
    setScrolled(wDelta === "down");
    if (wDelta === "down") {
      setTimeout(() => {
        setChange(true);
        setScrolled(false);
      }, 500);
    }
  };

  useEffect(() => {
    window.addEventListener("mousewheel", handleScroll);
    return () => window.removeEventListener("mousewheel", handleScroll);
  }, []);

  return width > breakpoint ? (
    <Container>
      <Header>
        <LogoHome logo={logoHome} onClick={() => setChange(false)} to="/" />
        <Navbar />
      </Header>

      <ContainerLeft>
        <div className="logo-home">
          <img src={logoTitle} alt="ache1 title" />
        </div>
        {change === false ? (
          <>
          <div className="content-left" data-aos="fade-up">
            <UseLottieAnimation
              animationData={animationData}
              autoplay={true}
              loop={true}
            />
          </div>
          
          </>
        ) : (
          <CardHomeLeft />
        )}
      </ContainerLeft>

      <ContainerRight>
        {!change ? (
          <>
            <div className="content-right">
              <h1
                data-aos="fade-right"
                data-aos-delay="750"
                data-aos-easing="ease-in-out"
              >
                You have
              </h1>
              <h1
                className="content-right-title-two"
                data-aos="fade-right"
                data-aos-delay="1500"
                data-aos-easing="ease-in-out"
              >
                an idea?
              </h1>
              <p
                data-aos="fade-right"
                data-aos-delay="2000"
                data-aos-easing="ease-in-out"
              >
                Bring your idea, we make it happen.
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="2500"
                data-aos-easing="ease-in-out"
              >
                Bring your brand, we make it growth.
              </p>
              <h2
                className="content-right-title-tree"
                data-aos="fade-right"
                data-aos-delay="3000"
                data-aos-easing="ease-in-out"
              >
                Let´s create
              </h2>
              <div
              style={{
                transitionDuration: "500ms",
                transform: `translateY(${scrolled ? 100 : 0}px)`,
                opacity: scrolled ? 0.5 : 1,
              }}
              className="content-down-arrow"
            >
              <button className="arrow-redir" onClick={handleInter}>
                <img src={arrow} alt="icon arrow" className="arrow" />
              </button>
            </div>
            </div>
            
          </>
        ) : (
          <>
            <CardHomeRight />
          </>
        )}
      </ContainerRight>
        <Icon size={45} color="white" />
    </Container>
  ) : (
    <Container>
      <Header>
        <LogoHome logo={logoMobile} onClick={() => setChange(false)} to="/" />
        <Navbar />
      </Header>
      {!change ? (
        <>
          <ContainerLeft>
            
            <div className="content-left" data-aos="fade-up">
              <UseLottieAnimation
                animationData={animationData}
                autoplay={true}
                loop={true}
              />
            </div>
          </ContainerLeft>
          <ContainerRight>
            <div className="content-right">
              <h1
                data-aos="fade-right"
                data-aos-delay="750"
                data-aos-easing="ease-in-out"
              >
                You have
              </h1>
              <h1
                className="content-right-title-two"
                data-aos="fade-right"
                data-aos-delay="1500"
                data-aos-easing="ease-in-out"
              >
                an idea?
              </h1>
              <p
                data-aos="fade-right"
                data-aos-delay="2000"
                data-aos-easing="ease-in-out"
              >
                Bring your idea, we make it happen.
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="2500"
                data-aos-easing="ease-in-out"
              >
                Bring your brand, we make it growth.
              </p>
              <h2
                className="content-right-title-tree"
                data-aos="fade-right"
                data-aos-delay="3000"
                data-aos-easing="ease-in-out"
              >
                Let´s create
              </h2>
            </div>
            <div
              style={{
                transitionDuration: "500ms",
                transform: `translateY(${scrolled ? 100 : 0}px)`,
                opacity: scrolled ? 0.5 : 1,
              }}
              className="content-down-arrow"
            >
              <button className="arrow-redir" onClick={handleInter}>
                <img src={arrow} alt="icon arrow" className="arrow" />
              </button>
            </div>
          </ContainerRight>
        </>
      ) : (
        <>
          <ContainerMobileHome />
        </>
      )}
        <Icon size={45} color="#6C63FF" fill="#6C63FF" />
    </Container>
  );
};
export default Home;
