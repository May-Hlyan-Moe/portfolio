import './css/skills.css';
import skillInfo from './info/skillsInfo.json';

const skillsImages = require.context(
  './images/skills',
  false,
  /\.(png|jpe?g|svg|webp)$/   
);

const skills = skillInfo.map(skill => ({
  ...skill,
  imgSrc: skillsImages(`./${skill.imgSrc}`) 
}));

function Skills () {
    return (
        <div className="Skills
                        d-flex
                        justify-content-center
                        align-items-center" 
             id="skills-div">
            
            <div>
                <h1 className='text-center fw-bold'>
                    My Skills
                    <hr />
                </h1>

                <div className='container'>
                    <div className='row'>
                        {
                            skills.map(skill => 
                            <div className='col'>
                                <div className='card'>
                                    <img src={skill.imgSrc} alt={skill.name} />
                                    <p>{skill.name}</p>
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

export default Skills;