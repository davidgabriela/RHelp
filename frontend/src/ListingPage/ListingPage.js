import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
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
                .post("http://localhost:5000/api/v1/reservation",
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
                <h1>{this.state.title}</h1>
                <Row>
                    <Col>
                        <div className="listing-photo">
                            <img
                                src={this.state.photo}
                                alt='listing'
                            ></img>
                        </div>
                    </Col>
                    <Col>
                        <MyMap 
                            position={this.state.location.coordinates}
                        ></MyMap>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>Description</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Suspendisse malesuada
                            id nibh vel placerat. Pellentesque
                            pulvinar tempus lorem eu fringilla.{" "}
                        </p>
                    </Col>
                    <Col>
                        <Button onClick={this.makeReservation}>
                            Reserve
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default ListingPage;
