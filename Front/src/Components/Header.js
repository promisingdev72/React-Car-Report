import React from 'react';
import logoImage from '../assets/logo/logo_white.svg';
import { Link } from "react-router-dom";
import '../assets/css/style.css';
const Header = () => {
    return (
        <>
            <div className='header d-flex justify-content-between p-md-2 p-1 align-items-center'>
                <div className='leftPart'>
                    <img src={logoImage} width={100} height={70}></img>
                </div>
                <div className='rightPart'>
                    <ul className='list-group list-group-horizontal ml-4'>
                        <li className='mx-3 list-group-item px-2 bg-transparent border-0 text-uppercase active-item'>
                            <Link to="/" className='linkMark'>
                                <div>Sell Car</div>
                                <div className='underLine'></div>
                            </Link>
                            
                        </li>
                        <li className='mx-3 list-group-item px-2 bg-transparent border-0 text-uppercase'>
                            <Link to="/about" className='linkMark'>
                                <div>About Us</div>
                                <div className='underLine'></div>
                            </Link>
                        </li>
                        <li className='mr-5 list-group-item px-2 bg-transparent border-0 text-uppercase'>
                            <Link to="/contact" className='linkMark'>
                                <div>Contact Us</div>
                                <div className='underLine'></div>
                            </Link>
                        </li>
                        <li className='mx-5 list-group-item px-2 text-white bg-transparent border-0 text-uppercase'>En</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Header;