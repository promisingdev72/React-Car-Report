import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './index.css';
import Header from './Components/Header';
import CarInfo from './CarInfo';

const App = () => {
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

    const handleClickButton = () => {
        const getCarInfo = async() => {
            await getInfo();
            setIsOpen(true);
        }
        getCarInfo();
    }

    return (
        <div className='container-fluid'>
            <Header></Header>
            <div className='d-flex align-items-center vh-100 m-auto'>
                <input 
                    type="text" 
                    className='form-control' 
                    style={{
                        width:"150px"
                    }}
                    name='license' 
                    placeholder='License Plate' 
                    onChange={(e)=> setLicense(e.target.value) }
                />
                <button className='btn btn-primary' onClick={handleClickButton}>Get Info</button>

                {
                    isOpen ? <div className='Info'>
                        <CarInfo data={info} />
                    </div>
                    :
                    ""
                }
            </div>
        </div>
    );
}

export default App;
