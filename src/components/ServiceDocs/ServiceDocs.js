import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useData from '../../hooks/useData';
import SingleServiceDoc from './SingleServiceDoc';
import { BsArrowRight } from "react-icons/bs";

const ServiceDocs = () => {
    const { doctors } = useData();
    // console.log(doctors);

    // Randomize array index
    const newDoctors = doctors.sort((first, second) => 0.5 - Math.random());

    console.log(newDoctors);

    return (
        < div className='my-5'>
            <h3>Online Doctors for Your Service Right Now</h3>

            <Row xs={1} md={2} className="container mx-auto my-5 g-4">
                {
                    newDoctors.slice(0, 6).map(doctor => <SingleServiceDoc key={doctor.id}
                        doctor={doctor}></SingleServiceDoc>)
                }
            </Row>

            <Button variant="outline-primary"><Link to='/alldoctors' id='button-text' className='text-decoration-none p-5'>See All Doctors <BsArrowRight /></Link></Button>
        </div >
    );
};

export default ServiceDocs;