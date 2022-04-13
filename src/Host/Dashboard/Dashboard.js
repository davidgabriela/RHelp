import React, { Component, useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import firebase from "../../firebase";
import axios from "axios";
import Card from "../../Card/Card";

export default function Dashboard() {
    const [listings, setListings] = useState([]);

    useEffect(() => {
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
            })
            .catch(() => {
                alert("Error retrieving data!");
            });
        return () => {
            isMounted = false;
        };
    }, []);

    const displayCard = (listings) => {
        if (!listings.length) return null;

        return listings.map((item, index) => (
            <Card
                name={item.title}
                phone={item.owner_email}
                imgsrc={item.photo}
            ></Card>
        ));
    };

    return (
        <div>
            <Navbar role='host'></Navbar>
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row' id='courses'>
                    <div className='col-md-4'>{displayCard(listings)}</div>
                </div>
            </div>
        </div>
    );
}
