import React from 'react';
import './Course.css'

const Course = (props) => {
    const { img, name, Description,price, level } = props.course;
    return (
        <div className="course">
            <img src={img} alt="" />
            <h4>Course Title: {name}</h4>
            <h6> Suite for: {Description}</h6>
            <p>Level: {level}</p>
           
            <h3>Fees: {price}</h3>
        </div>
    );
};

export default Course;