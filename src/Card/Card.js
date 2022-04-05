import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
    return (
        <div className='card text-center shadow'>
            <div className='overflow'>
                <img
                    src={props.imgsrc}
                    alt='Image 1'
                    className='card-img-top'
                />
            </div>

            <div className='card-body text-dark'>
                <h4 className='card-title'>{props.name}</h4>
                <p className='card-text text-secondary'>{props.phone}</p>
                <Link
                    className='btn btn-outline-success'
                    to={{ pathname: `#` }}
                >
                    {" "}
                    More info{" "}
                </Link>
            </div>
        </div>
    );
};

export default Card;
