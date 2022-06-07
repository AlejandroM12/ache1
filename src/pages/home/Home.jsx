import ContainerHeader from "../../components/ContainerHeader";
import ContainerRight from "../../components/ContainerRight";
import Container from "../../layout/Container";
import Header from "../../layout/Header";
import logo from "../../assets/Home/home-design-title.svg";
import ContainerLeft from "../../components/ContainerLeft";
import Lottie from "lottie-react";
import animationData from "../../assets/lotties/animation-home.json";
import arrow from "../../assets/Icons/arrow.svg";
import Icon from "../../components/IconContact";
import CardHomeLeft from "../../components/CardHomeLeft";
import CardHomeRight from "../../components/CardHomeRight";
import { useState } from "react";

const Home = () => {
  const [change, setChange] = useState(false);
  const handleInter = () => {
    setChange(true);
  };
  return (
    <Container >
      <ContainerHeader>
        <Header />
      </ContainerHeader>
      <ContainerLeft>
        {change === false ? (
          <div className="content-left">
            <Lottie animationData={animationData} />
          </div>
        ) : (
          <CardHomeLeft />
        )}
      </ContainerLeft>

      <ContainerRight>
        <div className="logo-home">
          <img src={logo} alt="ache1 logo" />
        </div>
        {change === false ? (
          <>
            <div className="content-right" data-aos="fade-right" data-aos-delay="100" data-aos-easing="ease-in-out">
              <h1>
                You have <br /> an idea?
              </h1>
              <p>
                Bring your idea, we make it happen.
                <br />
                Bring your brand, we make it growth.
              </p>
              <h2>Let´s create</h2>
            </div>
            <button  className="arrow-redir" onClick={handleInter}>
                <img src={arrow} alt="icon arrow" className="arrow" />
            </button>
          </>
        ) : (
          <>
            <CardHomeRight />
          </>
        )}

        <Icon />
      </ContainerRight>
    </Container>
  );
};
export default Home;
