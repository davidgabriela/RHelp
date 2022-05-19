import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContexts";
import Navbar from "../../Navbar/Navbar";
import "./Login.css";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const history = useHistory();
    const { login } = useAuth();

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/v1/guests")
            .then((response) => {
                setData(response.data.data);
            })
            .catch(() => {
                console.log("Error retrieving guests!");
            });
    }, []);

    function checkUser(email) {
        const findGuest = data.filter((item) => {
            return item.email === email;
        });
        if (findGuest.length > 0) {
            return true;
        } else return false;
    }

    function handleLogIn(e) {
        e.preventDefault();

        handleSubmit(e);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            if (checkUser(emailRef.current.value)) {
                history.push("/guestdash");
            } else {
                history.push("/hostdash");
            }
        } catch (error) {
            setError(error.message);
        }

        setLoading(false);
    }

    return (
        <>
            <div className="blue-half"></div>
            <div className="yellow-half"></div>
            <div className="page-container">
                <Navbar role="guest"></Navbar>
                <div className="login-container">
                    <Card id='card-container-login'>
                        <Card.Body className="card-body">
                            <h2 className='text-center mb-4'>Login</h2>
                            {error && <Alert variant='danger'>{error}</Alert>}

                            <Form className="form-container" onSubmit={handleLogIn}>
                                <Form.Group id='credentials'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type='email'
                                        ref={emailRef}
                                        required
                                    />
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type='password'
                                        ref={passwordRef}
                                        required
                                    />
                                </Form.Group>

                                <Button
                                    variant="primary"
                                    type='submit'
                                >
                                    Login
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>

                    <div className='w-100 text-center mt-2'>
                        Need an account? <Link to='/signup'>Register</Link>
                    </div>
                    <div className='w-100 text-center mt-2'>
                        Forgot password? <Link to='/resetpawssord'>Reset password</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
