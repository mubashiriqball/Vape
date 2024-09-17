import React from 'react';
import '../Css/Home.css';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { FaArrowRight, FaLifeRing, FaShieldAlt, FaTruck } from 'react-icons/fa';
import Card from '../Cardforhome/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { useForm } from 'react-hook-form';
import CardSlider from '../Cardslider/cardslider';
import Footer from '../Footer/footer';
// import CardSlider from '../Cardslider';

const Home = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    const slideImages = [
        {
            url: 'https://img.freepik.com/free-photo/pensive-woman-enjoying-her-electronic-cigarette_1157-465.jpg?uid=R158205955&ga=GA1.1.969309098.1723704216&semt=ais_hybrid',
            caption: 'Experience the refreshing blend of ripe strawberries and tangy kiwi with our Strawberry Kiwi vape flavor. This perfectly balanced combination delivers a burst of juicy sweetness followed by a subtle tartness, creating a smooth experience.',
        },
        {
            url: 'https://img.freepik.com/free-photo/man-woman-smoking-electronic-cigarette-vape-bar_639032-361.jpg?uid=R158205955&ga=GA1.1.969309098.1723704216&semt=ais_hybrid',
            caption: 'Second image',
        },
        {
            url: 'https://img.freepik.com/premium-photo/smoking-devices-electronic-cigarette-concept-modern-smoking_185193-120980.jpg?uid=R158205955&ga=GA1.1.969309098.1723704216&semt=ais_hybrid',
            caption: 'Third image',
        }
    ];

    const cardsData = [
        {
            title: 'Card 1',
            content: 'This is the first card.',
            imageUrl: 'https://img.freepik.com/free-photo/close-up-futuristic-soft-drink_23-2151281694.jpg?uid=R158205955&ga=GA1.1.969309098.1723704216&semt=ais_hybrid',
        },
        {
            title: 'Card 2',
            content: 'This is the second card.',
            imageUrl: 'https://img.freepik.com/premium-photo/series-colorful-electronic-devices-are-lined-up-shelf_427757-17412.jpg?uid=R158205955&ga=GA1.1.969309098.1723704216&semt=ais_hybrid',
            price: '60$',
        },
        {
            title: 'Card 3',
            content: 'This is the second card.',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0So-P9ztWUtPEbkaZgHp0jmiKCpbDQ4IBEQ&s',
            price: '60$',
        },
        {
            title: 'Card 4',
            content: 'This is the second card.',
            imageUrl: 'https://img.freepik.com/free-photo/adult-touching-her-head-while-smoking_1157-448.jpg?uid=R158205955&ga=GA1.1.969309098.1723704216&semt=ais_hybrid',
            price: '60$',
        },
        {
            title: 'Card 5',
            content: 'This is the second card.',
            imageUrl: 'https://t3.ftcdn.net/jpg/00/66/12/28/240_F_66122868_1bcnSUxDkcrELhHFtEW9xR8wwFb7qk4i.jpg',
            price: '60$',
        },
        {
            title: 'Card 6',
            content: 'This is the second card.',
            imageUrl: 'https://t3.ftcdn.net/jpg/02/76/08/26/240_F_276082613_bNLwnFXnT6Y0p3Y8MGAiD6tk0XN2uJDM.jpg',
            price: '60$',
        },
        {
            title: 'Card 7',
            content: 'This is the second card.',
            imageUrl: 'https://t4.ftcdn.net/jpg/01/81/82/89/240_F_181828954_H17KPAk9o6iJBSeQWGmJeNwEGNwerpNy.jpg',
            price: '60$',
        },
        {
            title: 'Card 8',
            content: 'This is the second card.',
            imageUrl: 'https://t3.ftcdn.net/jpg/02/03/82/80/240_F_203828024_60ruQ0UeJwJPeNAfiWOqN0jl4w9Mb4kY.jpg',
            price: '60$',
        },
    ];

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '550px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className='slide-container1'>
            <Fade>
                {slideImages.map((image, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, backgroundImage: `url(${image.url})` }}>
                            <h1 className='img-caption'>{image.caption}</h1>
                        </div>
                    </div>
                ))}
            </Fade>

            <div className="info-bar" style={{ flexWrap: 'wrap' }}>
                <div className="info-item">
                    <FaTruck className="icon" />
                    <div>
                        <h4>FREE DELIVERY</h4>
                        <p>On order over $90.00</p>
                    </div>
                </div>
                <div className="info-item">
                    <FaShieldAlt className="icon" />
                    <div>
                        <h4>MONEY GUARANTEE</h4>
                        <p>30 Days money back!</p>
                    </div>
                </div>
                <div className="info-item">
                    <FaLifeRing className="icon" />
                    <div>
                        <h4>ONLINE SUPPORT 24/7</h4>
                        <p>We're Always here!</p>
                    </div>
                </div>
            </div>

            <div className="content">
                <figure className="promo-figure">
                    <img src="https://img.freepik.com/free-photo/hookah-still-life-arrangement_23-2149213288.jpg?uid=R158205955&ga=GA1.1.969309098.1723704216&semt=ais_hybrid" className="promo-img" alt="Big Sale Promotion Image" />
                    <figcaption className="promo-caption">
                        <p className="promo-text">HURRY UP</p>
                        <h2>Big Sale Up To 30% Off</h2>
                        <p className="promo-code">USE PROMO CODE: <span>HERALD</span></p>
                        <button className="promo-button">Shop Now</button>
                    </figcaption>
                </figure>
                <figure className="promo-figure">
                    <img src="https://img.freepik.com/free-photo/hookah-still-life-arrangement_23-2149213288.jpg?uid=R158205955&ga=GA1.1.969309098.1723704216&semt=ais_hybrid" className="promo-img" alt="Big Sale Promotion Image" />
                    <figcaption className="promo-caption">
                        <p className="promo-text">HURRY UP</p>
                        <h2>Big Sale Up To 30% Off</h2>
                        <p className="promo-code">USE PROMO CODE: <span>HERALD</span></p>
                        <button className="promo-button">Shop Now</button>
                    </figcaption>
                </figure>
            </div>

            <div className="Arrivals">
                <h3 className='newArrivals'>NEW ARRIVALS</h3>
                <div className='line mt-3'></div>

            </div>

            <div className="card-container">
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        content={card.content}
                        imageUrl={card.imageUrl}
                        price={card.price}
                    />
                ))}
            </div>
            <div className="Bigimage">
                <img className='imagebig' src="https://img.freepik.com/premium-photo/striking-evocative-image-man-wearing-dar_1061150-56144.jpg?uid=R158205955&ga=GA1.1.969309098.1723704216&semt=ais_hybrid" alt="" />
                <div className="Collection">
                    <p style={{ color: 'rgb(255, 136, 0)', fontWeight: 'bold' }}>Style your car!</p>
                    <h1>Collection <br />
                        Sale 15% Off</h1>
                    <p>start from <span style={{ color: 'rgb(255, 136, 0)', fontWeight: 'bold' }}>Dec 27</span> To <span style={{ color: 'rgb(255, 136, 0)', fontWeight: 'bold' }}>Dec 29</span></p>
                    <button className="Collection-button">Shop Now <FaArrowRight /></button>

                </div>
            </div>

            <div className="container  mt-5">
                <div className="row">
                    <div className="col-md-8 p-0 custom-height">
                        <img src="https://img.freepik.com/premium-photo/history-humo-ar-generative-ai_1198249-87393.jpg?uid=R158205955&ga=GA1.1.969309098.1723704216&semt=ais_hybrid" alt="" />
                    </div>
                    <div className="col-md-4 ">
                        <img src="https://img.freepik.com/premium-photo/history-humo-ar-generative-ai_1198249-87393.jpg?uid=R158205955&ga=GA1.1.969309098.1723704216&semt=ais_hybrid" alt="" />
                        <div className="Submit-form">
                            <div className="main">
                                <h3>NewsLetter</h3>
                                <p className='para'>Get more special Deals, <br /> Events & Promotions</p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className='input'
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
                                    id=''
                                />
                                {errors.useremail && <p style={{ color: 'red' }}>{errors.useremail.message}</p>}
                                <div className="submit">
                                    <input disabled={isSubmitting} type="submit" value='Submit' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row spanish mt-4">
                    <div className="col-md-4 p-0 ">
                        <img style={{ height: '100%' }} src="https://img.freepik.com/premium-photo/there-is-bottle-liquid-with-blue-cap-sitting-pile-fruit-generative-ai_955925-100700.jpg?uid=R158205955&ga=GA1.1.969309098.1723704216&semt=ais_hybrid" alt="" />
                        <div className="fruity">
                            <h3 >Smoke <br />
                                Fruitys</h3>
                            <p style={{ color: 'white' }}>Herald style, <br /> day by day
                                functionality!</p>
                            <button className="promo-button">VIEW ALL <FaArrowRight /></button>

                        </div>

                    </div>
                    <div className="col-md-8 custom-height2">
                        <img src="https://img.freepik.com/premium-photo/closeup-cuban-cigar-with-smoke-atmospheric-lighting-background-generative-ai_1254992-49265.jpg?uid=R158205955&ga=GA1.1.969309098.1723704216&semt=ais_hybrid" alt="" />

                        <div className="Cigar">
                            <h1>Cigar
                                <br />
                                Lookbook
                            </h1>
                            <p>Men with Cigar <br />
                                Summer Lookbook</p> <br />
                            <button className="Cigar-button">VIEW ALL <FaArrowRight /></button>

                        </div>
                    </div>

                </div>

            </div>
            <div className="slider">
                <CardSlider />
            </div>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <h2 className='ournews'>Our Latest News
                        <div className='line mt-3'></div>
                    </h2>

                    <div className="carousel-item active">
                        <div className="card1 d-flex flex-row">

                            <img src="https://img.freepik.com/free-photo/man-vaping-electronic-cigarette_158595-2456.jpg?uid=R158205955&ga=GA1.1.969309098.1723704216&semt=ais_hybrid" className="card-img-left" alt="Image" style={{ width: '40%' }} />
                            <div className="card-body m-lg-5">
                                <h6 className="-title">New ARRIVALS</h6>
                                <p>JANUARY 08, 09:14 AM</p>
                                <p className="card-text">This is the content for the first card. It appears on the right side of the image.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card1 d-flex flex-row">
                            <img src="https://img.freepik.com/free-photo/young-man-woman-vaping-from-hookah-indoors_23-2149173642.jpg?uid=R16820696&ga=GA1.1.969309098.1723704216&semt=ais_hybrid" className="card-img-left" alt="Image" style={{ width: '40%' }} />
                            <div className="card-body m-lg-5">
                                <h6 className="-title">New ARRIVALS</h6>
                                <p>JANUARY 08, 09:14 AM</p>
                                <p className="card-text">This is the content for the second card. It also appears on the right side of the image.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card1 d-flex flex-row">
                            <img src="https://img.freepik.com/free-photo/young-man-woman-vaping-from-hookah-indoors_23-2149173642.jpg?uid=R16820696&ga=GA1.1.969309098.1723704216&semt=ais_hybrid" className="card-img-left" alt="Image" style={{ width: '40%' }} />
                            <div className="card-body m-lg-5">
                                <h6 className="-title">New ARRIVALS</h6>
                                <p>JANUARY 08, 09:14 AM</p>
                                <p className="card-text">This is the content for the third card. Like the others, it appears on the right side of the image.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>




        </div>
    );
};

export default Home;
