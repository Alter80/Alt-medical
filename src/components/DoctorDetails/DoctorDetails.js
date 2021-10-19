import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const DoctorDetails = () => {
    let [singleDoctor, setSingleDoc] = useState({});
    let { docid } = useParams();

    const [doctors, setDoctors] = useState([]);

    // data fetched
    useEffect(() => {
        fetch("/docData.json")
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);

    console.log(doctors);
    console.log(typeof (docid))

    // data matched with the useParams id
    useEffect(() => {
        const foundDoctor = doctors.find((doctor) => doctor.id === parseInt(docid));;
        setSingleDoc(foundDoctor);
    }, [doctors]);

    console.log(singleDoctor);


    return (
        <div>
            <Container>
                <Card className="text-center h-100 mt-4 m-5">
                    <Card.Body className='d-md-flex justify-content-between align-items-center'>
                        <Card.Img className='feature-img img-fluid' variant="top" src={singleDoctor?.image} height='400' />

                        <Card.Text className=''>
                            <Card.Title className="mt-5">Dr. {singleDoctor?.doc_name}</Card.Title>
                            <strong className='text-muted my-4'>{singleDoctor?.category}</strong> <br />
                            <p className='text-muted'>Specialist in:<small> {singleDoctor?.specialty}</small></p>
                            <br />
                            <p className='text-start'> <strong className='text-muted'>About Dr. {singleDoctor?.doc_name}:</strong> <br /> {singleDoctor?.doctorDetails}</p>

                            <h6 className='text-center'>Consultation Fees: <span className='text-primary'>${singleDoctor?.fees}</span></h6>
                            <h6 className='text-center mb-3'>Phone: <span className='text-primary'>{singleDoctor?.phone}</span></h6>
                            <p>or email Him at:</p>
                            <h6 className='text-center'><span className='text-primary'>{singleDoctor?.doc_mail}</span></h6>
                        </Card.Text>
                    </Card.Body>


                    <button className='my-button w-75 mx-auto btn-primary mb-1 rounded-pill'>Get An Appointment</button>
                    <Card.Footer>
                        <Card.Text className="text-muted">{singleDoctor?.schedule}</Card.Text>
                        <Card.Text className="text-muted">Takes Day off at: {singleDoctor?.dayOff}</Card.Text>
                    </Card.Footer>
                </Card>
            </Container>
        </div>
    );
};

export default DoctorDetails;
<h1>This is doctor Details</h1>