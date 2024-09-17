import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../Css/Nav.css';
import Button from "@mui/material/Button";
import { MdGridView, MdHeadphones, MdKeyboardArrowDown, MdPhoneBluetoothSpeaker } from 'react-icons/md';

const Nav = () => {
    return (
        <div className="nav">
            <div className="container-fluid d-flex align-items-center">
                <div className="row w-100">
                    <div className="col-sm-3 part1 d-flex align-items-center">
                        <Button variant="contained" className="catTab">
                            <MdGridView /> All Categories <MdKeyboardArrowDown />
                        </Button>
                    </div>
                    <div className="col-sm-7 part2">
                        <nav>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <Button>
                                        <Link to="/">Home</Link>
                                    </Button>
                                </li>
                                <li className="list-inline-item dropdown">
                                    <Button>
                                        <Link to="/">Products <MdKeyboardArrowDown /></Link>
                                    </Button>
                                    <div className="dropdown-menu bg-danger">
                                        <ul>
                                            <li>
                                                <Button><Link to='/login'>Link1</Link></Button>
                                                <Button><Link to='/login'>Link2</Link></Button>
                                                <Button><Link to='link1'>Link3</Link></Button>
                                                <Button><Link to='link1'>Link4</Link></Button>
                                                <Button><Link to='link1'>Link5</Link></Button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <Button>
                                        <Link to="/">About Us</Link>
                                    </Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button>
                                        <Link to="/">Contact Us</Link>
                                    </Button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;
