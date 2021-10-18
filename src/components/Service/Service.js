import React from 'react';
import './Service.css'

const Service = (props) => {
    const { img, name, Description,price, level } = props.service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h4> {name}</h4>
            <h6>  {Description}</h6>

        </div>
    );
};

export default Service;