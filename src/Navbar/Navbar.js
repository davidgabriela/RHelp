import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Nav from "react-bootstrap/Nav";
import { useAuth } from "../contexts/AuthContexts";
import { auth } from "../firebase";
import "./Navbar.css";

export default function BootstrapNavbar(props) {
    const { logout } = useAuth();
    const [error, setError] = useState("");

    async function handleLogout() {
        try {
            await logout();
        } catch {
            setError("Failed to log out");
        }
    }

    var authButton = (user) => {
        if (user != null) {
            console.log("Logged in as", user.email);
            return (
                <Nav.Item>
                    <Nav.Link href='/' onClick={handleLogout}>
                        <Button variant='primary'>Log Out</Button>
                    </Nav.Link>
                </Nav.Item>
            );
        } else
            return (
                <Nav.Item>
                    <Nav.Link href='/login'>
                        <Button variant='primary'>Log In</Button>
                    </Nav.Link>
                </Nav.Item>
            );
    };

    return (
        <Navbar id='navbar-container' bg='dark' variant='dark' sticky='top'>
            <Navbar.Brand href='/'>React-Bootstrap</Navbar.Brand>
            <Nav>
                {props.role === "host" ? (
                    <Nav.Item>
                        <Nav.Link href='/addlisting'>
                            <Button variant='outline-light'>Add Listing</Button>
                        </Nav.Link>
                    </Nav.Item>
                ) : (
                    <div></div>
                )}
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
                        <Button variant='outline-light'>FAQ</Button>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Button variant='outline-light'>Support</Button>
                    </Nav.Link>
                </Nav.Item>
                {authButton(auth.currentUser)}
            </Nav>
        </Navbar>
    );
}
