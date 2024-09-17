import React from 'react';
import '../Cardforhome/card.css';
import { FaHeart, FaSearch, FaCartPlus } from 'react-icons/fa'; // Example using React Icons
import { Link } from 'react-router-dom';

const Card = ({ title, content, imageUrl }) => {
    return (
        <div className="card2">
            <img src={imageUrl} alt={title} />
            <div className="card2-icons-container">
                <Link to={'/details'} tooltip='Add to favourite!'>  < FaHeart className="card2-icon" /></Link>
                <Link to={'/details'} tooltip='View Details!'><FaSearch className="card2-icon" /></Link>
                <a href="" tooltip='Add To Cart!'><FaCartPlus className="card2-icon" /></a>
            </div>
            <div className="card2-body">
                <h5 className="card2-title">{title}</h5>
                <p className="card2-text">{content}</p>
                <p>Price:500</p>
            </div>
        </div>
    );
};

export default Card;
