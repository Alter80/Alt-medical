import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsArrowRightShort } from "react-icons/bs";
import './MakeAppointment.css';


const MakeAppointment = () => {

    return (
        <div className='container my-5'>

            <Row className='p-3 justify-content-center'>
                <Col xs lg='6'>
                    <div className='container-fluid'>
                        <h2 className='mx-auto text-center mb-5 fw-bold'>Our Expertise</h2>
                    </div>
                    <div>
                        <div className='d-flex mb-4'>
                            <div>
                                <img src="https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/mediz-icon1.png" alt="" srcset="" height='60' />
                            </div>
                            <div className='container text-start'>
                                <h3>Better Service in town</h3>
                                <p>Drug discovery and drug development are complex and expensive endeavors undertaken</p>
                                <Link className='text-decoration-none text-uppercase' to='/home'>Learn more<BsArrowRightShort /></Link>
                            </div>
                        </div>

                        <div className='d-flex mb-4'>
                            <div>
                                <img src="https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/mediz-icon2.png" alt="" srcset="" height='60' />
                            </div>
                            <div className='container text-start'>
                                <h3>24/7 Expert Doctors</h3>
                                <p>All day, All week experienced and expert doctors and surgeons are standby for your emergencies</p>
                                <Link className='text-decoration-none text-uppercase' to='/home'>Learn more<BsArrowRightShort /></Link>
                            </div>
                        </div>

                        <div className='d-flex mb-4'>
                            <div>
                                <img src="https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/mediz-icon3.png" alt="" srcset="" height='60' />
                            </div>
                            <div className='container text-start'>
                                <h3>Nutrition for better life</h3>
                                <p>Our doctors suggest you to eat healthy more than eating medicines that could lead you to healthy life</p>
                                <Link className='text-decoration-none text-uppercase' to='/home'>Learn more<BsArrowRightShort /></Link>
                            </div>
                        </div>
                    </div>
                </Col>

                {/* Make an appointment */}
                <Col xs lg='6' className='form-bg'>
                    <div className='container mt-5 text-white'>
                        <h3 className='fw-bold'>Make an Appointment</h3>
                        <h4>Emergency? <strong>Call 1-2554-2356-33</strong> </h4>
                    </div>
                    <div className='container mt-5'>
                        <Form>
                            <Row className="mb-3 text-white text-start">
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Your/Patients Name</Form.Label>
                                    <Form.Control type="text" placeholder="Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPhone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Phone Number" />
                                </Form.Group>
                            </Row>


                            <Row className="mb-3 text-white text-start">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="1234 Main St" />
                                </Form.Group>

                            </Row>


                            <Row className="mb-3 text-white text-start">
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Select Category</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Lung</option>
                                        <option>Heart</option>
                                        <option>Orthopedic</option>
                                        <option>Dental</option>
                                        <option>EnT</option>
                                        <option>Medicine</option>
                                        <option>Injury</option>
                                        <option>Flu and Respiratory</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Check
                                        type="checkbox"
                                        id="autoSizingCheck"
                                        className="mt-5 mb-2 text-white"
                                        label="Agree with Terms and Conditions"
                                    />
                                </Form.Group>
                            </Row>

                            <Button className='container-fluid mb-4' variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>

        </div>
    );
};

export default MakeAppointment;