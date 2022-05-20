import React from "react";
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Card.css";

const ListCard = (props) => {
    return (
        <Card style={{ width: '19rem' }}>
            <div className="overflow">
                <Card.Img variant="top" src={props.imgsrc} />
            </div>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Link to={{ pathname: `/listingpage/${props.listingId}` }}>
                    <Button variant="primary">Details</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default ListCard;
