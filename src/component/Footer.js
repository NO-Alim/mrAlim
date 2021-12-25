import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom'
import './scss/Footer.scss'

const Footer = () => {
    return (
        <footer className='footer-container section-container'>
            <div className="wrapper">
                <Fade left delay={100}>
                <a href='#' className="button">
                    <span className="icon">
                        <i><FaInstagram /></i>
                    </span>
                    <span className="text">Instagram</span>
                </a>
                </Fade>

                <Fade left>
                <a target='_blank' href="https://www.facebook.com/NoAlimJr/" className="button">
                    <span className="icon">
                        <i><FaFacebookF /></i>
                    </span>
                    <span className="text">Facebook</span>
                </a>
                </Fade>

                <Zoom>
                <a href='#' className="button">
                    <span className="icon">
                        <i><FaTwitter /></i>
                    </span>
                    <span className="text">Twitter</span>
                </a>
                </Zoom>

                <Fade right>
                <a target='_blank' href="https://www.linkedin.com/in/abdul-alim-rakib" className="button">
                    <span className="icon">
                        <i><FaLinkedinIn /></i>
                    </span>
                    <span className="text">LinkedIn</span>
                </a>
                </Fade>

                <Fade right delay={100}>
                <a target='_blank' href="https://github.com/NO-Alim" className="button">
                    <span className="icon">
                        <i><FaGithub /></i>
                    </span>
                    <span className="text">Github</span>
                </a>
                </Fade>
            </div>
            <p>Designed & Build by Abdul Alim.</p>
        </footer>
    )
}

export default Footer
