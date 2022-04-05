import React, { Component } from "react";
import Card from "../../Card/Card";
import img1 from "./react-logo.png";
import axios from "axios";

// const Listing = (props) => (
//     <Card
//         name={props.listing.name}
//         phoneNumber={props.listin.phone}
//         imgsrc={img1}
//     />
// );

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
                console.log("Data has been received!");
                console.log(data);
            })
            .catch(() => {
                alert("Error retrieving data!");
            });
    };

    displayCard = (listings) => {
        if (!listings.length) return null;

        return listings.map((item, index) => (
            <Card name={item.name} phone={item.phone} imgsrc={img1}></Card>
        ));
    };

    render() {
        return (
            <div>
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
