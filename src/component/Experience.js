import React,{useState} from 'react';
import Fade from 'react-reveal/Fade';
import './scss/Experience.scss';


const ExperienceList = [
    {
        "id": 1,
        "name": "Programming",
        "title": "Programming Skills",
        "skills": [{"HTML": 80},{"CSS": 70},{"Javascript": 50},{"React": 65}]
    },
    {
        "id": 2,
        "name": "Language",
        "title": "Language Skills",
        "skills": [{"Bangla": 95},{"English": 70}]
    },
    {
        "id": 3,
        "name" : "Experience",
        "title": "Job Experience",
        "skills": null
    }
]

const Experience = () => {
    
    const [skill, setSkill] = useState(ExperienceList);
    const [value, setValue] = useState(0);

    const {title, skills} = skill[value];
    
    return (
        <>
            <div className="experience-container section-container">
                <div className="experience">
                    <div className="experience-header">
                        <h3 className="title">Skills</h3>
                    </div>
                    <div className="experience-content">
                        <div className="tab-container">
                            {skill.map((item,ind) => {
                                return(
                                    <button key={ind} onClick={() => setValue(ind)} className={`job-btn ${ind === value && 'active'}`}>{item.name}</button>
                                )
                            })}
                        </div>
                        <article className='job-description'>
                            <h3 className="h3">{title}</h3>
                            <div className="skills">
                                {skills ? skills.map((item,ind) => {
                                    const poperty = Object.keys(item);
                                    const value = Object.values(item);
                                    return(
                                        <div className='skill' key={ind}>
                                            {/* <h5 className="h5">{poperty[0]}</h5> */}
                                            {/* <progress id='file' max='100' value={value[0]}>{value[0]}%</progress> */}
                                            <div className="progress">
                                                <div className="progress-bar" style={{width: `${value[0]}%`}}>
                                                    <Fade left>
                                                    <div className="animated-bar">
                                                        <span>{poperty[0]}</span>
                                                        <span>{value[0]}%</span>
                                                    </div>
                                                    </Fade>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) : <Fade top><h4 className='h4'>I've Not Any Formal Job Experience.</h4></Fade>}
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience
