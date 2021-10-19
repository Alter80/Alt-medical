import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <Container>
            <div className='py-5'>
                <h1>Contact Us</h1>
                <h3>Commonly Requested Information</h3>
                <ul className='digi-care text-start py-3'>
                    <li>Billing (866) 433–4035</li>
                    <li>Financial Counseling (415) 353-1966</li>
                    <li>Health Insurance</li>
                    <li>Information Desk (415) 353-1664</li>
                    <li>International Patients (415) 353-8489 or email ims@ucsf.edu</li>
                    <li>Lodging (415) 353-2016</li>
                    <li>Maps and Directions</li>
                    <li>Medical Records (415) 353-2221</li>
                    <li>Patient Relations (415) 353-1936 or email patient.relations@ucsf.edu</li>
                    <li>Primary Care Providers (PCP)</li>
                </ul>
                <p className='py-5'>If you still have a question about Hope Medical Center, please complete the form below. Please keep in mind that we cannot release information about patients in our hospitals and cannot give medical advice.

                    For feedback regarding your experience with Hope Medical Center, please contact Patient Relations.</p>


                <div className="row">

                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body rounded-pill">
                                <h5 className="card-title text-center">FeedBack Form</h5>
                                <form className="form-signin">
                                    <div className="form-label-group">
                                        <input type="text" id="inputEmail" className="text-center form-control p-2 mb-3 rounded-pill" placeholder="Your Name" />
                                    </div>

                                    <div className="form-label-group">
                                        <input type="email" id="inputEmail" className="text-center form-control p-2 rounded-pill" placeholder="Email address" />
                                    </div>

                                    <Form.Group className="mb-3 rounded" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label className='mt-2'>Your Question or Suggestion</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>

                                    <Button className="btn btn-lg btn-primary btn-block text-uppercase rounded" type="submit" >Submit</Button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ContactUs;