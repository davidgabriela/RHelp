import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import ListCard from "../../Card/Card";
import firebase from "../../firebase";
import Navbar from "../../Navbar/Navbar";

export default function Dashboard() {
    const [listings, setListings] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true);
    const [guestList, setGuestList] = useState([]);
    const [guestId, setGuestId] = useState('');

    useEffect(() => {
        let isMounted = true;
        
        getGuestId()

        axios
            .get("http://localhost:5000/api/v1/reservations")
            .then((response) => {
                const data = response.data.data;
                const filteredData = data.filter(
                    (item) =>
                        item.guestId === guestId
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
    }, [guestId]);


    const getGuestId = async () => {
        const email = await firebase.auth().currentUser.email
        axios
            .get("http://localhost:5000/api/v1/guests")
            .then((guest_response) => {
                setGuestList(guest_response.data.data)
                setGuestId(guest_response.data.data.filter(item => {
                    return item.email === email
                })[0]._id)
            })
            .catch(() => {
                console.log("Error retrieving guest list!");
            });
    }

    const checkUser = () => {
        const email = firebase.auth().currentUser.email
        const findGuest = guestList.filter((item) => {
            return item.email === email;
        });
        if (findGuest.length > 0) {
            return true;
        } else return false;
    }

    const displayCard = (listings) => {
        if (!listings.length) return null;

        return listings.map((item, index) => (
            <ListCard
            key={index}
            title="{item.title}"
            description="{item.description}"
            imgsrc={item.photo}
            listingId={item._id}
            ></ListCard>
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
            <Navbar role={checkUser() === true ? "guest" : "host"}></Navbar>
            <div className='container-fluid d-flex justify-content-center flex-container'>
                <Row className='card-list'>
                    <Row>
                        <h1>My reservations</h1>
                    </Row>
                    {displaySpinner()}
                    {displayCard(listings)}
                </Row>
            </div>
        </div>
    );
}
