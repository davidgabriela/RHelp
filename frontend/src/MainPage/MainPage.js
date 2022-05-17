import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link, Redirect } from "react-router-dom";
import { auth } from "../firebase";
import Navbar from "../Navbar/Navbar";
import "./MainPage.css";

export default function MainPage() {
    const [role, setRole] = useState("/");

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
                        setRole("/guestdash");
                    } else setRole("/hostdash");
                })
                .catch(() => {
                    console.log("Error checking user role!");
                });
        }
    }, []);

    if (auth.currentUser) {
        console.log("Logged in as...", auth.currentUser.email);
        return <Redirect to={role} replace />;
    } else
        return (
            <>
                <Container className='main-container'>
                    <Navbar></Navbar>
                    <Row className='main-row'>
                        <Col lg={12} xl className='main-col main-map'>
                            <Row className="blue"></Row>
                            <Row className="yellow"></Row>
                        </Col>
                        <Col lg={12} xl className='main-col main-hero'>
                            <div className='main-box'>
                                <h1>Housing for refugees</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse malesuada id
                                    nibh vel placerat. Pellentesque pulvinar
                                    tempus lorem eu fringilla.{" "}
                                </p>
                                <Link to='/signup'>
                                    <Button>Get Started</Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        );
}
