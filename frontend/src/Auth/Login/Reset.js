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
        <div className="page-container">
            <div className="login-container">
                <Card id='card-container-login'>
                    <Card.Body className="card-body">
                        <h2 className='text-center mb-4'>Reset Password</h2>
                        <Form className="form-container" onSubmit={handleReset}>
                            <Form.Group id='credentials'>
                                <Form.Label>Recovery email</Form.Label>
                                <Form.Control
                                    type='email'
                                    ref={emailRef}
                                    required
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                type='submit'
                            >
                                Send Email to recover password
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
