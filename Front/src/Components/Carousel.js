import React from "react";
import Slider from "react-slick";

const Carousel = () =>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    
    return(
        <>
            <div>
                <Slider {...settings}>
                    <div>
                        <h3>LEANDER</h3>
                        <h4>"Bought the full report and taken to the dealer who wanted to sell me my new Seat. 
                            After negotiating hard on the basis of the real sales price in the report, 
                            we were able to negotiate €250. "
                        </h4>
                    </div>
                    <div>
                        <h3>NIENKE</h3>
                        <h4>" Receive a clear and comprehensive report. 
                            It has all the information I wanted to know before selling my car. Top! "
                        </h4>
                    </div>
                    <div>
                        <h3>KAJI</h3>
                        <h4>" Finally a transparent report "</h4>
                    </div>
                    <div>
                        <h3>LEANDER</h3>
                        <h4>"Bought the full report and taken to the dealer who wanted to sell me my new Seat. 
                            After negotiating hard on the basis of the real sales price in the report, 
                            we were able to negotiate €250. "
                        </h4>
                    </div>
                    <div>
                        <h3>NIENKE</h3>
                        <h4>" Receive a clear and comprehensive report. 
                            It has all the information I wanted to know before selling my car. Top! "
                        </h4>
                    </div>
                    <div>
                        <h3>KAJI</h3>
                        <h4>" Finally a transparent report "</h4>
                    </div>
                    <div>
                        <h3>LEANDER</h3>
                        <h4>"Bought the full report and taken to the dealer who wanted to sell me my new Seat. 
                            After negotiating hard on the basis of the real sales price in the report, 
                            we were able to negotiate €250. "
                        </h4>
                    </div>
                    <div>
                        <h3>NIENKE</h3>
                        <h4>" Receive a clear and comprehensive report. 
                            It has all the information I wanted to know before selling my car. Top! "
                        </h4>
                    </div>
                    <div>
                        <h3>KAJI</h3>
                        <h4>" Finally a transparent report "</h4>
                    </div>
                </Slider>
            </div>
        </>
    )
    
}

export default Carousel;
