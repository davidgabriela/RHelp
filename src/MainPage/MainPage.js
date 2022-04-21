import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./MainPage.css";

class MainPage extends React.Component {
    render() {
        // if (auth.currentUser) {
        //     console.log("auth", auth.currentUser);
        //     return <Redirect to='/' replace />;
        // } else
        return (
            <>
                <Container className='main-container'>
                    <Navbar></Navbar>
                    <Row className='main-row'>
                        <Col lg={12} xl className='main-col main-map'></Col>
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
}

export default MainPage;
