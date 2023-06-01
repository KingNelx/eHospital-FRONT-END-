import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

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
                <Button variant="primary" onClick={handleShow}>
                    Launch
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Some text as placeholder. In real life you can have the elements you
                        have chosen. Like, text, images, lists, etc.
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