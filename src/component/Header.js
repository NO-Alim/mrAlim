import React from 'react'
import {Link as ScrollLink } from 'react-scroll'
import './scss/Header.scss'

const Header = () => {
    return (
        <>
            <div className="header-container section-container">
                <div className="header">
                    <h5 className="h5">Hello, I'm</h5>
                    <h1 className="heading">Abdul Alim</h1>
                    <h3 className="h3">I Help Designers, Small Agencies And Businesses Bring Their Ideas To Life.</h3>
                    <a href="mailto:abdulalimrakib53@gmail.com" className="btn-btn">Let's Talk</a>
                </div>
                <div className="scroll-prompt">
                    <ScrollLink to="about" spy={true} smooth={true} offset={0} duration={500}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="39.5" height="40" viewBox="0 0 39.5 40">
                            <path className="line-1" fill="none" stroke="#75efff" strokeMiterlimit="10" d="M39.3 16.4L19.8 28.9.3 16.4"/>
                            <path className="line-2" fill="none" stroke="#75efff" strokeMiterlimit="10" d="M32.3 8.4l-12.5 8-12.5-8"/>
                            <path className="line-3" fill="none" stroke="#75efff" strokeMiterlimit="10" d="M25.5.4l-5.7 3.7L14.1.4"/>
                            </svg>
                        </span>
                    </ScrollLink>
                </div>
            </div>
        </>
    )
}

export default Header
