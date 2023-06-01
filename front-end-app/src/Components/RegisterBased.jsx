import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const RegisterBased = () => {
    return ( 
        <div>
              <div className='container mt-5' style={{ width: '500px'}}>
            <h3 className='mb-5 text-center'> Sign up</h3>
            <>
                <FloatingLabel label="Firstname" className='mb-3'>
                    <Form.Control type="text" placeholder="Firstname" />
                </FloatingLabel>

                <FloatingLabel label="Lastname" className='mb-3'>
                    <Form.Control type="text" placeholder="Lastname" />
                </FloatingLabel>

                <FloatingLabel label="Email" className='mb-3'>
                    <Form.Control type="email" placeholder="Email" />
                </FloatingLabel>

                <FloatingLabel label="Username" className='mb-3'>
                    <Form.Control type="text" placeholder="Username" />
                </FloatingLabel>

                <FloatingLabel label="Password" className='mb-3'>
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>

                <Button variant="outline-success">Register</Button>{' '}
                <Link to='/'> Go Back </Link>
            </>
        </div>
        </div>
     );
}
 
export default RegisterBased;