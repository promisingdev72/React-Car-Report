import React, { useState }from 'react';
import { Link } from "react-router-dom";
import '../assets/css/style.css';
import triangleIcon from '../assets/images/triangle.svg';
import triangleYe from '../assets/images/triangleYe.svg';
import CarInfo from '../Components/CarInfo';
import '../index.css';
const HomePage = () => {

    const [license , setLicense] = useState(""); 
    const [info , setInfo] = useState([]);
    const [isOpen , setIsOpen] = useState(false);

    const getInfo = async () => {
        await fetch(`https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${license}`)
        .then(
            res => res.json()
        ).then(
            result => setInfo(result)
        ).catch();
    }

    const getCarInfo = async() => {
        await getInfo();
        setIsOpen(true);
    }

    const handleClickButton = () => {
        getCarInfo();
    }

    return (
        <>
            <div className='homeHeader'>
                <div className='headerText'>
                    <p>Want to know what your car is worth within two minutes?</p>
                </div>
                <div className='headerBtn'>
                    <Link to="/" className='noUnderline d-flex justify-content-center align-items-center'>
                       <div className='btnText'>Let's get started!</div>
                       <div className='btnTriangle'><img src={triangleIcon} width={22} height={19}></img></div>
                    </Link>
                </div>
            </div>
            <div>
                <div className='labelOfText d-flex justify-content-center align-items-center mt-5 mb-4'>Enter your license plate here</div>
                <div className='inputLicense d-flex justify-content-center align-items-center'>
                    <input type="text" className="licenseplate"
                        name='license' 
                        placeholder='License' 
                        onChange={(e)=> setLicense(e.target.value)}
                        maxLength='7'
                    />
                </div>
                <div className='d-flex justify-content-center align-items-center mt-5'>
                    <div className='searchBtn d-flex justify-content-center align-items-center' onClick={handleClickButton}>Retrieve DATA
                        <span className='ml-3 justify-content-center align-items-center d-flex'>
                            <img src={triangleYe} width={22} height={19}></img>
                        </span>
                    </div>
                    {
                        isOpen ? <div className='Info'><CarInfo data={info} /></div> : ""
                    }
                </div>
            </div>
        </>
    );
}
export default HomePage;