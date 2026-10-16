import Skills from "./Skills";
import './css/about.scss';
import aboutInfo from './info/aboutInfo.json';

function About () {

    const calculateExperience = () => {
        const startDate = new Date('2026-03-01');
        const currentDate = new Date();
        const totalMonths =
            (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
            (currentDate.getMonth() - startDate.getMonth());
        if (totalMonths <= 0) {
            return '0 months +';
        }
        if (totalMonths < 12) {
            return `${totalMonths} month${totalMonths === 1 ? '' : 's'} +`;
        }
        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;
        if (months === 0) {
            return `${years} year${years === 1 ? '' : 's'} +`;
        }
        return `${years} year${years === 1 ? '' : 's'} and ${months} month${months === 1 ? '' : 's'} +`;
    };
    const experienceText = calculateExperience();

    return (
        <div className="About container" id="about-div">
            <div className="container">
                <div className="about-me mb-5">
                    <h1 className="text-center">
                        About Me
                        <hr />
                    </h1>

                    <p className="fw-bold">
                        A Web Developer based in Yangon, Myanmar.
                    </p>
                    
                    <hr />

                    <h2>
                        {experienceText}
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