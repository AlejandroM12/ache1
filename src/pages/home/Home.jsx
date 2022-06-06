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

const Home = () => {

    return (
            <Container>
                <ContainerHeader>
                    <Header />
                </ContainerHeader>
                <ContainerLeft>
                    <div className="content-left">
                    <Lottie 
                        animationData={animationData}
                    />
                    </div>
                    <CardHomeLeft />
                </ContainerLeft>
                
                <ContainerRight>
                    <div className="logo-home">
                    <img src={logo} alt="ache1 logo" />
                    </div>
                    <div className="content-right">
                        <h1>You have <br/> an idea?</h1>
                        <p>Bring your idea, we make it happen.<br/>
                           Bring your brand, we make it growth.</p>
                        <h2>Let´s create</h2>
                    </div>
                    <a href="#" className="arrow-redir">
                    <img src={arrow} alt="icon arrow" className="arrow"/>
                    </a>
                    <Icon />
                </ContainerRight>
            </Container>
    )
}
export default Home;