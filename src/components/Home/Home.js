import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setServices(data))
    }, [])

    return (
        <div className="services">
        {
            services.map(service => <Service
                key={service.id}
                service={service}
            ></Service>)
            
        }
    </div>
    );
};

export default Home;