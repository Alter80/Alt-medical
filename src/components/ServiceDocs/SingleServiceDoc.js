import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CgArrowLongRight } from "react-icons/cg";
import './SingleServiceDoc.css';

const SingleServiceDoc = (props) => {
    const { id, category, doc_name, image, schedule, phone, speciality, doctorDetails, fees } = props.doctor

    // console.log(doc_name);

    return (
        <Col>
            <Card className='hover-card h-100 '>
                <div className='d-md-flex align-items-center justify-content-around'>
                    <div>
                        <Card.Img className='p-3 my-4 img-fluid rounded' src={image} />
                    </div>

                    <div>
                        <Link className='text-decoration-none text-dark'>
                            <Card.Body>
                                <Card.Title className='text-start'>
                                    <h3 className='fs-4 fw-bold'>{doc_name}</h3>

                                    <small className='category-font text-muted py-5'>{category}</small>
                                </Card.Title>

                                <Card.Text className='text-start'>

                                    {doctorDetails.substring(0, 150)} <CgArrowLongRight className='rounded-pill btn-outline-primary' />
                                </Card.Text>

                                <Card.Text>
                                    <h6 className='text-muted text-start'>Phone: {phone}</h6>
                                </Card.Text>


                            </Card.Body>

                        </Link>
                    </div>
                </div>

                <Link to={`/alldoctors/${id}`} id='button-text' className='text-decoration-none'>
                    <Button variant="outline-primary" className='mx-auto my-3 w-50 rounded-pill'>
                        Contact Doctor
                    </Button>
                </Link>

            </Card>
        </Col>
    );
};

export default SingleServiceDoc;