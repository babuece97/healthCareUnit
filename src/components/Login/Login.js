import React from 'react';
import './Login.css'
const Login = () => {
    return (
        <div>
            <h2>You can login here:</h2>
            <form>
                <input type="email" placeholder="Your Email" />
                <br />
                <input type="password" placeholder="Your Password" />
                <br />
                <input type="submit" value="Submit" />
                <br/>
                <br/>
                
            </form>
            <button>Google Sign In</button>
            <br/>
            <br/>
        
        </div>
    );
};

export default Login;
