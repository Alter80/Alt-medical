import React from 'react';
import { Button } from 'react-bootstrap';
import { Router } from 'react-router';
import EmergencyService from '../EmergencyServices/EmergencyService';
import Facilities from '../Facilities/Facilities';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import ServiceDocs from '../ServiceDocs/ServiceDocs';
import './Home.css'


const Home = () => {
    return (
        <div>
            <div id='img_container'>
                <img className='img-fluid' src="https://i.ibb.co/6tPpqNr/wepik-2021918-32637.png" alt="" srcset="" />
                <Button className='button' variant="primary" size="lg">
                    Contact Now!!!
                </Button>{' '}
            </div>

            <EmergencyService></EmergencyService>
            <ServiceDocs></ServiceDocs>
            <Facilities></Facilities>
            <MakeAppointment></MakeAppointment>

        </div>
    );
};

export default Home;