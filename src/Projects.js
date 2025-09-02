import './css/projects.css';
import projectsInfo from './info/projectsInfo.json';
import achievementsInfo from './info/achievementsInfo.json';

function Projects () {
    return (
        <div className='Projects
                        d-flex
                        justify-content-center
                        align-items-center' 
             id='projects-div'>
            
            <div>
                <h1 className='text-center fw-bold'>
                    My Recent Work
                    <hr />
                </h1>

                <div className='container'>
                    <div className='row'>
                        {
                            projectsInfo.map(project => 
                                <div className='col-lg-6 mb-5'>
                                    <div className='card'>
                                        <img src={project.projectImg} width={399} alt={project.projectName}/>
                                        <h5 className='m-3 project-descriptions'>
                                            {project.projectName}
                                            <br />
                                            {project.language} 
                                            <a href={project.projectLink} className='btn btn-primary'>
                                                {project.buttonText}
                                            </a>
                                        </h5>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                
                
                {/* my achievement */}

                <h1 className='text-center fw-bold'>
                    My Achievement
                    <hr />
                </h1>

                <div className='container'>
                    <div className='row'>
                        {
                            achievementsInfo.map(achievement => 
                                <div className='col mb-5'>
                                    <div className='card'>
                                        <img src={achievement.achievementImg} width={399} alt={achievement.achievementName}/>
                                        <h5 className='m-3 project-descriptions'>
                                            {achievement.achievementName} 
                                            <a href={achievement.achievementLink} className='btn btn-primary'>
                                                {achievement.buttonText}
                                            </a>
                                        </h5>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Projects;