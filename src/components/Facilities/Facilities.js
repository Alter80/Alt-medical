import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsArrowRightShort } from "react-icons/bs";

const Facilities = () => {
    return (
        <div id='facilities' className='container mx-auto text-start'>
            <h1 className='text-center mt-5 mb-2 fw-bold'>Facilities</h1>
            <hr className='w-25 mb-3 mx-auto' />

            <Row className='mx-auto container mt-5'>
                <Col xs='12' md='4' className='h-100'>
                    <div><img src="https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/icon-1.png" alt="" srcset="" />
                    </div>
                    <div className='mt-3'>
                        <Link className='text-decoration-none' to='/home'><h3 className='fw-bold text-decoration-none'>Lung Diseases<BsArrowRightShort /></h3></Link>
                        <p className='mt-3 text-muted px-5'>Our Hospital is well known for best lung diseases. The Acute Pulmonary Unit is a 24-bed specialty inpatient unit at Inova Fairfax Hospital that provides specialized nursing care for patients with complications of chronic respiratory disease.</p>
                    </div>
                </Col>
                <Col xs='12' md='4' className='h-100'>
                    <div><img src="https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/icon-2.png" alt="" srcset="" />
                    </div>
                    <div className='mt-4 h-50'>
                        <Link className='text-decoration-none' to='/home'><h3 className='fw-bold text-decoration-none'>Heart Diseases<BsArrowRightShort /></h3></Link>
                        <p className='mt-3 text-muted px-5'>Our specialists diagnose and manage full range of heart conditions, and we are fully equipped with state-of-the-art facilities. </p>
                    </div>

                </Col>
                <Col xs='12' md='4' className='h-100'>
                    <div><img src="https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/icon-3.png" alt="" srcset="" />
                    </div>
                    <div className='mt-3'>
                        <Link className='text-decoration-none' to='/home'><h3 className='fw-bold text-decoration-none'>Orthopaedic<BsArrowRightShort /></h3></Link>
                        <p className='mt-3 text-muted px-5'>Our best Orthopedic surgery focuses on the diagnosis, treatment, rehabilitation and prevention of diseases of the bones, joints, ligament, muscles, tendons and nerves.</p>
                    </div>
                </Col>
            </Row>

            <Row className='mx-auto container mt-4'>
                <Col xs='12' md='4' className='h-100'>
                    <div><img src="https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/Column-icon-4.png" alt="" srcset="" />
                    </div>
                    <div className='mt-3'>
                        <Link className='text-decoration-none' to='/home'><h3 className='fw-bold text-decoration-none'>General Surgery<BsArrowRightShort /></h3></Link>
                        <p className='mt-3 text-muted px-5'>Sub Menu. Surgical Centers are designed exclusively for short-stay surgery. A hospital must be staffed and equipped to treat all types of medical problems, providing a much broader range of services.</p>
                    </div>
                </Col>
                <Col xs='12' md='4' className='h-100'>
                    <div><img src="https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/Column-icon5.png" alt="" srcset="" />
                    </div>
                    <div className='mt-3'>
                        <Link className='text-decoration-none' to='/home'><h3 className='fw-bold text-decoration-none'>Best Pharmacy<BsArrowRightShort /></h3></Link>
                        <p className='mt-3 text-muted px-5'>Pharmacists work in this field are responsible for dispensing of medications, quality testing, formulating and re-formulating dosage forms, monitoring and reporting drug safety, and preparing budges for medications.</p>
                    </div>
                </Col>
                <Col xs='12' md='4' className='h-100'>
                    <div><img src="https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/Column-icon6.png" alt="" srcset="" />
                    </div>
                    <div className='mt-3'>
                        <Link className='text-decoration-none' to='/home'><h3 className='fw-bold text-decoration-none'>Sports Injury<BsArrowRightShort /></h3></Link>
                        <p className='mt-3 text-muted px-5'>We provide complete sports related care with an ultimate goal to prevent, treat and rehabilitate sportsmen for all requirements - from pre-participation physicals and injury evaluation to sports nutrition, athletic training and physical therapy.</p>
                    </div>
                </Col>
            </Row>



        </div>
    );
};

export default Facilities;