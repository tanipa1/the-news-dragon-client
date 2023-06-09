import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const { logInUser } = useContext(AuthContext);

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div>
            <Container className='w-25 mx-auto mt-5 p-2'>
                <h4 className='text-center'>Login Your Account</h4>
                <hr className='w-80' />
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group >
                    <Form.Group>
                        <Button className='w-100 py-1' variant="secondary" size="lg" type="submit">
                            Login
                        </Button>
                    </Form.Group>
                    <Form.Text className="">
                        Dont’t Have An Account ? <Link className='text-danger' to="/register">Register</Link>
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

export default Login;