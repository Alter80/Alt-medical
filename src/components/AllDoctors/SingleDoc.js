import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CgArrowLongRight } from "react-icons/cg";
import './AllSingleServiceDoc.css';

const SingleServiceDoc = (props) => {
    const { id, category, doc_name, image, schedule, phone, specialty, doctorDetails, fees } = props.doctor

    // console.log(doc_name);

    return (
        <Col >
            <Card className='hover-card h-100 '>
                <div className='d-md-flex align-items-center justify-content-around'>
                    <div>
                        <Card.Img className='p-3 my-4 img-fluid' variant="top" src={image} />
                    </div>

                    <div>
                        <Link className='text-decoration-none text-dark'>
                            <Card.Body>
                                <Card.Title className='text-start'>
                                    <h3 className='fs-4 fw-bold'>{doc_name}</h3>

                                    <small className='category-font text-muted py-5'>{category}</small> <br />
                                    <small className='category-font text-muted py-5'>Speciality: {specialty}</small>
                                </Card.Title>

                                <Card.Text className='text-start'>

                                    {doctorDetails.substring(0, 150)} <CgArrowLongRight className='rounded-pill btn-outline-primary' />
                                </Card.Text>

                                <Card.Text>
                                    <h6 className='text-muted text-start'>Phone: {phone}</h6>
                                    <p className='text-muted text-start'>Phone: {schedule}</p>
                                    <p className='text-start'>Fees: ${fees}</p>
                                </Card.Text>


                            </Card.Body>

                        </Link>
                    </div>
                </div>

                <Link to={`/alldoctors/${id}`} id='button-text' className='text-decoration-none'>
                    <Button variant='btn btn-primary' className='mx-3 my-3 rounded-pill'>Contact Now</Button>
                </Link>

            </Card>
        </Col>
    );
};

export default SingleServiceDoc;