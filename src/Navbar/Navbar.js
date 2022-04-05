import "./Navbar.css";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export default function BootstrapNavbar() {
    const [error, setError] = useState("");
    let email = undefined;
    async function handleLogout() {
        setError("");
    }
    return (
        <div>
            <div className='row'>
                <div className='col-md-12' id='navbar-container'>
                    <Router>
                        <Navbar
                            className='navbar-container'
                            bg='dark'
                            variant='dark'
                            expand='lg'
                            sticky='top'
                        >
                            <Navbar.Brand href='/'>
                                React-Bootstrap
                            </Navbar.Brand>
                            <Nav className='justify-content-end'>
                            <Nav.Item>
                                    <Nav.Link href='/addlisting'>
                                        <Button variant='outline-light'>
                                            Add Listing
                                        </Button>
                                    </Nav.Link>
                                </Nav.Item>
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
                                    <Nav.Link href='/login'>
                                        <Button variant='primary'>
                                            Log In
                                        </Button>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar>
                    </Router>
                </div>
            </div>
        </div>
    );
}
