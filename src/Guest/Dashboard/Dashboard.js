import axios from "axios";
import React, { Component } from "react";
import Card from "../../Card/Card";
import Navbar from "../../Navbar/Navbar";
import SearchBar from "../../SearchBar/SearchBar";

class Dashboard extends Component {
    state = {
        listings: [],
    };

    componentDidMount = () => {
        this.getData();
    };

    getData = () => {
        axios
            .get("http://localhost:5000/api/v1/listings")
            .then((response) => {
                const data = response.data.data;
                this.setState({ listings: data });
            })
            .catch(() => {
                alert("Error retrieving data!");
            });
    };

    displayCard = (listings) => {
        if (!listings.length) return null;

        return listings.map((item, index) => (
            <Card
                name={item.title}
                phone={item.owner_email}
                imgsrc={item.photo}
                listingId={item._id}
            ></Card>
        ));
    };

    render() {
        return (
            <div>
                <Navbar role='guest'></Navbar>
                <div className='container-fluid d-flex justify-content-center'>
                    <div className='row' id='courses'>
                        <SearchBar></SearchBar>
                        <div className='col-md-4'>
                            {this.displayCard(this.state.listings)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
