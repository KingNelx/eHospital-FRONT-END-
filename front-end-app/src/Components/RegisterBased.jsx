import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
const RegisterBased = () => {

    const [admin, setAdminAccount] = useState({
       firstname: "",
       lastame: "",
       email: "",
       password: "",
       username: "",
       profile: null
    })

    const {firstname, lastname, email, password, username, profile} = admin
    

    return (
        <div>
            <div className='container mt-5' style={{ width: '500px' }}>
                <h3 className='mb-3 text-center'> Sign up</h3>
                <>
                    <Form>
                        <FloatingLabel label="Firstname" className='mb-3'>
                            <Form.Control type={"text"} placeholder="Firstname" />
                        </FloatingLabel>

                        <FloatingLabel label="Lastname" className='mb-3'>
                            <Form.Control type={"text"} placeholder="Lastname" />
                        </FloatingLabel>

                        <FloatingLabel label="Email" className='mb-3'>
                            <Form.Control type={"email"} placeholder="Email" />
                        </FloatingLabel>

                        <FloatingLabel label="Username" className='mb-3'>
                            <Form.Control type={"text"} placeholder="Username" />
                        </FloatingLabel>

                        <FloatingLabel label="Password" className='mb-3'>
                            <Form.Control type={"password"} placeholder="Password" />
                        </FloatingLabel>

                        <Form.Group controlId="formFileSm" className="mb-3">
                            <Form.Label>Small file input example</Form.Label>
                            <Form.Control type="file" size="sm" />
                        </Form.Group>

                        <Button variant="outline-success">Register</Button>{' '}
                        <Link to='/'> Go Back </Link>
                    </Form>
                </>
            </div>
        </div>
    );
}

export default RegisterBased;