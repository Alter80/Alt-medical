import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';
import { BiTime } from "react-icons/bi";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='footer pb-5'>
            <Row className='pb-2'>
                <Col xs={12} md={3}>
                    <img src='https://i.ibb.co/VSQZdsH/logo.png' alt="" />
                    <strong className='ms-3 text-primary'>Alt-Medic</strong>

                    <div className='d-flex row mt-4 mb-4'>
                        <h4 className='text-muted'>Socials</h4>
                        <Link className='text-muted text-decoration-none mt-1' to="http://"><BsFacebook /><small className='ms-2'>Facebook</small> </Link>
                        <Link className='text-muted text-decoration-none mt-1' to="http://"><BsLinkedin /><small className='ms-2'>Linkedin</small> </Link>
                        <Link className='text-muted text-decoration-none mt-1' to="http://"><BsTwitter /><small className='ms-2'>Twitter</small> </Link>
                    </div>
                </Col>

                <Col xs={12} md={3}>
                    <h2 className='text-white '>Hospital Hours</h2>
                    <div className='text-white my-4'>
                        <span className='me-3'>Mon - Fri</span><span className='ms-3'>
                            <BiTime /> 08:00 - 21:00</span>
                        <hr className='w-50 mx-auto' />
                    </div>

                    <div className='text-white'>
                        <span className='me-3'>Sat - Sun</span>
                        <span className='ms-3'> <BiTime />  08:00 - 19:00</span>
                        <hr className='w-50 mx-auto' />
                    </div>
                </Col>

                <Col xs={12} md={3}>
                    <Link className='text-white text-decoration-none'> <strong><p className='footer-p'>About Alt-Medical</p></strong></Link>
                    <Link className='text-white text-decoration-none'>  <small><p className='footer-p'>Read Our Blog</p></small></Link>
                    <Link className='text-white text-decoration-none'><small><p className='footer-p'>Register For Appointment</p></small></Link>
                    <Link className='text-white text-decoration-none'>  <small><p className='footer-p'>Check for Doctors</p></small></Link>
                </Col>

                <Col xs={12} md={3}>
                    <Link className='text-white text-decoration-none'><small><p className='footer-p'>Get help</p></small></Link>
                    <Link className='text-white text-decoration-none'><small><p className='footer-p'>Read FAQs</p></small></Link>
                    <Link className='text-white text-decoration-none'> <small><p className='footer-p'>View all Branches</p></small></Link>
                    <Link className='text-white text-decoration-none'> <small><p className='footer-p'>Feedback</p></small></Link>
                </Col>

            </Row>
            <Row className='pt-5 copyright'>
                <Col xs={12} md={6}>
                    <Row>
                        <Col xs={12} md={6}>
                            <small><p className='text-muted' >Copyright © 2021 ALT-MEDICAL LTD.</p> </small>
                        </Col>
                    </Row>
                </Col>

                <Col className='mx-5' xs={12} md={4}>
                    <Row>
                        <Col xs={12} md={4}>

                        </Col>
                        <Col xs={12} md={4}>
                            <Link className='text-white text-decoration-none'>Privacy Policy</Link>
                        </Col>
                        <Col xs={12} md={4}>
                            <Link className='text-white text-decoration-none'>Terms of Use</Link>
                        </Col>

                    </Row>
                </Col>



            </Row>

        </div>
    );
};

export default Footer;