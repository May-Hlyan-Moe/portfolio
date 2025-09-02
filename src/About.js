import Skills from "./Skills";
import './css/about.css';
import aboutInfo from './info/aboutInfo.json';

function About () {
    return (
        <div className="About container" id="about-div">
            <div>
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

                                <div className="each-academic-background">
                                    <h4 className="years">{about.years}</h4>
                                    <div className="academic-background-descriptions">
                                        <img src={about.schoolImg} width={60} alt={about.school}/>
                                        <div>
                                            <h3 className="mb-0">{about.school}</h3>
                                            <hr className="m-0" />
                                            <h4 className="mb-0 fw-bold">{about.programName}</h4>
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