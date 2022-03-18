import React from 'react';
import logoImage from '../assets/logo/logo_white.svg';
import langIcon from '../assets/images/langIcon.svg'
import { Link } from "react-router-dom";
import '../assets/css/style.css';
const Header = () => {
    return (
        <>
            {/* <div className='header d-flex justify-content-between p-md-2 p-1 align-items-center'>
                <div className='leftPart'>
                    <img src={logoImage} width={100} height={70}></img>
                </div>
                <div className='rightPart'>
                    <ul className='list-group list-group-horizontal'>
                        <li className='list-group-item bg-transparent border-0 text-uppercase'>
                            <Link to="/" className='linkMark'>
                                <div>Sell Car</div>
                                <div className='underLine'></div>
                            </Link>
                        </li>
                        <li className='list-group-item bg-transparent border-0 text-uppercase'>
                            <Link to="/about" className='linkMark'>
                                <div>About Us</div>
                                <div className='underLine'></div>
                            </Link>
                        </li>
                        <li className='list-group-item bg-transparent border-0 text-uppercase'>
                            <Link to="/contact" className='linkMark'>
                                <div>Contact Us</div>
                                <div className='underLine'></div>
                            </Link>
                        </li>
                        <li className='list-group-item text-white bg-transparent border-0 text-uppercase langSymbol'>En<span><img src={langIcon} width={10} height={5}></img></span></li>
                    </ul>
                </div>
                <div className='mobileMenuBtn'>

                </div>
            </div> */}
            <nav class="navbar navbar-expand-lg navbar-back-color">
                <img src={logoImage} width={100} height={70}></img>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link to="/" className='nav-link text-white fs-12'>
                                <div>Sell Car</div>
                                <div className='underLine'></div>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about" className='nav-link text-white fs-12'>
                                <div>About Us</div>
                                <div className='underLine'></div>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact" className='nav-link text-white fs-12'>
                                <div>Contact Us</div>
                                <div className='underLine'></div>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <span  className='nav-link text-white fs-12 cusor-pointer'>EN
                                <img src={langIcon} width={10} height={5}></img>
                            </span>
                        </li>
                    </ul>
                </div>
                </nav>
        </>
    );
}
export default Header;