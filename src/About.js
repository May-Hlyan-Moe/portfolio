import Skills from "./Skills";
import './css/about.css';
import aboutInfo from './info/aboutInfo.json';

function About () {
    return (
        <div className="About container" id="about-div">
            <div className="container">
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