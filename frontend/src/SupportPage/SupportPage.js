import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import Navbar from "../Navbar/Navbar";
import "./SupportPage.css";

export default function MainPage() {

    const emailRef = useRef();
    const nameRef = useRef();
    const msgRef = useRef();
    const [role, setRole] = useState("guest");
    const history = useHistory();

    useEffect(() => {
        if (auth.currentUser) {
            const email = auth.currentUser.email;
            axios
                .get("http://localhost:5000/api/v1/guests")
                .then((response) => {
                    const data = response.data.data;
                    const findGuest = data.filter((item) => {
                        return item.email === email;
                    });
                    if (findGuest.length > 0) {
                        setRole("guest");
                    } else setRole("host");
                })
                .catch(() => {
                    console.log("Error checking user role!");
                });
        }
    }, []);

    function sendMessage(e) {
        e.preventDefault();

        axios
            .post("http://localhost:5000/api/v1/contact",
            {
                "email": emailRef.current.value,
                "name": nameRef.current.value,
                "message": msgRef.current.value
            })
            .then((response) => {
                console.log(response);
                history.push("/");
            })
            .catch(() => {
                console.log("Error sending support message!");
            });
    }


    return (
        
        <div className="supp-page-container">

            <Navbar role={role}></Navbar>
            <div className="blue-half"></div>
            <div className="yellow-half"></div>
            <Card id='card-container-login'>
                <Card.Body className="card-body">
                <h2>How can we help you?</h2>
                <h6>Please write your problem and we will contact you in the shortest time possible.</h6>
                    <Form className="form-container" onSubmit={sendMessage}>
                        <Form.Group id='credentials'>
                            <Form.Label>Full name</Form.Label>
                            <Form.Control
                                ref={nameRef}
                                required
                            />
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='email'
                                ref={emailRef}
                                required
                            />
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea" rows={5}
                                ref={msgRef}
                                required
                            />
                        </Form.Group>

                        <Button
                            variant="primary"
                            type='submit'
                        >
                            Send message
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}
