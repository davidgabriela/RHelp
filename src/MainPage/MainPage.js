import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import classes from "./MainPage.css";

class MainPage extends React.Component {
    render() {
        return (
            <>
                <Container className='main-container'>
                    <Row className='main-row'>
                        <Col lg={12} xl className='main-col main-map'></Col>
                        <Col lg={12} xl className='main-col main-hero'>
                            <Nav
                                className='justify-content-end navigation'
                                activeKey='/home'
                            >
                                <Nav.Item>
                                    <Nav.Link href=''>
                                        <DropdownButton
                                            id='dropdown-basic-button'
                                            title='English'
                                        >
                                            <Dropdown.Item href='#/action-1'>
                                                French
                                            </Dropdown.Item>
                                            <Dropdown.Item href='#/action-2'>
                                                German
                                            </Dropdown.Item>
                                            <Dropdown.Item href='#/action-3'>
                                                Italian
                                            </Dropdown.Item>
                                        </DropdownButton>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <Button variant='outline-light'>
                                            FAQ
                                        </Button>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <Button variant='outline-light'>
                                            Support
                                        </Button>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                        <Button variant='primary'>
                                            Log In
                                        </Button>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <div className='main-box'>
                                <h1>Housing for refugees</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse malesuada id
                                    nibh vel placerat. Pellentesque pulvinar
                                    tempus lorem eu fringilla.{" "}
                                </p>
                                <Button variant='primary'>Get Started</Button>{" "}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default MainPage;
