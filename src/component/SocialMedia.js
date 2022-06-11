import React from 'react';
import {FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub} from 'react-icons/fa';
import Fade from 'react-reveal/Fade'
import './scss/SocialMedia.scss';

const SocialMedia = () => {
    return (
        <>
            <div className="fixed-social">
            <div className="social-container">
                <ul>
                    <Fade top delay={100}>
                    <li>
                        <a target='_blank' href="https://www.facebook.com/profile.php?id=100006886423514"><FaFacebookF /></a>
                    </li>
                    </Fade>
                    <Fade top>
                    <li>
                        <a target='_blank' href="https://www.linkedin.com/in/abdul-alim-rakib"><FaLinkedinIn /></a>
                    </li>
                    </Fade>
                    <Fade bottom>
                    <li>
                        <a target='_blank' href='https://twitter.com/AbdulAlimRakib'><FaTwitter /></a>
                    </li>
                    </Fade>
                    <Fade bottom delay={100}>
                    <li>
                        <a target='_blank' href="https://github.com/NO-Alim"><FaGithub /></a>
                    </li>
                    </Fade>
                </ul>
            </div>
        </div>
        </>
    )
}

export default SocialMedia
