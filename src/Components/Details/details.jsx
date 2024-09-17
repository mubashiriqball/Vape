import React, { useState } from 'react';
import '../Details/details.css';
import { Rating } from '@mui/material';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { BiMinus, BiPlus } from 'react-icons/bi';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Details = () => {
    const [selectedImage, setSelectedImage] = useState("https://img.freepik.com/premium-photo/series-colored-tubes-colored-smoke-are-shown-this-image_427757-30800.jpg?uid=R158205955&ga=GA1.1.969309098.1723704216&semt=ais_hybrid");
    const [inputValue, setinputValue] = useState(1);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
    };

    const sliderImages = [
        "https://img.freepik.com/premium-photo/bottle-saffron-gas-with-smoke-coming-out-it_1142353-135348.jpg?uid=R158205955&ga=GA1.1.969309098.1723704216&semt=ais_hybrid",
        "https://img.freepik.com/premium-photo/series-colored-tubes-colored-smoke-are-shown-this-image_427757-30800.jpg?uid=R158205955&ga=GA1.1.969309098.1723704216&semt=ais_hybrid",
        "https://img.freepik.com/free-vector/realistic-vaping-devices_1284-21541.jpg?uid=R158205955&ga=GA1.1.969309098.1723704216&semt=ais_hybrid",
        "https://img.freepik.com/free-vector/vaping-essential-elements-set_1284-24078.jpg?uid=R158205955&ga=GA1.1.969309098.1723704216&semt=ais_hybrid"
    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };
    const Minus = () => {
        setinputValue(inputValue - 1)
    }
    const Plus = () => {
        setinputValue(inputValue + 1)
    }

    return (
        <section className='detailsPage'>
            <div className="breadcrumbWrapper">
                <div className="container-fluid">
                    <ul className="breadcrumb">
                        <li>Home</li>
                        <li>Pictures</li>
                        <li>Details</li>
                    </ul>
                </div>
            </div>
            <div className="container ">
                <div className="main2">
                    <div className="productZoom" >
                        <InnerImageZoom
                            src={selectedImage}
                            zoomSrc={selectedImage}
                            zoomType="hover"
                            zoomScale={1.5}
                        />
                        <div >
                            <Slider {...settings}>
                                {sliderImages.map((image, index) => (
                                    <div key={index} className='sloop' onClick={() => handleImageClick(image)}>
                                        <img src={image} alt={`Slide ${index + 1}`} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>

                    <div className="productinfo">
                        <h2 style={{ fontWeight: 'bold' }}>Here is the most popular brand</h2>
                        <div className="d-flex align-items-center mb-4">
                            <Rating value={4} /><span style={{ color: 'gray' }} className='ml-2'>32 Reviews</span>
                        </div>
                        <div className="price">
                            <span className='text-g priceLarge'>$38</span>
                            <div className="ml-2 d-flex flex-column">
                                <span className='text-g'>26% off</span>
                                <b className='light' style={{ color: 'gray' }}>$52</b>
                            </div>
                        </div>
                        <div className="available">
                            Availability: <b style={{ color: 'orange' }}>In Stock</b>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos reiciendis voluptates,<br />sint ab possimus iusto eveniet magnam officiis libero. At assumenda quaerat cupiditate veritatis, eius illum id ullam sunt officia.</p>
                        <div className="counterSet m-5">
                            <span className='minus' onClick={Minus}><RemoveIcon /></span>
                            <input type="number" value={inputValue} style={{ border: 'none', outline: 'none' }} />
                            <span className='plus' onClick={Plus}><AddIcon /></span>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Details;
