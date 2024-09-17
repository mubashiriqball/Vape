import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css';

const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const handleClose = () => {
        setShowLogin(false);
    };

    return (
        <header className="header">
            <div className="header-left">
                <p>Welcome to our online store!</p>
            </div>
            <div className="header-right">
                <div className="auth-links">
                    <span onClick={handleLoginClick}>Login</span>
                    <span>or</span>
                    <span><Link to='/register'>Register</Link></span>
                </div>
            </div>

            {/* Conditionally render the login form and overlay */}
            {showLogin && (
                <>
                    <div className="overlay" onClick={handleClose}></div>
                    <div className="login-form-container">
                        <button className="close-button" onClick={handleClose}>X</button>
                        <form className="login-form">
                            <h2>Login</h2>
                            <input type="text" placeholder="Username" />
                            <input type="password" placeholder="Password" />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </>
            )}
        </header>
    );
}

export default Navbar;
