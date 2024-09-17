import React, { useEffect } from 'react';
import '../Css/Header.css';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaCartArrowDown, FaUser } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { header } from 'framer-motion/client';

const Header = () => {

    return (
        <div>
            <header className='containerHeader'>
                <div className="logo">
                    <h1 className='lgo'><span>He</span>rald.</h1>
                </div>
                <div className="catagories">
                    <div className="headerSearch">
                        <div className="selecerDrop curso">
                            <b>Best Seller <MdKeyboardArrowDown /></b>
                            <div className="dropdownMenu">
                                <Link to='/login'>login</Link>
                                <b>
                                    <Link to='/products'>Products</Link>
                                </b>
                                <b>Option 3</b>

                                <b>Option 3</b>

                            </div>
                        </div>
                        <div className="search">
                            <input type='text' placeholder='Search here' />
                        </div>
                        <div className="searchicon">
                            <FaSearch />
                        </div>
                    </div>
                </div>
                <div className="icons">
                    <div className="cart">
                        <FaCartArrowDown />
                    </div>
                    <FaUser />
                </div>
            </header>
        </div>
    );
};

export default Header;
