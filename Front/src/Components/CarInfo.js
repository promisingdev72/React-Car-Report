import React from 'react';

import Doc from './DocService';
import PdfContainer from './PdfContainer';

const CarInfo = (data) => {
    const info = React.createRef();
    console.log(data);
    
    const createPdf = (html) => Doc.createPdf(html)

    return ( 
       <div>
            <div ref={info}>
                <PdfContainer createPdf={createPdf}>
                    <React.Fragment>
                        <h1>Here is Car Info</h1>
                        {
                            Object.entries(data.data[0]).map(([key, val]) => 
                                <div key={key} className='d-flex'><h5>{key}:</h5> &nbsp;&nbsp; {val}</div>
                            )
                        }
                        <p>{console.log(data.data[0])}</p>
                    </React.Fragment>
                </PdfContainer>
            </div>
        </div>
    );
}

export default CarInfo;