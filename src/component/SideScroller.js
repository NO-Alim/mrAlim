import React from 'react';
import {Link as ScrollLink} from 'react-scroll';
import './scss/SideScroller.scss';

const SideScroller = () => {
    return (
        <div className="sideScroller">
            <ul>
                <li>
                    <ScrollLink to="header" spy={true} smooth={true} offset={-100} duration={500}></ScrollLink>
                </li>
                <li>
                    <ScrollLink to="about" spy={true} smooth={true} offset={-100} duration={500}></ScrollLink>
                </li>
                <li>
                    <ScrollLink to="skill" spy={true} smooth={true} offset={-100} duration={500}></ScrollLink>
                </li>
                <li>
                    <ScrollLink to="work" spy={true} smooth={true} offset={-100} duration={500}></ScrollLink>
                </li>
                <li>
                    <ScrollLink to="contact" spy={true} smooth={true} offset={-100} duration={500}></ScrollLink>
                </li>
            </ul>
        </div>
    )
}

export default SideScroller
