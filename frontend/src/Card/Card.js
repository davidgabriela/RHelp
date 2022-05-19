import React from "react";
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Card.css";

const ListCard = (props) => {
    return (
        // <div className='card text-center shadow'>
        //     <div className='overflow'>
        //         <img src={props.imgsrc} alt='' className='card-img-top' />
        //     </div>

        //     <div className='card-body text-dark'>
        //         <h4 className='card-title'>{props.name}</h4>
        //         <p className='card-text text-secondary'>{props.phone}</p>
        //         <Link
        //             className='btn btn-outline-success'
        //             to={{ pathname: `/listingpage/${props.listingId}` }}
        //         >
        //             More info
        //         </Link>
        //     </div>
        // </div>
        <Card style={{ width: '18rem' }}>
            <div className="overflow">
                <Card.Img variant="top" src={props.imgsrc} />
            </div>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Link to={{ pathname: `/listingpage/${props.listingId}` }}>
                    <Button variant="primary">Details</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default ListCard;
