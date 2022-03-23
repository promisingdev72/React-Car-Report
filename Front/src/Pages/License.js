import React from 'react';
import '../assets/css/style.css';
import confirmImage from '../assets/images/confirm.png';
import { Link } from "react-router-dom";

const License = () =>{
    return(
        <>
            <div className='licenseWrap'>
                <div className='licenseTitle d-flex justify-content-center align-items-center'>
                    <p className='position-relative'>Request license plate report</p>
                </div>
                <div className='reportBoxWrap d-flex justify-content-center align-items-center'>
                    <div className='reportBox'>
                        <p>The sample report is on its way to your mailbox!</p>
                        <div className='row'>
                            <div className='col-md-8 col-sm-12'>
                                <div className='reportLicenseText'>
                                    Thank you for requesting the sample report! <br></br>
                                    The sample report is on its way to your mailbox!
                                </div>
                                <Link to='/' className="noUnderline">
                                    <div className='licenseBtnWrap'>
                                        <span className='licenseBtn position-relative'>Get my license plate insight</span>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-md-4 col-sm-12'>
                                <div className='confirmImage'>
                                    <img src={confirmImage} width="50%"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default License;
