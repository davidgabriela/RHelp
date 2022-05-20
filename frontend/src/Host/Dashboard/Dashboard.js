import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import ListCard from "../../Card/Card";
import firebase from "../../firebase";
import Navbar from "../../Navbar/Navbar";
import "./Dashboard.css";

export default function Dashboard() {
    const [listings, setListings] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
        getListings()
    }, []);

    const getListings = () => {
        let isMounted = true;
        axios
            .get("http://localhost:5000/api/v1/listings")
            .then((response) => {
                const data = response.data.data;

                const filteredData = data.filter(
                    (item) =>
                        item.owner_email === firebase.auth().currentUser.email
                );

                if (isMounted) setListings(filteredData);
                setShowSpinner(false);
            })
            .catch(() => {
                console.log("Error retrieving data!");
            });
        return () => {
            isMounted = false;
        };
    }

    const deleteListing = (idx, id) => {
        console.log("delete")
        setShowSpinner(true)
        axios
            .delete(`http://localhost:5000/api/v1/listings/${id}`)
            .then((response) => {
                getListings()
            })
            .catch(() => {
                console.log("Error deleting listing!");
            });
    }

    const displayCard = (listings) => {
        if (!listings.length) return null;

        return listings.map((item, index) => (
            <ListCard
            key={index}
            index={index}
            title={item.title}
            description={item.description}
            imgsrc={item.photo}
            listingId={item._id}
            role='host'
            delete={deleteListing}
            ></ListCard>
        ));
    };

    const displaySpinner = () => {
        return (
            <Spinner animation='border' role='status' variant='primary'>
                <span className='visually-hidden'>Loading...</span>
            </Spinner>
        );
    };

    return (
        <div>
            <Navbar role='host'></Navbar>
            <div className='container-fluid d-flex justify-content-center flex-container'>
                <Row className='card-list'>
                    <Row>
                        <h1>My listings</h1>
                    </Row>
                    {showSpinner ? displaySpinner() : displayCard(listings)}
                </Row>
            </div>
        </div>
    );
}
