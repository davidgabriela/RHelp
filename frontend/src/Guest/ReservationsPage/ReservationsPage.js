import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import ListCard from "../../Card/Card";
import Navbar from "../../Navbar/Navbar";

export default function Dashboard() {
    const [reservations, setReservations] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
        
        axios
            .get("http://localhost:5000/api/v1/reservations")
            .then((response) => {
                setReservations(response.data.data);
                console.log(reservations)
                setShowSpinner(false);
            })
            .catch(() => {
                console.log("Error retrieving data!");
            });
    }, []);


    const displayCard = (reservations) => {
        if (!reservations.length) return null;

        return reservations.map((item, index) => (
            <ListCard
                key={index}
                title={item.listing.title}
                description={item.listing.description}
                imgsrc={item.listing.photo}
                listingId={item.listing._id}
            >
            </ListCard>
        ));
    };

    const displaySpinner = () => {
        if (showSpinner)
            return (
                <Spinner animation='border' role='status' variant='primary'>
                    <span className='visually-hidden'>Loading...</span>
                </Spinner>
            );
        else return <div></div>;
    };

    return (
        <div>
            <Navbar role="guest"></Navbar>
            <div className='container-fluid d-flex justify-content-center flex-container'>
                <Row className='card-list'>
                    <Row>
                        <h1>My reservations</h1>
                    </Row>
                    {displaySpinner()}
                    {displayCard(reservations)}
                </Row>
            </div>
        </div>
    );
}
