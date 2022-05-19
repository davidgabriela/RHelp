import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { MdAlternateEmail, MdPhone } from 'react-icons/md';
import firebase from "../firebase";
import MyMap from "../Map/Map";
import Navbar from "../Navbar/Navbar";
import "./ListingPage.css";

class ListingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            owner_email: "",
            title: "",
            description: "",
            location: "",
            accomodation_type: "",
            type_space: "",
            number_bedrooms: "",
            safety_items: [],
            extra_services: [],
            additional_facilities: [],
            photo: "",
            averageRating: 0,
            listing_id: ''
        };
        this.makeReservation = this.makeReservation.bind(this)
    }

    componentDidMount() {
        var id = this.props.match.params.id;
        axios
            .get(`http://localhost:5000/api/v1/listings/${id}`)
            .then((response) => {
                this.setState({
                    owner_email: response.data.data.owner_email,
                    owner_phone: response.data.data.owner_phone,
                    title: response.data.data.title,
                    description: response.data.data.description,
                    location: response.data.data.location,
                    accomodation_type: response.data.data.accomodation_type,
                    type_space: response.data.data.type_space,
                    number_bedrooms: response.data.data.number_bedrooms,
                    safety_items: response.data.data.safety_items,
                    extra_services: response.data.data.extra_services,
                    additional_facilities:
                        response.data.data.additional_facilities,
                    photo: response.data.data.photo,
                    listing_id: this.props.match.params.id
                });
            })
            .catch(() => {
                console.log("Error retrieving guests!");
            });

            axios
            .get("http://localhost:5000/api/v1/guests")
            .then((guest_response) => {
                this.setState(guest_response.data.data);
            })
            .catch(() => {
                console.log("Error retrieving guests!");
            });
    }

    makeReservation() {
        axios
            .put(`http://localhost:5000/api/v1/listings/${this.props.match.params.id}`,
            {
                "rented": true
            })
            .then((response) => {
                console.log(response);
            })
            .catch(() => {
                console.log("Error updating listing rented boolean!");
            });
        firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
            const headers = {
            'Content-Type': 'application/json',
            'Authorization': idToken
            }
            console.log("heder? ...", headers['Authorization'])
            axios
                .post("http://localhost:4040/api/mail/reservation",
                {
                    "email": firebase.auth().currentUser.email
                },
                {
                    headers: headers
                })
                .then((response) => {
                    console.log(response);
                })
                .catch(() => {
                    console.log("Error sending email!");
                });
        }).catch(function(error) {
            console.log('Error sending token: ', error)
        });
    }

    render() {
        return (
            <div className="listing-page-container">
                <Navbar></Navbar>
                <h1 className="m-3 listing-title">{this.state.title}</h1>
                <Row md={{gutter: 20}}>
                    <Col lg={6} md={12}>
                        <div className="listing-photo m-3 bordered">
                            <img
                                src={this.state.photo}
                                alt='listing'
                            ></img>
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div className="m-3 bordered">
                            <MyMap 
                                position={this.state.location.coordinates}
                            ></MyMap>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='m-3 card-body reservation-card bordered'>
                            <h3 className="m-3">Description</h3>
                            <p className="m-3">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada
                                id nibh vel placerat. Pellentesque
                                pulvinar tempus lorem eu fringilla Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada
                                id nibh vel placerat. Pellentesque
                                pulvinar tempus lorem eu fringilla Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada
                                id nibh vel placerat. Pellentesque
                                pulvinar tempus lorem eu fringilla Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada
                                id nibh vel placerat. Pellentesque
                                pulvinar tempus lorem eu fringilla Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada
                                id nibh vel placerat. Pellentesque
                                pulvinar tempus lorem eu fringilla Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada
                                id nibh vel placerat. Pellentesque
                                pulvinar tempus lorem eu fringilla Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada
                                id nibh vel placerat. Pellentesque
                                pulvinar tempus lorem eu fringilla.{" "}
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="bordered m-3">
                            <div className="card-header">
                                <p>
                                    <MdAlternateEmail/><b>Host email:</b> { this.state.owner_email }
                                </p>
                                <p>
                                    <MdPhone/><b>Host phone number:</b> { this.state.owner_phone }
                                </p>
                            </div>
                            <div className='card-body text-dark'>
                                <h4 className='card-title'>Reserve</h4>
                                <p className='card-text text-secondary'>Make a reservation today!</p>
                                <Button onClick={this.makeReservation}>
                                    Reserve
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default ListingPage;