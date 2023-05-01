import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <Container className='w-25 mx-auto mt-5 p-2'>
                <h4 className='text-center'>Register your account</h4>
                <hr className='w-80' />
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Enter Photo URL" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" name='accept' label="Accept Term & Conditions" />
                    </Form.Group >
                    <Form.Group>
                        <Button className='w-100 py-1' variant="secondary" size="lg">
                            Register
                        </Button>
                    </Form.Group>
                    <Form.Text className="">
                        Already Have An Account ? <Link className='text-danger' to="/login">Login</Link>
                    </Form.Text> <br />
                    <Form.Text className="text-success">
                        
                    </Form.Text> <br />
                    <Form.Text className="text-danger">
                        
                    </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Register;