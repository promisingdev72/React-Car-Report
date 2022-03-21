import React from 'react';

import VerticalTab from '../Components/VerticalTab';
import audiLogo from '../assets/images/audi-logo.png';
import triangleIcon from '../assets/images/triangle.svg';

const Report = () =>{

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
            <div className='headerTitle d-flex justify-content-center align-items-center'>
                <p className='position-relative'>Report</p>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='modelInfo'>
                    <div className='modelTitle'>
                        <p>Model information</p>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 col-sm-12'>
                            <div>
                                <img src={audiLogo}></img>
                            </div>
                            <div>
                                <p>AUDI S3 SPORTBACK</p>
                            </div>
                            <div>
                                <input type='text carNumber'></input>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <div>
                                <div className='d-flex'>
                                    <div>
                                        <img src={triangleIcon}></img>
                                    </div>
                                    <div>
                                        {
                                            carInfoList.type
                                        }
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div>
                                        <img src={triangleIcon}></img>
                                    </div>
                                    <div>
                                        {
                                            carInfoList.engin
                                        }
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div>
                                        <img src={triangleIcon}></img>
                                    </div>
                                    <div>
                                        {
                                            carInfoList.out
                                        }
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div>
                                        <img src={triangleIcon}></img>
                                    </div>
                                    <div>
                                        {
                                            carInfoList.Mar
                                        }
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>
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
        </>
    )
}

export default Report;