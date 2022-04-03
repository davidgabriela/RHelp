import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
export default function BootstrapNavbar() {
    const [error, setError] = useState("")
    let email = undefined;
    async function handleLogout() {
        setError("");
    }
    return(
        <div>
        <div className="row">
            <div className="col-md-12" id='navbar-container'>
                <Router>
                    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                        <Navbar.Brand href="#home">QResent</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto">
                                    <Nav.Link href="/guestdash">Dashboard</Nav.Link>) :
                                    <Nav.Link href="/login" onClick={handleLogout}>Log Out</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                    </Navbar>
                </Router>
            </div>
        </div>
    </div>
        )
}