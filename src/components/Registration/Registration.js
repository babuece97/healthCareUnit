import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
            <h2>Please Register:</h2>
            <form>
                <input type="email" placeholder="Your Email" />
                <br />
                <input type="password" placeholder="Your Password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <Link to="/login">Already Registered?</Link>
        </div>
    );
};

export default Registration;