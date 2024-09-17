import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Cardslider/cardslider.css';
import Slider from "react-slick";
import { FaCartPlus, FaHeart, FaSearch } from 'react-icons/fa';

const CardSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const products = [
        {
            name: "Ehpro Cold Steel",
            price: "$45",
            oldPrice: "$65",
            rating: 5,
            image: "https://img.freepik.com/free-photo/young-beautiful-brunette-woman-smoking-vaping-e-cigarette-with-smoke-black-wall_231208-3648.jpg?uid=R158205955&ga=GA1.1.969309098.1723704216&semt=ais_hybrid" // replace with real image url
        },
        {
            name: "HorizonTech Magico",
            price: "$45",
            oldPrice: "$65",
            rating: 3,
            image: "https://img.freepik.com/free-photo/vaping-device_144627-25399.jpg?uid=R158205955&ga=GA1.1.969309098.1723704216&semt=ais_hybrid"
        },
        {
            name: "Eleaf Ikuu Mod",
            price: "$45",
            oldPrice: "$65",
            rating: 3,
            image: "https://img.freepik.com/free-photo/young-brunette-woman-standing-vaping-isolated-yellow-wall_231208-3664.jpg?uid=R158205955&ga=GA1.1.969309098.1723704216&semt=ais_hybrid"
        }
        ,
        {
            name: "Eleaf Ikuu Mod",
            price: "$45",
            oldPrice: "$65",
            rating: 3,
            image: "https://img.freepik.com/free-photo/young-brunette-woman-standing-vaping-isolated-yellow-wall_231208-3664.jpg?uid=R158205955&ga=GA1.1.969309098.1723704216&semt=ais_hybrid"
        }
        ,
        {
            name: "Eleaf Ikuu Mod",
            price: "$45",
            oldPrice: "$65",
            rating: 3,
            image: "https://img.freepik.com/free-photo/young-brunette-woman-standing-vaping-isolated-yellow-wall_231208-3664.jpg?uid=R158205955&ga=GA1.1.969309098.1723704216&semt=ais_hybrid"
        }
        ,
        {
            name: "Eleaf Ikuu Mod",
            price: "$45",
            oldPrice: "$65",
            rating: 3,
            image: "https://img.freepik.com/free-photo/young-brunette-woman-standing-vaping-isolated-yellow-wall_231208-3664.jpg?uid=R158205955&ga=GA1.1.969309098.1723704216&semt=ais_hybrid"
        }
    ];

    return (
        <div className="Appmy">
            <div className="weekly-featured">
                <h2>Weekly Featured</h2>
                <p>Let's Shop our <br /> featured item this week</p>
            </div>

            <Slider {...settings}>
                {products.map((product, index) => (
                    <div key={index} className="card2 featured">
                        <div className="card2-icons-container">
                            <FaHeart className="card2-icon" />
                            <FaSearch className="card2-icon" />
                            <FaCartPlus className="card2-icon" />
                        </div>
                        <span className="new-label">NEW</span>
                        <img src={product.image} alt={product.name} />
                        <h3 className="card2-title bg-light">{product.name}</h3>
                        <div className="rating">{"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)} (3)</div>
                        <div className="price bg-light">
                            <span className="old-price">{product.oldPrice}</span>
                            <span className="new-price">{product.price}</span>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CardSlider;
