import { useState } from "react";
import { Link } from "react-router-dom";
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
import Navbar from "../../components/Navbar";

const Home = ({ pivot, setPivot }) => {
  const [change, setChange] = useState(false);
  const handleInter = () => {
    setChange(true);
  };

  return (
    <>
      <Container>
        <Header>
          <LogoHome
            logo={logoHome}
          />
          <Navbar pivot={pivot} setPivot={setPivot} />
        </Header>
        <ContainerLeft>
          <div className="logo-home">
            <img src={logoTitle} alt="ache1 logo" />
          </div>
          {change === false ? (
            <div className="content-left" data-aos="fade-up">
              <UseLottieAnimation
                animationData={animationData}
                autoplay={true}
                loop={true}
              />
            </div>
          ) : (
            <CardHomeLeft />
          )}
        </ContainerLeft>

        <ContainerRight>
          {change === false ? (
            <>
              <div className="content-right">
                <h1
                  data-aos="fade-right"
                  data-aos-delay="1000"
                  data-aos-easing="ease-in-out"
                >
                  You have <br /> an idea?
                </h1>
                <p
                  data-aos="fade-right"
                  data-aos-delay="2000"
                  data-aos-easing="ease-in-out"
                >
                  Bring your idea, we make it happen.
                  <br />
                  Bring your brand, we make it growth.
                </p>
                <h2
                  data-aos="fade-right"
                  data-aos-delay="3000"
                  data-aos-easing="ease-in-out"
                >
                  LetÂ´s create
                </h2>
              </div>
              <button
                className="arrow-redir"
                onClick={handleInter}
                data-aos="fade-up"
                data-aos-delay="4000"
                data-aos-easing="ease-in-out"
              >
                <img src={arrow} alt="icon arrow" className="arrow" />
              </button>
            </>
          ) : (
            <>
              <CardHomeRight />
            </>
          )}
        </ContainerRight>
        <Link to="/" className="icon-contact">
          <Icon size={45} color="white" />
        </Link>
      </Container>
    </>
  );
};
export default Home;