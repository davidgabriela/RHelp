import React from 'react';
import { Link } from "react-router-dom";
import './Card.css';
import logo from '../logo.svg';
const Card = props => {

    return(
      <div className="card text-center shadow">
        <div className="overflow">
          <img src={props.imgsrc} alt="Image 1" className='card-img-top'/>
        </div>
        
        <div className="card-body text-dark">
          <h4 className="card-title">Name</h4>
          <p className="card-text text-secondary">
            Phone number
          </p>
          <Link className="btn btn-outline-success" to={{pathname: `#`}}> More info </Link>
        </div>
      </div>
    );
  }
    
  export default Card;