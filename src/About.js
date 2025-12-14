import Skills from "./Skills";
import './css/about.css';
import aboutInfo from './info/aboutInfo.json';

function About () {
    return (
        <div className="About container" id="about-div">
            <div className="container">
                <div className="about-me mb-5">
                    <h1 className="text-center fw-bold">
                        About Me
                        <hr />
                    </h1>

                    <p className="fw-bold">
                        A Web Developer based in Yangon, Myanmar.
                    </p>
                    <a className="btn btn-dark fw-bold">
                        <span className="fs-5 px-2">
                            Download CV
                        </span>
                        <i className="bi bi-arrow-up-right px-2"></i>
                    </a>
                    
                    <hr />

                    <h2>
                        3 months +
                    </h2>
                    <p>
                        professional experience
                    </p>

                    <hr />

                    <h2>
                        1
                    </h2>
                    <p>
                        project delivered
                    </p>

                    <hr />
                </div>

                <div className="d-flex
                                align-items-center
                                justify-content-center">
                    <div>     
                        <h1 className="text-center fw-bold">
                            Academic Background
                            <hr />
                        </h1>
                        {
                            aboutInfo.map(about => 

                                <div className="each-academic-background mb-5">
                                    <p className="years">{about.years}</p>
                                    <div className="academic-background-descriptions">
                                        <div className="school-img-div">
                                            <img src={about.schoolImg} width={about.imgWidth} alt={about.school}/>
                                        </div>
                                        <div>
                                            <p className="mb-0">{about.school}</p>
                                            <hr className="m-0" />
                                            <p className="mb-0 fw-bold">{about.programName}</p>
                                        </div>  
                                    </div>
                                </div>

                            )
                        } 
                    </div>
                </div>

                <Skills />
            </div>
        </div>
    )
}

export default About;