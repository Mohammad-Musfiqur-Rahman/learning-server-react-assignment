import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.init';

const auth = getAuth(app)

const Login = () => {
    const googleProvider = new GoogleAuthProvider();

    const googleBtn = () => {
        signInWithPopup(auth, googleProvider)
        .then (result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.error('error', error)
        })
    }
    

    return (
        <div className='border border-5 border-primary'>
            <h1>login page</h1>
            <hr />
            <Form className='container'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
            <br />
            <button onClick={googleBtn}>Google Sign In</button>
        </div>
    );
};

export default Login;