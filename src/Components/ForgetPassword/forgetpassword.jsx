import React from 'react'
import '../ForgetPassword/forget.css'
import { Form } from 'react-bootstrap'
import { FaLock, FaUser } from 'react-icons/fa'
import { TfiEmail } from 'react-icons/tfi'
import { MdEmail } from 'react-icons/md'

const forgetpassword = () => {
    return (
        <div className='container login-container mt-5'>
            <h2 className='login-header'>Authentication</h2>
            <div className="row  mt-4">
                <div className="col-md-6">
                    <div className="login-card">
                        <div className='headingg'>
                            <h5 className="title-login">Forgot Your Password</h5>
                        </div>
                        <Form>
                            <div style={{ margin: '20px 30px' }}>

                                <div>
                                    <label htmlFor="">Email</label>
                                </div>
                                <div className="inputBox">

                                    <MdEmail className="input-icon" />
                                    <input type='email' placeholder='Enter Your Email' required />
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

export default forgetpassword
