import React from 'react';
import {FaHtml5,FaCss3,FaSass,FaJsSquare,FaReact} from 'react-icons/fa';
import author from '../img/alim.jpg';
import Fade from 'react-reveal/Fade'
import './scss/About.scss';

const About = () => {
    return (
        <>
            <div className="about-container section-container">
                <div className="about-header">
                    <h3 className="title">About Me</h3>
                </div>
                <div className="flex-container">
                    <div className="flex-item item-one">
                        <Fade top>
                        <h5 className="h5">Hi, I'm Abdul Alim. I'm a Multi-Talented Human With a Few Years Of Experiences In Front-End-Development. I Help Designers, Small Agencies And Businesses Bring Their Ideas To Life.</h5>
                        </Fade>
                        <Fade top>
                        <p>I Spent The Last Three Years Working As a Front-End-Developer. I Acquired Project and Time Management Skills, As Well As The Ability To Communicate With Team Members And Clients While Effectively Meeting Milestones And Deadlines. I Have Worked On Multiple Of Responsive Web Design And Development Projects Using: Photoshop, Illustrator, HTML, CSS, Scss, JS, and React.</p>
                        </Fade>
                        <Fade top>
                        <p>I am Currently Working From Home. I am Always Available To Discuss Your Project Over The Phone Or Via Whatsapp. These Days I Enjoy Spending My Free Time Photography, Traveling, and Watching Movie.</p>
                        </Fade>
                        <Fade top>
                        <p className='tech-para'>Here are a Few Technologies I've Been Working With Recently :</p>
                        </Fade>
                        <Fade top>
                        <div className="technology-list flex-container">
                            <div className="flex-item item-one">
                                <li><span><FaHtml5/></span> HTML5</li>
                                <li><span><FaCss3/></span> CSS</li>
                                <li><span><FaSass/></span> Scss</li>
                            </div>
                            <div className="flex-item item-two">
                                <li><span><FaJsSquare/></span> JavaScript (ES6+)</li>
                                <li><span><FaReact/></span> React js</li>
                            </div>
                        </div>
                        </Fade>
                    </div>
                    <div className="flex-item item-two">
                        <div className="img-container">
                            <div className="img">
                                <div className="img-card">
                                    <img src={author} alt="alim" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
