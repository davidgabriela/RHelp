import React, { Component } from "react";
import Navbar from "../../Navbar/Navbar";
import firebase from "../../firebase";
import axios from "axios";
import Card from "../../Card/Card";

class Dashboard extends Component {
    state = {
        listings: [],
    };

    componentDidMount = () => {
        this.getData();
    };

    checkUser = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log("Signed up", user.email);
            } else {
                console.log("No user", user);
            }
        });
    };

    getData = () => {
        this.checkUser();
        axios
            .get("http://localhost:5000/api/v1/listings")
            .then((response) => {
                const data = response.data.data;

                const filteredData = data.filter(
                    (item) =>
                        item.owner_email === firebase.auth().currentUser.email
                );

                this.setState({ listings: filteredData });
                console.log("Data has been received!");
                console.log(filteredData);
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
            ></Card>
        ));
    };

    render() {
        return (
            <div>
                <Navbar role='host'></Navbar>
                <div className='container-fluid d-flex justify-content-center'>
                    <div className='row' id='courses'>
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
