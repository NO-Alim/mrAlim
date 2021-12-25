import React,{ useState, useEffect, useRef} from 'react'
import logo from '../img/logo.png';
import Resume from '../img/Resume.doc';
import { FaDownload, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';
import Headroom from 'react-headroom';
import { useWindowWidth } from '@react-hook/window-size'
import './scss/Navbar.scss';

import Fade from 'react-reveal/Fade';

import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        display: 'flex'
    },
    list: {
        width: 'auto'
    },
    fullList: {
        width: 'auto'
    },
    drawerPaper : {
        width: 'auto',
        background: '#0b162a',
        color: '#e9e9e9'
    }
});

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const menuBtnRef = useRef(null);
    const menuRef = useRef(null);

    const width = useWindowWidth();

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    };

    const toggleDrawerOutClick = (e) => {
        if (e.type === 'keydown' && (e.key === 'Enter' || e.key === 'shift')) {
            setDrawerOpen(false);
        }
    }
    
    const handleClick = (e) => {
        if (!menuBtnRef.current.contains(e.target)) {
            if (!menuRef.current.contains(e.target)) {
                setDrawerOpen(false);
            }
        }
    }

    //for less than medium device

    const mediumWidthDrawerControll = () => {
        if (width > 768) {
            setDrawerOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', toggleDrawerOutClick);
        document.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('keydown', toggleDrawerOutClick);
            document.removeEventListener('click', handleClick);
        }
    });

    useEffect(() => {
        mediumWidthDrawerControll();
        return () => {
            mediumWidthDrawerControll()
        }
    },[width]);

    const classes = useStyles();

    return (
        <>
            <Headroom>
                <nav>
                    <div className="nav-container">
                        <div className="logo-container">
                            <NavLink to="/">
                                <img src={logo} alt="logo" />
                            </NavLink>
                        </div>
                        <div className="link-container">
                            <ul>
                                <Fade left delay={130}>
                                <li>
                                    <ScrollLink to="header" spy={true} smooth={true} offset={-100} duration={500}>Home</ScrollLink>
                                </li>
                                </Fade>
                                <Fade left  delay={110}>
                                <li>
                                    <ScrollLink to="about" spy={true} smooth={true} offset={0} duration={500}>About</ScrollLink>
                                </li>
                                </Fade>
                                <Fade left  delay={90}>
                                <li>
                                    <ScrollLink to="skill" spy={true} smooth={true} offset={0} duration={500}>skill</ScrollLink>
                                </li>
                                </Fade>
                                <Fade left delay={70}>
                                <li>
                                    <ScrollLink to="work" spy={true} smooth={true} offset={0} duration={500}>work</ScrollLink>
                                </li>
                                </Fade>
                                <Fade left delay={50}>
                                <li>
                                    <ScrollLink to="contact" spy={true} smooth={true} offset={0} duration={500}>contact</ScrollLink>
                                </li>
                                </Fade>
                                <Fade left>
                                <li>
                                    <a href={Resume} download='Resume.doc' className="btn-btn">Resume &nbsp; <i><FaDownload /></i></a>
                                </li>
                                </Fade>
                            </ul>
                        </div>
                        <div className="menu-container">
                            <div className={`menu ${drawerOpen ? 'active' : null}`} onClick={() => toggleDrawer()} ref={menuBtnRef}>
                                <span className="menu-bar"></span>
                                <span className="menu-bar"></span>
                                <span className="menu-bar"></span>
                            </div>
                        </div>
                    </div>
                </nav>
            </Headroom>

            <Drawer className={classes.list}
            palette="secondary"
            variant="persistent"
            open={drawerOpen}
            anchor='left'
            classes={{paper: classes.drawerPaper}}
            ref={menuRef}
            >
                <div className="drawer-container">
                    <div className="drawer-btn-container">
                        <button className="close-btn" onClick={() => setDrawerOpen(false)}><FaTimes /></button>
                    </div>
                    <ul>
                        <li>
                            <ScrollLink to='header' spy={true} smooth={true} offset={-100} duration={500} onClick={() => {setDrawerOpen(false)}}>Home</ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to='about' smooth={true} spy={true} offset={-100} duration={500} onClick={() => { setDrawerOpen(false)}}>About</ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to='skill' spy={true} smooth={true} offset={-100} duration={500} onClick={() => {setDrawerOpen(false)}}>Experience</ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to='work' spy={true} smooth={true} offset={-100} duration={500} onClick={() => setDrawerOpen(false)}>Work</ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to='contact' spy={true} smooth={true} offset={-100} duration={500} onClick={() => setDrawerOpen(false)}>Contact</ScrollLink>
                        </li>
                        <li>
                            <a href={Resume} className="btn-btn" download="Resume.doc">Resume</a>
                        </li>
                    </ul>
                </div>
            </Drawer>
        </>
    )
}

export default Navbar
