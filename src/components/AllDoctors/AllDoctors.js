import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useData from '../../hooks/useData';
import SingleDoc from './SingleDoc';
import { BsArrowRight } from "react-icons/bs";


const AllDoctors = () => {
    const { doctors } = useData()

    // console.log(doctors)

    return (
        < div className='my-5'>
            <h3 className='text-primary'>Our Doctors</h3>

            <Row xs={1} md={2} className="container mx-auto my-5 g-4">
                {
                    doctors.map(doctor => <SingleDoc key={doctor.id}
                        doctor={doctor}></SingleDoc>)
                }
            </Row>

            <Button><Link to='/home' className='text-white text-decoration-none p-5'>Go To Home<BsArrowRight /></Link></Button>
        </div >
    );
};

export default AllDoctors;