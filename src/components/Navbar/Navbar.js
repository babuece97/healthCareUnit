import React from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="MenuBar-container">
            <div className="container">
                <div className="row">

                    <div className="col-md-10">
                        <div>
                            <ul className="d-flex align-items-end justify-content-end">
                                <Link to="/home" className="items">
                                    <li>Home</li>
                                </Link>
                                <Link to="/courses" className="items">
                                    <li>Courses</li>
                                </Link>
                                <Link to="/about" className="items">
                                    <li>About us</li>
                                </Link>
                                <Link to="/contact" className="items">
                                    <li>Contact us</li>
                                </Link>
                                <Link to="/login" className="items">
                                    <li>Login</li>
                                </Link>
                                <Link to="#" className="items">
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;