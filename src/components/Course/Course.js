import React from 'react';
import './Course.css'

const Course = (props) => {
    const { img, name, Description,price, level } = props.course;
    return (
        <div className="course">
            <img src={img} alt="" />
            <h4> {name}</h4>
            <h6>  {Description}</h6>

        </div>
    );
};

export default Course;