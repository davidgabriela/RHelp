import axios from "axios";
import React, { Component } from "react";
import { Row, Spinner } from "react-bootstrap";
import ListCard from "../../Card/Card";
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
                const unrentedListings = data.filter(item => {
                    return !item.rented
                })
                this.setState({ listings: unrentedListings, filteredlistings: unrentedListings });
                this.setState({ showSpinner: false });
            })
            .catch(() => {
                console.log("Error retrieving listings!");
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
            <ListCard
                key={index}
                title={item.title}
                description={item.description}
                imgsrc={item.photo}
                listingId={item._id}
            ></ListCard>
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
                        parseInt(guests) <= parseInt(item.number_guests)
                );
            }),
        });
    };

    render() {
        return (
            <div>
                <Navbar role='guest'></Navbar>
                <div className='container-fluid d-flex justify-content-center'>
                    <Row className='card_list'>
                        <SearchBar
                            filterData={this.filterData}
                            handleSearch={this.handleSearch}
                        ></SearchBar>

                        {this.displaySpinner()}
                        {this.displayCard(this.state.filteredlistings)}
                    </Row>
                </div>
            </div>
        );
    }
}

export default Dashboard;
