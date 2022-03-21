import React from 'react';

import VerticalTab from '../Components/VerticalTab';
import audiLogo from '../assets/images/audi-logo.png';
import triangleIcon from '../assets/images/triangle.svg';
import Carousel from '../Components/Carousel';
import reportImage from '../assets/images/report.png';

import "../assets/css/slick.css";
import "../assets/css/slick-theme.css";
import '../assets/css/style.css';

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
            <div className='d-flex justify-content-center align-items-center modelInfoWrap'>
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
                                {/* <input type='text carNumber'></input> */}
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
            <div className='moreDetails d-flex justify-content-center align-items-center'>
                <p className='position-relative'>More details</p>
            </div>
            <div className='detailTabs'>
                <VerticalTab/>
            </div>
            <div className='reportPart'>
                <div className='d-flex justify-content-center align-items-center'>
                    <p className='reportTitle position-relative'>Sample report</p>
                </div>
                <div className='row'>
                    <div className='col-md-6 col-sm-6 col-12 mt-3'>
                        <div className='row justify-content-center align-items-center reportImage'>
                            <img src={reportImage}></img>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-6 col-12 mt-3 d-flex justify-content-center align-items-center'>
                        <div className='row reportRight'>
                            <div className='reportText d-flex justify-content-center align-items-center'>
                                <p>
                                    Curious about the report? Download the our PDF example report here with 
                                    all parts that are checked during our license plate check.
                                </p>
                            </div>
                            <div className='reportForm'>
                                <input type="text" className='emailForm'></input>
                                <div className='reportBtn d-flex justify-content-center align-items-center'>
                                    <div>
                                        DOWNLOAD EXAMPLE REPORT
                                    </div>
                                    <div className='ml-3'>
                                        <img src={triangleIcon}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='reviewPart'>
                <div className='reviewTitle d-flex justify-content-center align-items-center'>
                    <p className='d-flex justify-content-center align-itmes-center reviewText position-relative'>Reviews</p>
                </div>
                <div className='reviewContent'>
                    <div><Carousel/></div>
                </div>
            </div>
        </>
    )
}

export default Report;