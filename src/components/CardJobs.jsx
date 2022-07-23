import UseLottieAnimation from "../components/useLottieAnimation";
import jobsAnimation from "../assets/lotties/jobs-animation.json";

const CardJobs = () => {
    return (
        <div className="card-job">
            <div className="card-job-container-left">
                <div className="card-job-content-left">
                    <p className="card-job-join">Join us!</p>
                    <h2 className="card-job-title">Dev Code Challenge</h2>
                    <div className="card-job-lottie-container">
                        <UseLottieAnimation animationData={jobsAnimation} loop={true} autoplay={true}/>
                    </div>
                    <p className="card-job-steps">1. Read steps</p>
                    <p className="card-job-steps">2. Make it real with <a href="https://www.figma.com/file/6AY04ICrsFClNrBgSAQhoq/Dev-Code-Challenge?node-id=297%3A4" target="_blank" rel="noreferrer noopener">figma prototipe</a></p>
                </div>
            </div>
        </div>
    )
}
export default CardJobs;