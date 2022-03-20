import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../assets/css/style.css';
import triangleIcon from '../assets/images/triangle.svg';
import triangleYe from '../assets/images/triangleYe.svg';
import newsImage from '../assets/images/news.png';
import messageImage from '../assets/images/message.png';
import communicationImage from '../assets/images/communication.png';
import documentImage from '../assets/images/document.png';
import '../index.css';
import CarInfo from '../Components/CarInfo';
const HomePage = () => {

    const [license , setLicense] = useState(""); 
    const [info , setInfo] = useState([]);
    const [isOpen , setIsOpen] = useState(false);
    const [width, setWindowWidth] = useState(0);
    const [reducePaddingHeader, setReducePaddingHeader] = useState(false);

    const handleClickButton = () => {
        const getCarInfo = async() => {
            await getInfo();
            setIsOpen(true);
        }
        getCarInfo();
    }

    const getInfo = async () => {
        await fetch(`https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${license}`)
        .then(
            res => res.json()
        ).then(
            result => setInfo(result)
        ).catch();
    }

    useEffect(() => { 

        updateDimensions();
   
        window.addEventListener("resize", updateDimensions);
        return () => 
          window.removeEventListener("resize",updateDimensions);
    }, [])


    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
        width > 1023?setReducePaddingHeader(true):setReducePaddingHeader(false);
    }

    const changeStyle = {
        padding: reducePaddingHeader ? '100px 100px 50px 150px' : '50px 20px 50px 20px',
        fontSize: reducePaddingHeader ? '50px' : '30px',
        maxWidth: reducePaddingHeader ?'800px':'500px'
    }

    return (
        <>
            <div className='homeHeader'>
                <div className='text-white headerText'>
                    <p>Want to know what your car is worth within two minutes?</p>
                </div>
                <div className='d-flex mt-5'>
                    <div className='headerBtn'>
                        <Link to="/" className='noUnderline d-flex justify-content-between align-items-center'>
                            <div className='btnText'>Let's get started!</div>
                            <div className='btnTriangle'><img src={triangleIcon} width={22} height={19}></img></div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='licensePart'>
                <div className='labelOfText d-flex justify-content-center align-items-cente text-center'>Enter your license plate here</div>
                <div className='inputLicense d-flex justify-content-center align-items-center'>
                    <input type="text" className="licenseplate"
                        name='license' 
                        placeholder='License' 
                        onChange={(e)=> setLicense(e.target.value)}
                        maxLength='7'
                    />
                </div>
                <div className='d-flex d-flex justify-content-center align-items-center'>
                    <div className='searchBtn d-flex justify-content-center align-items-center' onClick={handleClickButton}>Retrieve DATA
                        <span className='ml-3 justify-content-center align-items-center d-flex'>
                            <img src={triangleYe} width={20} height={15}></img>
                        </span>
                    </div>
                    {
                        isOpen ? <div className='Info'><CarInfo data={info} /></div> : ""
                    }
                </div>
                <div>
                    
                </div>
            </div>
            <div className='itemPart'>
                <div className='row'>
                    <div className='col-md-3 col-sm-6 col-12 d-flex justify-content-center align-items-center'>
                        <div className='row'>
                            <div className='itemImage d-flex  justify-content-center align-items-center'>
                                <img src={newsImage}></img>
                            </div>
                            <div className='itemText d-flex  justify-content-center align-items-center text-center'>
                                <p>Within 2 minutes the current market value and trade-in value of your car in your mailbox.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6 col-12 d-flex justify-content-center align-items-center'>
                        <div className='row'>
                            <div className='itemImage d-flex  justify-content-center align-items-center'>
                                <img src={messageImage}></img>
                            </div>
                            <div className='itemText d-flex  justify-content-center align-items-center text-center'>
                                <p>Gain insight into the same market intelligence that car companies have. </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6 col-12 d-flex justify-content-center align-items-center'>
                        <div className='row'>
                            <div className='itemImage d-flex  justify-content-center align-items-center'>
                                <img src={communicationImage}></img>
                            </div>
                            <div className='itemText d-flex  justify-content-center align-items-center text-center'>
                                <p>We scan the entire used car market and compare your car with comparable vehicles that are for sale and have been sold in the last 45 days!</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6 col-12 d-flex justify-content-center align-items-center'>
                        <div className='row'>
                            <div className='itemImage d-flex  justify-content-center align-items-center'>
                                <img src={documentImage}></img>
                            </div>
                            <div className='itemText d-flex  justify-content-center align-items-center text-center'>
                                <p>We provide insight into the WOK status and residual BPM. This way you run a lot less risk when buying a used car!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default HomePage;