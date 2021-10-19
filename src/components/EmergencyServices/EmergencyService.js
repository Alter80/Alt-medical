import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './EmergencyServices.css'
import { BiTimer, BiTime } from "react-icons/bi";
import { FaAmbulance } from "react-icons/fa";


const EmergencyService = () => {
    return (
        <div className='emergency mt-2 mb-2 container'>
            <Row>
                <Col className="me-2">
                    <div className='container'>
                        <h2 className='text-white'><FaAmbulance /> Emargency Services</h2>
                        <p>An emergency department (ED), also known as an accident and emergency department  emergency room (ER), emergency ward (EW) or casualty department, is a medical treatment.</p> <br />
                        <h3 className='mt-3'>Call : +1-2345-3455-33</h3>
                    </div>
                </Col>
                <Col className="">
                    <div className='container'>
                        <h2 className='text-white'><BiTimer /> Opening hours</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p> <br />
                        <div><span className='me-3'>Mon - Fri</span><span className='ms-3'><BiTime /> 08:00 - 21:00</span> <hr className='w-50 mx-auto' /></div>
                        <div><span className='me-3'>Sat - Sun</span><span className='ms-3'> <BiTime />  08:00 - 19:00</span> <hr className='w-50 mx-auto' /></div>
                    </div>
                </Col>
            </Row>

        </div>
    );
};

export default EmergencyService;