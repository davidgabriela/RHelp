import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
class ListingPage extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
        owner_email: "",
        title: "",
        description:"",
        address:"",
        accomodation_type:"",
        type_space:"",
        number_bedrooms:"",
        safety_items:[],
        extra_services:[],
        additional_facilities:[],
        photo:"",
        averageRating:0,
        }
      }
    render() {
        return (
            <>
                <Container className='main-container'>
                    <Row>
                        <Navbar></Navbar>
                    </Row>
                    <Row className='main-row'>
                        <Col lg={12} xl className='main-col main-map'>
                        <h1>Title{this.state.title}</h1>
                        <div className='main-box'>
                        
                        <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse malesuada id
                                    nibh vel placerat. Pellentesque pulvinar
                                    tempus lorem eu fringilla.{" "}
                                </p>
                        </div>
                        <h1>Description</h1>
                        <div className='main-box'>
                        
                        <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse malesuada id
                                    nibh vel placerat. Pellentesque pulvinar
                                    tempus lorem eu fringilla.{" "}
                                </p>
                        </div>
                        </Col>
                        <Col lg={12} xl className='main-col main-hero'>
                            <div className='main-box'>
                               {
                               /*<Link to='/'>
                                    
                                </Link> */ 
                                }
                                <Button>Reserve</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
export default ListingPage;