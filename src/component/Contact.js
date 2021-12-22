import React from 'react'
import './scss/Contact.scss';
import {FaDownload,FaHome,FaEnvelope} from 'react-icons/fa';
import {FiPhoneCall} from 'react-icons/fi';
import Resume from '../img/Resume.doc';

import emailjs from 'emailjs-com';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',

      },
    },
  }));




const Contact = () => {

    const classes = useStyles();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_jcl6uel', 'template_m0sglrh', e.target, 'user_nDIoPLplDujaqXAI38e3t')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }

    return (
        <>
            <div className="contact-container section-container">
                <div className="contact-header">
                    <h3 className="title">Contact</h3>
                </div>
                <div className="contact">
                    <div className="address">
                        <h4 className="h4">Dont't Be Shy!</h4>
                        <p className='contact-text'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>

                        <address>
                            <div className="item">
                                <div className="icon">
                                    <span><i><FaHome /></i></span>
                                </div>
                                <div className="text">
                                    <strong>Address Point</strong>
                                    <span>39 NO. South Halishahar, Chattogram, CTG 400.</span>
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <span><i><FaEnvelope /></i></span>
                                </div>
                                <div className="text">
                                    <strong>Mail Me</strong>
                                    <span><a href="mailto:abdulalimrakib53@gmail.com" className="name"><ins>abdulalimrakib53@gmail.com</ins></a></span>
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <span><i><FiPhoneCall /></i></span>
                                </div>
                                <div className="text">
                                    <strong>Call Me</strong>
                                    <span>+8801537-501420</span>
                                </div>
                            </div>
                        </address>

                        <div className="cv-download">
                            <a href={Resume} download='Resume.doc' className='icon'><i><FaDownload /></i></a>
                            <a href={Resume} download='Resume.doc'>DOWNLOAD CV</a>
                        </div>
                    </div>
                    <div className="mail-form">
                        <form onSubmit={sendEmail}>
                            <h4 className="h4">Get In Touch!</h4>
                            <div className="col-two">
                                <div className="item">
                                    <TextField id="outlined-basic" label="Your Name" variant="outlined" style={{width: '100%'}} name='name' type='text' required/>
                                </div>
                                <div className="item">
                                    <TextField id="outlined-basic" label="Your Email" variant="outlined" style={{width: '100%'}} name='email' type='email' required/>
                                </div>
                            </div>
                            <div className="col-one">
                                <div className='item'>
                                    <TextField id="outlined-basic" label="Your Subject" variant="outlined" style={{width: '100%'}} name='subject' type='text' />
                                </div>
                            </div>
                            <div className="col-one">
                                <div className='item'>
                                <TextField id="outlined-basic" label="Your Message" variant="outlined" style={{width: '100%', minHeight: '200px'}} name='message' type='text' multiline rows={10} required/>
                                </div>
                            </div>
                            <div className="col-one">
                                <div className="item">
                                    <input type="submit" value="submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
