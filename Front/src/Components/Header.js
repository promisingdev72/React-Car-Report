import React from 'react';
import logoImage from '../assets/logo/logo_white.svg';
import langIcon from '../assets/images/langIcon.svg'
import { Link, useLocation } from "react-router-dom";
import '../assets/css/style.css';

const Header = () => {

    const location = useLocation();

    const showMenu = () =>{
        
    }

    console.log(location.pathname);

    return (
        <>
            <div className='position-relative'>
                <nav style={{ height: '20px !important' }} className={location.pathname == '/'?'navbar navbar-expand-lg  w-100 position-fixed':'navbar navbar-expand-lg w-100 navbar-back-img position-fixed'}>
                    <img src={logoImage} width={100} height={70}></img>
                    <button className="navbar-toggler" onClick={showMenu} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="/" className='nav-link text-white fs-14'>
                                    <div className='position-relative forUnderline'>Sell Car</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className='nav-link text-white fs-14'>
                                    <div className='position-relative forUnderline'>About Us</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className='nav-link text-white fs-14'>
                                    <div className='position-relative forUnderline'>Contact Us</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <span  className='nav-link text-white fs-14 cusor-pointer'>EN
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