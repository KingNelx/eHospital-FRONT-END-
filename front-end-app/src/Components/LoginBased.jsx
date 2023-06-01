import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const LoginBased = () => {
    return (
        <div className='container mt-5' style={{ width: '500px'}}>
            <h3 className='mb-5 text-center'> Sign in to your account </h3>
            <>
                <FloatingLabel label="Email" className='mb-3'>
                    <Form.Control type="email" placeholder="Email" />
                </FloatingLabel>

                <FloatingLabel label="Username" className='mb-3'>
                    <Form.Control type="text" placeholder="Username" />
                </FloatingLabel>

                <FloatingLabel label="Password" className='mb-3'>
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>

                <Link to='/all-data'><Button variant="outline-success">Sign in</Button>{' '}</Link>
                <Link to='/sign-up'> No Account? </Link>
            </>
        </div>
    );
}

export default LoginBased;