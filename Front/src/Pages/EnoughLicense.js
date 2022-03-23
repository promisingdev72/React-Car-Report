import React from 'react';
import { Link } from "react-router-dom";
import audiLogo from '../assets/images/audi-logo.png';
import triangleIcon from '../assets/images/triangle.svg';
import carImage from '../assets/images/car.png';
import instrumentImage from '../assets/images/instrument.png';


const EnoughLicense = () =>{


    const carInfoList = {
        type:'Passenger Car',
        engin: 'Gasoline',
        out: '1984cc',
        Mar: '228kw/311hp'
    };

    const priceAndDateInfoList = {
        date:'Year of construction: 2018',
        price:'New price from: €77,122'
    };

    return(
        <>
            <div className='licenseTitle d-flex justify-content-center align-items-center'>
                <p className='position-relative'>Request license plate report</p>
            </div>
            <div className='dataWrap'>
                <div>
                    <div className='row'>
                        <div className='col-md-6 paddingReduce' style={{padding:60}}>
                            <div className='modelInfo'>
                                <div className='modelTitle d-flex justify-content-center align-items-center'>
                                    <p>Model information</p>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6 col-sm-12'>
                                        <div>
                                            <img src={audiLogo} width='100%'></img>
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center typeOfCar'>
                                            <p>AUDI S3 SPORTBACK</p>
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <input type="text" className="licenseplateFix"
                                                name='license' 
                                                placeholder='License' 
                                                onChange={(e)=> setLicense(e.target.value)}
                                                maxLength='7'
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-sm-12 rightInfo'>
                                        <div className='mb-5'>
                                            <div className='d-flex'>
                                                <div className='mr-2'>
                                                    <img src={triangleIcon} width={10}></img>
                                                </div>
                                                <div style={{fontSize:20}}>
                                                    {
                                                        carInfoList.type
                                                    }
                                                </div>
                                            </div>
                                            <div className='d-flex'>
                                                <div className='mr-2'>
                                                    <img src={triangleIcon} width={10}></img>
                                                </div>
                                                <div style={{fontSize:20}}>
                                                    {
                                                        carInfoList.engin
                                                    }
                                                </div>
                                            </div>
                                            <div className='d-flex'>
                                                <div className='mr-2'>
                                                    <img src={triangleIcon} width={10}></img>
                                                </div>
                                                <div style={{fontSize:20}}>
                                                    {
                                                        carInfoList.out
                                                    }
                                                </div>
                                            </div>
                                            <div className='d-flex'>
                                                <div className='mr-2'>
                                                    <img src={triangleIcon} width={10}></img>
                                                </div>
                                                <div style={{fontSize:20}}>
                                                    {
                                                        carInfoList.Mar
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{fontSize:20}}>
                                            <p className='mb-0'>
                                                {priceAndDateInfoList.date}
                                            </p>
                                            <p>
                                                {priceAndDateInfoList.price}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 dataRight' style={{padding:60}}>
                            <div className='detailWrap'>
                                <div className='phaseTitle'>Our unique report is the only one in the market to provide insight into:</div>
                                <div className='phaseText position-relative'>Real-time market value</div>
                                <div className='phaseText position-relative'>Current trade-in value</div>
                                <div className='phaseText position-relative'>Total cost (TCO) for entire lifecycle</div>
                                <div className='phaseText position-relative'>Expected number of days before the car is sold</div>
                                <div className='phaseText position-relative'>Number of comparable cars for sale now</div>
                                <div className='phaseText position-relative'>Number of comparable cars sold as second-hand</div>
                                <div className='phaseText position-relative'>cars in the last 45 days</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row orderFormWrap'>
                    <div className='col-md-6 col-sm-12 d-flex carImage'>
                        <img src={carImage} width="100%"></img>
                    </div>
                    <div className='col-md-6 col-sm-12 formWrap'>
                        <div className='orderWrap d-flex justify-content-center align-items-center flex-column'>
                            <div className='orderTitle'>Order your report</div>
                            <div className='emailInputWrap d-flex'>
                                <div className='iconOfLabel'>
                                    <img src= {instrumentImage}></img>
                                </div>
                                <div className='emailInput'>
                                    <input type="text" placeholder='enter your mileage here' className='inputEmailField'></input>
                                </div>
                            </div>
                            <Link to='/sucess' className='noUnderline'>
                                <div className='orderBtnWrap'>
                                    <div className='orderBtn'>ORDER FOR €3.95</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EnoughLicense;