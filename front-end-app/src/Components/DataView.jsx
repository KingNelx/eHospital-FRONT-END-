import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

const DataView = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [patient, setPatients] = useState([]);

    const loadPatientsData = async () => {
        const result = await axios.get('http://localhost:8080/api/patient/getAllPatients')
        setPatients(result.data)
    }

    useEffect(() => {
        loadPatientsData();
    }, [])

    return (

        <div>
            <Navbar bg="dark" variant="dark" className='shadow-lg'>
                <Navbar.Brand className='mx-5'>HOSPITAL MANAGEMENT SYSTEM</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Navbar>
            <>
                <div className='mx-5 mt-5'>
                    <Button variant="outline-primary" onClick={handleShow}>
                        DASHBOARD
                    </Button>
                </div>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>DASHBOARD</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>TOTAL PATIENTS ADMITTED</Accordion.Header>
                                <Accordion.Body>
                                    TEST
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>TOTAL MILD PATIENTS</Accordion.Header>
                                <Accordion.Body>
                                    TEST
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>TOTAL MODERATE PATIENTS</Accordion.Header>
                                <Accordion.Body>
                                    TEST
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>TOTAL CHRONIC PATIENTS</Accordion.Header>
                                <Accordion.Body>
                                    TEST
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>TOTAL STABLE PATIENTS</Accordion.Header>
                                <Accordion.Body>
                                    TEST
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>TOTAL ACUTE PATIENTS</Accordion.Header>
                                <Accordion.Body>
                                    TEST
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Link to='/'> Log out </Link>
                    </Offcanvas.Body>
                </Offcanvas>
            </>

            <div className='container mt-5 text-center'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Middle Name</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            patient.map((patients, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{patients.firstName}</td>
                                    <td>{patients.lastName}</td>
                                    <td>{patients.middleName}</td>
                                    <td>{patients.address}</td>
                                    <td>
                                        <Button variant="outline-primary">VIEW</Button>{' '}
                                        <Button variant="outline-info">UPDATE</Button>{' '}
                                        <Button variant="outline-danger">DELETE</Button>{' '}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>

            </div>
        </div>

    );
}

export default DataView;