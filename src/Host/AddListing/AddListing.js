import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContexts";
import { Link, useHistory  } from "react-router-dom";
import { database } from "../../firebase";
import DisplayImage from "../DisplayImage/DisplayImage";
import FileBase64 from "react-file-base64";
export default function AddListing() {

    const listingTitle = useRef();
    const fullAdress= useRef();
    const accomodationType = useRef();
    const typeofspace = useRef();
    const description = useRef();
    const noofguests = useRef();
    const noofbed = useRef();
    const safetyItems = useRef();
    const extraServices = useRef();
    const addfac = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <>
            <Card id='card-container-signup'>
                <Card.Body>
                    <h2 className="text-center mb-4">Add Listing</h2>
                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form onSubmit={handleSubmit}>

                        <Form.Group id="listingTitle">
                            <Form.Label>Listing Title</Form.Label>
                            <Form.Control type="listingTitle" ref={listingTitle} required />
                        </Form.Group>

                        <Form.Group id="fullAdress" style={{ marginBottom: "20px" }}>
                            <Form.Label>Full Adress</Form.Label>
                            <Form.Control type="fullAdress" ref={fullAdress} required />
                        </Form.Group>

                        <Form.Group id="description" style={{ marginBottom: "20px" }}>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="fullAdress" ref={description} required />
                        </Form.Group>

                        <Form.Group id="accomodation">
                            <Form.Label>Accomodation Type</Form.Label>
                            <Form.Select ref={accomodationType} required>
                                <option>Apartment</option>
                                <option>House</option>
                                <option>Unique space</option>    
                            </Form.Select>
                        </Form.Group>

                        <Form.Group id="group">
                            <Form.Label>Type of space</Form.Label>
                            <Form.Select ref={typeofspace} required>
                                <option>Entire space</option>
                                <option>Private room</option>
                                <option>Shared Room</option>
                            </Form.Select>
                        </Form.Group>
                       
                        <Form.Group id="accomodation">
                            <Form.Label>Number of guests</Form.Label>
                            <Form.Control type="text" pattern="[0-9]*" ref={noofguests} required />
                        </Form.Group>

                        <Form.Group id="accomodation">
                            <Form.Label>Number of bedrooms</Form.Label>
                            <Form.Control type="text" pattern="[0-9]*" ref={noofbed} required />
                        </Form.Group>

                        <Form.Group id="safetyItems">
                            <Form.Label>Safety items</Form.Label>
                            <Form.Select ref={safetyItems}  multiple="true" required>
                                <option>First aid kit</option>
                                <option>Fire extinguisher</option>
                                <option>Smoke alarm</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group id="extraService">
                            <Form.Label>Extra services</Form.Label>
                            <Form.Select ref={extraServices}  multiple="true" required>
                                <option>Medical caret</option>
                                <option>Food</option>
                                <option>Transport</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group id="addfac">
                            <Form.Label>Additional facilities</Form.Label>
                            <Form.Select ref={addfac}  multiple="true" required>
                                <option>Pool</option>
                                <option>Kitchen</option>
                                <option>Air conditioning </option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group id="addfac"> 
                        <Form.Label>Upload image</Form.Label>
                        <DisplayImage/>
                        </Form.Group>
                       
                        <Button disabled={loading} className="w-100 auth-button" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            
            <div className="w-100 text-center mt-2" id='login-check'>
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </>
    )
}