import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import classes from "./MainPage.css";

class MainPage extends React.Component {
    render() {
        return (
            <>
                <Container className='main-container'>
                    <Row className='main-row'>
                        <Col lg={12} xl className='main-col main-map'></Col>
                        <Col lg={12} xl className='main-col main-hero'>
                            <Container>
                                <Row>
                                    <Col></Col>
                                    <Col>
                                        <Button>English</Button>
                                    </Col>
                                    <Col>
                                        <Button variant='link'>FAQ</Button>
                                    </Col>
                                    <Col>
                                        <Button variant='link'>Support</Button>
                                    </Col>
                                    <Col>
                                        <Button>Log In</Button>
                                    </Col>
                                </Row>
                            </Container>
                            <h1>Housing for refugees</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada id nibh
                                vel placerat. Pellentesque pulvinar tempus lorem
                                eu fringilla.{" "}
                            </p>
                            <Button variant='primary'>Primary</Button>{" "}
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default MainPage;
