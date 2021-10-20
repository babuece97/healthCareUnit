import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setServices(data))
    }, [])
    return (
        <div className="d-flex justify-content-evenly">
        {
            services.slice(0, 6).map(service => <Service
                service={service}
                key={service.id}
            ></Service>)
        }
    </div>
    );
};

export default Services;