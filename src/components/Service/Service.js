import React from 'react';
import './Service.css'
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id,img, name, Description,price, level } = props.service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h4> {name}</h4>
            <h6>  {Description}</h6>
            <Link to={`/details/${id}`}>
                    <button className="btn btn-success">Details</button>
                  </Link>

        </div>
    );
};

export default Service;