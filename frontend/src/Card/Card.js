import React from "react";
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Card.css";

const ListCard = (props) => {
    const deleteListing = (idx, id) => {
        props.delete(idx, id)
    }
    return (
        <Card style={{ width: '19rem' }}>
            <div className="overflow">
                <Card.Img variant="top" src={props.imgsrc} />
            </div>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Row>
                    <Col className="m-2">
                        <Link to={{ pathname: `/listingpage/${props.listingId}` }}>
                            <Button variant="primary">Details</Button>
                        </Link>
                    </Col>
                    {
                        props.role === 'host' ?
                        <Col className="m-2">
                            <Button variant="dark" onClick={() => deleteListing(props.index, props.listingId)}>Delete</Button>
                        </Col> :
                        <div></div>
                    }
                </Row>
            </Card.Body>
        </Card>
    );
};

export default ListCard;
