import axios from "axios";
import React, { Component } from "react";
import Card from "../../Card/Card";
import Navbar from "../../Navbar/Navbar";
import SearchBar from "../../SearchBar/SearchBar";

class Dashboard extends Component {
    state = {
        listings: [],
        filteredlistings: [],
    };

    componentDidMount = () => {
        this.getData();
    };

    getData = () => {
        console.log("Getting listings");
        axios
            .get("http://localhost:5000/api/v1/listings")
            .then((response) => {
                const data = response.data.data;
                this.setState({ listings: data, filteredlistings: data });
                console.log("Recv data");
            })
            .catch(() => {
                alert("Error retrieving data!");
            });
    };

    displayCard = (listings) => {
        if (!listings.length) return null;

        return listings.map((item, index) => (
            <Card
                key={index}
                name={item.title}
                phone={item.owner_email}
                imgsrc={item.photo}
                listingId={item._id}
            ></Card>
        ));
    };

    handleSearch = (location, guests) => {
        this.setState({
            filteredlistings: this.state.listings.filter((item) => {
                return (
                    item.address
                        .toString()
                        .toLowerCase()
                        .includes(location.toString().toLowerCase()) &&
                    item.number_guests
                        .toString()
                        .toLowerCase()
                        .includes(guests.toString().toLowerCase())
                );
            }),
        });
    };

    render() {
        return (
            <div>
                <Navbar role='guest'></Navbar>
                <div className='container-fluid d-flex justify-content-center'>
                    <div className='row' id='courses'>
                        <SearchBar handleSearch={this.handleSearch}></SearchBar>
                        <div className='col-md-4'>
                            {this.displayCard(this.state.filteredlistings)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
