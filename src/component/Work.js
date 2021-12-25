import React from 'react';
import FoodCommerce from '../img/foodcommerce.png';
import PrettyGal from '../img/pretty-gal.png';
import Kallas from '../img/kallas.png';
import Journalist from '../img/jurnalist.png';
import Fitness from '../img/fitness.png';
import FoodBlog from '../img/Food-Blog.png'
import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa';

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import './scss/Work.scss';

const porjects = [
    {
        "id" : 1,
        "des": "Kallas is a e-commerce site Where fetch product data from another site.",
        "img": Kallas,
        "tools": ["HTML","CSS","Javascript","react"],
        "gitLink": "https://github.com/NO-Alim/Kalle_s.git",
        "visitLink": "https://affectionate-borg-346268.netlify.app/"
    },
    {
        "id" : 2,
        "des": "Pretty Gal, This is a e-commerce site i build using React.js",
        "img": PrettyGal,
        "tools": ["HTML","CSS","Javascript","react"],
        "gitLink": "https://github.com/NO-Alim/pretty-gal.git",
        "visitLink": "https://prettygal.netlify.app/"
    },
    {
        "id" : 3,
        "des": "FoodCommerce is a e-commerce site i build using React.js and fetch api.",
        "img": FoodCommerce,
        "tools": ["HTML","CSS","Javascript","react"],
        "gitLink": "https://github.com/NO-Alim/Food-commerce.git",
        "visitLink": "https://food-commerce.netlify.app/"
    },
    {
        "id" : 4,
        "des": "Journalist is a simple portfolio site i build using React.js",
        "img": Journalist,
        "tools": ["HTML","CSS","Javascript","react"],
        "gitLink": "https://journalistportfolio.netlify.app",
        "visitLink": "https://journalistportfolio.netlify.app"
    },
    {
        "id" : 5,
        "des": "This is a fitness web site i build using React.js.",
        "img": Fitness,
        "tools": ["HTML","CSS","Javascript","react"],
        "gitLink": "https://github.com/NO-Alim/Fitness-couch.git",
        "visitLink": "https://fitnesscouch.netlify.app/bookOnline"
    },
    {
        "id" : 6,
        "des": "This is a blog web site i build using React.js.",
        "img": FoodBlog,
        "tools": ["HTML","CSS","Javascript","react"],
        "gitLink": "https://github.com/NO-Alim/react-pro-one.git",
        "visitLink": "https://food-bloger.netlify.app/"
    }
    
]

const Work = () => {


    return (
        <>
            <div className="work-container section-container">
                <div className='work'>
                    <div className="work-header">
                        <h3 className="title">Works</h3>
                    </div>
                    <div className="projects-container">
                        <div className="grid-container">
                            {porjects.map((item,ind) => {
                                return (
                                    <div className="project" key={ind}>
                                        <div className="img-container">
                                            <Zoom>
                                            <img src={item.img} alt="" />
                                            </Zoom>
                                        </div>
                                        <div className="description">
                                            <div className="project-about">
                                                {item.tools.map((tool,toolInd) =>{
                                                    return(
                                                        <Fade right delay={toolInd*50} key={toolInd}><span key={toolInd}>{tool}</span></Fade>
                                                    )
                                                })}
                                            </div>
                                            <div className="title-container">
                                                <Fade top>
                                                <a target='_blink' href={item.visitLink}>
                                                    <h5 className="h5">{item.des}</h5>
                                                </a>
                                                </Fade>
                                            </div>
                                            <div className="btn-container">
                                                <Fade right>
                                                <div className="button">
                                                    <a target='_blink' href={item.gitLink}>
                                                        <span className='text'>GitHub</span>
                                                        <span className='icon'><FaGithub /></span>
                                                    </a>
                                                </div>
                                                </Fade>
                                                <Fade right delay={150}>
                                                <div className="button">
                                                    <a target='_blink' href={item.visitLink}>
                                                        <span className='text'>Visit</span>
                                                        <span className='icon'><FaExternalLinkAlt /></span>
                                                    </a>
                                                </div>
                                                </Fade>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work
