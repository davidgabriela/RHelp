import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContexts";
import "./SignUp.css";

export default function SignUp() {
    const roleRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function sendData() {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: emailRef.current.value }),
        };

        fetch(
            `http://localhost:5000/api/v1/${
                roleRef.current.value.toLowerCase() + "s"
            }`,
            requestOptions
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match");
        }

        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            sendData();
            history.push("/");
        } catch (error) {
            setError(error.message);
        }

        setLoading(false);
    }

    return (
        <>
            <Card id='card-container-signup'>
                <Card.Body>
                    <h2 className='text-center mb-4'>Sign Up</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}

                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='email'
                                ref={emailRef}
                                required
                            />
                        </Form.Group>

                        <Form.Group id='group'>
                            <Form.Label>Role</Form.Label>
                            <Form.Select ref={roleRef} required>
                                <option>Host</option>
                                <option>Guest</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                ref={passwordRef}
                                required
                            />
                        </Form.Group>

                        <Form.Group
                            id='password-confirm'
                            style={{ marginBottom: "20px" }}
                        >
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control
                                type='password'
                                ref={passwordConfirmRef}
                                required
                            />
                        </Form.Group>

                        <Button
                            disabled={loading}
                            className='w-100 auth-button'
                            type='submit'
                        >
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

            <div className='w-100 text-center mt-2' id='login-check'>
                Already have an account? <Link to='/login'>Log In</Link>
            </div>
        </>
    );
}
