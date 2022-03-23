import React from 'react';
import Sucess from '../assets/images/sucess.png';
import Box from '../assets/images/box.png';
import sBox from '../assets/images/sbox.png';
const LicenseSucess = () =>{
    
    let show = true;
    const dropDown = () =>{
        
        if(show == true){
            document.querySelector('.emailPdfReportItemShow').classList.add('show');
            show = false;
        }
        else{
            document.querySelector('.emailPdfReportItemShow').classList.remove('show');
            show = true;
        }
    }
    const sendMail = () =>{
        document.querySelector('.emailPdfReportItemShow').classList.remove('show');
        document.querySelector('.notiSucess').classList.add('show');
    }

    return(
        <>
            <div className='licenseTitle d-flex justify-content-center align-items-center'>
                <p className='position-relative'>Request license plate report</p>
            </div>
            <div className='sucessWrap'>
                <div className='sucessPayment'>
                    <div className='sucessHeader d-flex justify-content-center align-itmes-center'>
                        <div>
                            <div className='d-flex justify-content-center align-itmes-center'><img src={Sucess}/></div>
                            <div className='d-flex justify-content-center align-itmes-center mt-3'><p>Payment Sucessful!</p></div>
                        </div>
                    </div>
                    <div className='sucessReportPart'>
                        <div className='viewPdfReport mb-3'>
                            <div className='dropDownBtn position-relative'>
                                View PDF report
                            </div>
                            <div className='viewPdfReportItemShow'></div>
                        </div>
                        <div className='downLoadReport mb-3'>
                            <div className='dropDownBtn position-relative'>
                                Download PDF report
                            </div>
                            <div className='downLoadReportItemShow'></div>
                        </div>
                        <div className='emailPdfReport mb-3'>
                            <div className='dropDownBtn position-relative' onClick={dropDown}>
                                Email PDF report
                            </div>
                            <div className='emailPdfReportItemShow d-flex'>
                                <img src={Box} className='mr-2' width={44} height={45}/>
                                <input type="text" placeholder='your Email address'/>
                                <div className='sendBtn ml-2' onClick={sendMail}>
                                    Send
                                </div>
                            </div>
                            <div className='notiSucess d-flex justify-content-center align-items-center'>
                                <img src={sBox}/>
                                <div className='ml-3'>Email sent successfully!</div>
                            </div>
                        </div>
                    </div>
                    <div className='sucessFooter'>
                        <p>
                            Thank you. We hope your experience was awesome <br></br>
                            and we can't wait to see you again soon.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LicenseSucess;