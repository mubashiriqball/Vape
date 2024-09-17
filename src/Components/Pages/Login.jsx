import React from 'react'
import { Form } from 'react-bootstrap'
import '../Css/login.css'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebook, FaLock, FaUser } from 'react-icons/fa'
import { TfiEmail } from 'react-icons/tfi'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='container login-container mt-5'>
            <h2 className='login-header'>Authentication</h2>
            <div className="row  mt-4">
                <div className="col-md-6">
                    <div className="login-card">
                        <div className='headingg'>
                            <h5 className="title-login">Login Your Account</h5>
                        </div>
                        <Form>
                            <div style={{ margin: '20px 30px' }}>
                                <h6 className="title-social">Login with social account</h6>
                                <div className="social-buttons">
                                    <a href="#" className="social-btn twitter-btn">
                                        <BsTwitter /> Twitter
                                    </a>
                                    <a href="#" className="social-btn facebook-btn">
                                        <FaFacebook /> Facebook
                                    </a>
                                </div>
                                <div>
                                    <label htmlFor="">Email</label>
                                </div>
                                <div className="inputBox">

                                    <TfiEmail className="input-icon" />
                                    <input type='email' placeholder='Enter Your Email' required />
                                </div>
                                <div>
                                    <label htmlFor="">Password</label>

                                </div>
                                <div className="inputBox">

                                    <FaLock className="input-icon" />
                                    <input type='password' placeholder='Enter Your Password' required maxLength={8} minLength={8} />
                                </div>
                                <div className="remember d-flex justify-content-between">
                                    <label>
                                        <input type="checkbox" /> Remember Me
                                    </label>
                                    <Link className="forgot-link" to="/forgetpassword">Forgot Password?</Link>

                                </div>

                                <button type='submit' className="login-btn">Log in</button>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="login-card">
                        <div className='headingg'>
                            <h5 className="title-login">Register now</h5>
                        </div>
                        <Form>
                            <div style={{ margin: '20px 30px' }}>
                                <div style={{ marginTop: '30px' }}>
                                    <label htmlFor="">User Name</label>
                                </div>
                                <div className="inputBox">

                                    <FaUser className="input-icon" />
                                    <input type='name' placeholder='Enter Your Name' required />
                                </div>
                                <div>
                                    <label htmlFor="">Email</label>
                                </div>
                                <div className="inputBox">

                                    <TfiEmail className="input-icon" />
                                    <input type='email' placeholder='Enter Your Email' required />
                                </div>
                                <div>
                                    <label htmlFor="">Password</label>

                                </div>
                                <div className="inputBox">

                                    <FaLock className="input-icon" />
                                    <input type='password' placeholder='Enter Your Password' required maxLength={8} minLength={8} />
                                </div>
                                <div className="remember d-flex justify-content-between">
                                    <label>
                                        <input type='checkbox' /> I agree to <b>terms & condition</b>
                                    </label>
                                </div>
                                <button type='submit' className="Register">Register now</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Login
