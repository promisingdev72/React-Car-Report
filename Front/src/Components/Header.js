import React from 'react';
import logoImage from '../assets/logo/logo_white.svg';
import langIcon from '../assets/images/langIcon.svg'
import { Link } from "react-router-dom";
import '../assets/css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {


    return (
        <>
            <div className='position-relative'>
                <nav className='navbar navbar-expand-lg w-100 navbar-back-color'>
                    <img src={logoImage} width={140} height={100}></img>
                    <button className="bdcolor-yellow navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon d-flex justify-content-center align-items-center color-yellow fs-25">
                            <FontAwesomeIcon icon={faBars} />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="/" className='nav-link text-white fs-20'>
                                    <div className='position-relative forUnderline'>Sell Car</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className='nav-link text-white fs-20'>
                                    <div className='position-relative forUnderline'>About Us</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className='nav-link text-white fs-20'>
                                    <div className='position-relative forUnderline'>Contact Us</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <span  className='nav-link text-white fs-20 cusor-pointer'>EN
                                    <img src={langIcon} width={10} height={5}></img>
                                </span>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            
        </>
    );
}
export default Header;