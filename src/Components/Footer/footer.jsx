import React from 'react';
import '../Footer/footer.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const Footer = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const onSubmit = (data) => {
        // Handle form submission
        console.log(data);
    };

    return (
        <div>
            <footer id="footer" className="footer">
                <div className="container footer-top">
                    <div className="row d-flex justify-content-between">
                        <div className="footer-section footer-links">
                            <h4 className="heading">Quick Menu</h4>
                            <ul>
                                <li><a href="#">New Arrivals</a></li>
                                <li><a href="#">Life Styles</a></li>
                                <li><a href="#">Creamy</a></li>
                                <li><a href="#">Fruity</a></li>
                                <li><a href="#">Beverage</a></li>
                            </ul>
                        </div>

                        <div className="footer-section footer-links">
                            <h4 className="heading">Our Services</h4>
                            <ul>
                                <li><a href="#">Track Order</a></li>
                                <li><a href="#">Delivery</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Graphic Design</a></li>
                                <li><a href="#">SEO Optimization</a></li>
                            </ul>
                        </div>

                        <div className="footer-section footer-about">
                            <a href="index.html" className="logo d-flex align-items-center">
                                {/* <span className="sitename">BlogSpot</span> */}
                            </a>
                            <div className="footer-contact pt-3">
                                <p>I10/3 Islamabad</p>
                                <p>Capital of Pakistan, NY 535022</p>
                                <p className="mt-3"><strong>Phone:</strong> <span>+92 300 0000000</span></p>
                                <p><strong>Email:</strong> <span>info@example.com</span></p>
                            </div>
                            <b>Follow us On:</b>
                            <div className="social-links d-flex">
                                <a href="#"><FaFacebook className="social-icon" /></a>
                                <a href="#"><FaInstagram className="social-icon" /></a>
                                <a href="#"><FaLinkedin className="social-icon" /></a>
                            </div>
                        </div>

                        <div className="footer-section footer-links">
                            <h4 className="heading">Newsletter</h4>
                            <p>Join up to get the latest on sales, new arrivals and more...</p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    className='input1'
                                    placeholder='Your email here'
                                    {...register("useremail", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Invalid email format"
                                        }
                                    })}
                                    type="text"
                                    name='useremail'
                                />
                                {errors.useremail && <p style={{ color: 'red' }}>{errors.useremail.message}</p>}
                                <div className="submit-btn">
                                    <input disabled={isSubmitting} type="submit" value='Submit' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="lane" ></div>
                <div className="copyright mt-5" style={{ textAlign: 'center' }}>
                    <p>Copyright © 2020 <b style={{ color: 'orange' }}>Herald.</b>  All rights reserved</p>
                </div>

            </footer>
        </div>
    );
};

export default Footer;
