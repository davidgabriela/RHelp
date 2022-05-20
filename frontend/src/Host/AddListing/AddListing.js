import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import firebase from "../../firebase";
import Navbar from "../../Navbar/Navbar";
import DisplayImage from "../DisplayImage/DisplayImage";
import './AddListing.css';

export default function AddListing() {
    const listingTitle = useRef();
    const fullAdress = useRef();
    const phoneNumber = useRef();
    const accomodationType = useRef();
    const typeofspace = useRef();
    const description = useRef();
    const noofguests = useRef();
    const noofbed = useRef();
    const [safetyItems, setSafetyItems] = useState([]);
    const [extraServices, setExtraServices] = useState([]);
    const [addfacilities, setAddFacilities] = useState([]);
    const [photoUrl, setPhotoUrl] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const sendData = (body) => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        };

        fetch(`http://localhost:5000/api/v1/listings`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });

            history.push("/hostdash");
    };

    const handleSafetyItemsChange = (e) => {
        let target = e.target;
        let value = Array.from(
            target.selectedOptions,
            (option) => option.value
        );
        setSafetyItems(value);
    };

    const handleExtraServicesChange = (e) => {
        let target = e.target;
        let value = Array.from(
            target.selectedOptions,
            (option) => option.value
        );
        setExtraServices(value);
    };

    const handleAddFacilitiesChange = (e) => {
        let target = e.target;
        let value = Array.from(
            target.selectedOptions,
            (option) => option.value
        );
        setAddFacilities(value);
    };

    async function handleSubmit(e) {
        e.preventDefault();
        const req_body = {
            owner_email: firebase.auth().currentUser.email,
            owner_phone: phoneNumber.current.value,
            title: listingTitle.current.value,
            description: description.current.value,
            address: fullAdress.current.value,
            accomodation_type: accomodationType.current.value,
            type_space: typeofspace.current.value,
            number_guests: noofguests.current.value,
            number_bedrooms: noofbed.current.value,
            extra_services: extraServices,
            additional_facilities: addfacilities,
            photo: photoUrl,
        };
        
        console.log(req_body);
        sendData(req_body);
    }

    const onImgUpload = (url) => {
        setPhotoUrl(url);
    };

    return (
        <div className="add-listing-container">
            <Navbar></Navbar>
            <div className="login-container">
                <Card className="card-container-add-listing">
                    <Card.Body className="card-body-add-listing">
                        <h2 className='text-center mb-4'>Add Listing</h2>
                        {error && <Alert variant='danger'>{error}</Alert>}

                        <Form className="form-add-listing" onSubmit={handleSubmit}>
                            <Form.Group id='listing'>
                                <Form.Label>Listing Title</Form.Label>
                                <Form.Control
                                    type='listingTitle'
                                    ref={listingTitle}
                                    required
                                />

                                <Form.Label>Full Adress</Form.Label>
                                <Form.Control
                                    type='fullAdress'
                                    ref={fullAdress}
                                    required
                                />

                                <Form.Label>Contact Phone Number</Form.Label>
                                <Form.Control
                                    type='phoneNumber'
                                    ref={phoneNumber}
                                    required
                                />
                            
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    type='fullAdress'
                                    ref={description}
                                    required
                                />
                            
                                <Form.Label>Accomodation Type</Form.Label>
                                <Form.Select ref={accomodationType} required>
                                    <option>Apartment</option>
                                    <option>House</option>
                                    <option>Unique space</option>
                                </Form.Select>
                            
                                <Form.Label>Type of space</Form.Label>
                                <Form.Select ref={typeofspace} required>
                                    <option>Entire space</option>
                                    <option>Private room</option>
                                    <option>Shared Room</option>
                                </Form.Select>
                            
                                <Form.Label>Number of guests</Form.Label>
                                <Form.Control
                                    type='text'
                                    pattern='[0-9]*'
                                    ref={noofguests}
                                    required
                                />
                            
                                <Form.Label>Number of bedrooms</Form.Label>
                                <Form.Control
                                    type='text'
                                    pattern='[0-9]*'
                                    ref={noofbed}
                                    required
                                />
                            
                                <Form.Label>Safety items</Form.Label>
                                <Form.Select
                                    multiple={true}
                                    required
                                    onChange={handleSafetyItemsChange}
                                    value={safetyItems}
                                >
                                    <option value={"First aid kit"}>
                                        First aid kit
                                    </option>
                                    <option value={"Fire extinguisher"}>
                                        Fire extinguisher
                                    </option>
                                    <option value={"Smoke alarm"}>
                                        Smoke alarm
                                    </option>
                                </Form.Select>
                            
                                <Form.Label>Extra services</Form.Label>
                                <Form.Select
                                    multiple={true}
                                    required
                                    onChange={handleExtraServicesChange}
                                    value={extraServices}
                                >
                                    <option value={"Medical care"}>
                                        Medical care
                                    </option>
                                    <option value={"Food"}>Food</option>
                                    <option value={"Transport"}>Transport</option>
                                </Form.Select>
                            
                                <Form.Label>Additional facilities</Form.Label>
                                <Form.Select
                                    multiple={true}
                                    required
                                    onChange={handleAddFacilitiesChange}
                                    value={addfacilities}
                                >
                                    <option value={"Pool"}>Pool</option>
                                    <option value={"Kitchen"}>Kitchen</option>
                                    <option value={"Air conditioning"}>
                                        Air conditioning{" "}
                                    </option>
                                </Form.Select>
                            
                                <Form.Label>Upload image</Form.Label>
                                <DisplayImage onImgChange={onImgUpload} />
                            </Form.Group>

                            <Button
                                variant="primary"
                                className='w-100'
                                type='submit'
                            >
                                Add new listing
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
