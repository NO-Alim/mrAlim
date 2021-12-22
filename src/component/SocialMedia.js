import React from 'react';
import {Link} from 'react-router-dom'
import {FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub} from 'react-icons/fa';
import './scss/SocialMedia.scss';

const SocialMedia = () => {
    return (
        <>
            <div className="fixed-social">
            <div className="social-container">
                <ul>
                    <li>
                        <a target='_blank' href="https://www.facebook.com/NoAlimJr/"><FaFacebookF /></a>
                    </li>
                    <li>
                        <a target='_blank' href="www.linkedin.com/in/abdul-alim-rakib"><FaLinkedinIn /></a>
                    </li>
                    <li>
                        <a href=''><FaTwitter /></a>
                    </li>
                    <li>
                        <a target='_blank' href="https://github.com/NO-Alim"><FaGithub /></a>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default SocialMedia
