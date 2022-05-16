import React, { useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContexts";
export default function Reset() {
    const emailRef = useRef();
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const { ForgotPaswword } = useAuth();
    const [error, setError] = useState("");
    async function handleReset(e) {
        e.preventDefault();
        try {
            await ForgotPaswword(emailRef.current.value);
        } catch (error) {
            setError(error.message);
        }

        setLoading(false);
    }
    return (
        <>
            <Card id='card-container-login'>
                <Card.Body>
                    <h2 className='text-center mb-4'>Reset Password</h2>
                    <Form onSubmit={handleReset}>
                        <Form.Group id='email'>
                            <Form.Label>Type in your email</Form.Label>
                            <Form.Control
                                type='email'
                                ref={emailRef}
                                required
                            />
                        </Form.Group>
                        <Button
                            disabled={loading}
                            className='w-100 auth-button'
                            type='submit'
                            style={{ backgroundColor: "#343a40" }}
                        >
                            Send Email to recover password
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}
