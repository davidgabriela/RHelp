import React, { useEffect, useState, Component } from "react";
import Card from "../../Card/Card";
import img1 from "./react-logo.png";

function Dashboard() {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        async function getListings() {
            const response = await fetch(
                `http://localhost:5000/api/v1/listings`,
                {
                    method: "GET",
                }
            );

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const listings = await response.json();
            setListings(listings);
        }

        getListings();
        return;
    });

    function listingList() {
        return listings.map((item) => {
            return (
                <Card name={item.name} phoneNumber={item.phone} imgsrc={img1} />
            );
        });
    }

    return (
        <div>
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row' id='courses'>
                    <div className='col-md-4'>{listingList()}</div>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;
