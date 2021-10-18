import React from 'react';
import { useParams} from 'react-router';
import './Details.css';
const Details = () => {
    const {serviceId}=useParams();
    return (
        <div>
           <h1>Im detail :{serviceId}</h1> 
        </div>
    );
};

export default Details;