import axios from "axios";
import React, { Component } from "react";
import { Row, Spinner } from "react-bootstrap";
import Card from "../../Card/Card";
import Navbar from "../../Navbar/Navbar";
import SearchBar from "../../SearchBar/SearchBar";
import "./Dashboard.css";

class Dashboard extends Component {
    state = {
        listings: [],
        filteredlistings: [],
        showSpinner: true,
    };

    componentDidMount = () => {
        this.setState({ showSpinner: true });
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
                this.setState({ showSpinner: false });
            })
            .catch(() => {
                alert("Error retrieving data!");
            });
    };

    filterData = (typePlace, amenities, aidingfacilities) => {
        this.setState({
            filteredlistings: this.state.listings.filter((item) => {
                return (
                    typePlace
                        .toString()
                        .toLowerCase()
                        .includes(item.type_space.toLowerCase()) ||
                    amenities.some((r) =>
                        item.additional_facilities.includes(r)
                    ) ||
                    aidingfacilities.some((r) =>
                        item.extra_services.includes(r)
                    )
                );
            }),
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

    displaySpinner = () => {
        if (this.state.showSpinner)
            return (
                <Spinner animation='border' role='status' variant='primary'>
                    <span className='visually-hidden'>Loading...</span>
                </Spinner>
            );
        else return <div></div>;
    };

    handleSearch = (location, guests) => {
        this.setState({
            filteredlistings: this.state.listings.filter((item) => {
                return (
                    item.location.formattedAddress
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
                <div className='container-fluid d-flex flex-container'>
                    <Row>
                        <SearchBar
                            filterData={this.filterData}
                            handleSearch={this.handleSearch}
                        ></SearchBar>
                    </Row>
                    <Row className='card_list'>
                        {this.displaySpinner()}
                        {this.displayCard(this.state.filteredlistings)}
                    </Row>
                </div>
            </div>
        );
    }
}

export default Dashboard;
