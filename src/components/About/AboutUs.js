import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className='container my-5 '>

            <div>
                <div className='align-item-center m-auto '>
                    <h2>How it all started</h2>
                    <p className='about-p'>Hope was at the forefront of modern medicine when it was first organized as a multi-specialty group practice in 1921. From a small outpatient clinic, it has grown to become the world’s first integrated international health system. With more than 65,000 caregivers worldwide, Hope has almost 6 million patient visits per year, at more than 200 locations.

                    </p>
                </div>
                <Row className='py-5'>
                    <Col xs={12}>
                        <div >
                            <h2 className='my-5'>The story</h2>
                            <p className='about-p' >Alt-Medical Ltd has major campuses in Rochester, Minn.; Scottsdale and Phoenix, Ariz.; and Jacksonville, Fla. The Alt-Medical Ltd Health System has dozens of locations in several states. Thousands of patients from around the world travel to Alt-Medical Ltd locations, and Alt-Medical Ltd's International Patient Offices help ensure that distance and language are not obstacles to receiving world-class care.</p>
                        </div>
                    </Col>


                    <Col><img className='about-image img-fluid' src="https://image.freepik.com/free-psd/high-angle-syringe-with-vial_23-2148552976.jpg" alt="" /></Col>
                </Row>

            </div>


        </div>
    );
};

export default AboutUs;