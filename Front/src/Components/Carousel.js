import React from "react";
import Slider from "react-slick";

const Carousel = () =>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:false,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    
    return(
        <>
            <div>
                <Slider {...settings}>
                    <div className="carouselItem">
                        <div className="item">
                            <h5>LEANDER</h5>
                            <h6>"Bought the full report and taken to the dealer who wanted to sell me my new Seat. 
                                After negotiating hard on the basis of the real sales price in the report, 
                                we were able to negotiate €250. "
                            </h6>
                        </div>
                    </div>
                    <div className="carouselItem">
                        <div className="item">
                            <h5>NIENKE</h5>
                            <h6>" Receive a clear and comprehensive report. 
                                It has all the information I wanted to know before selling my car. Top! "
                            </h6>
                        </div>
                    </div>
                    <div className="carouselItem">
                        <div className="item">
                            <h5>KAJI</h5>
                            <h6>" Finally a transparent report "</h6>
                        </div>
                    </div>
                    <div className="carouselItem">
                        <div className="item">
                            <h5>LEANDER</h5>
                            <h6>"Bought the full report and taken to the dealer who wanted to sell me my new Seat. 
                                After negotiating hard on the basis of the real sales price in the report, 
                                we were able to negotiate €250. "
                            </h6>
                        </div>
                    </div>
                    <div className="carouselItem">
                        <div className="item">
                            <h5>NIENKE</h5>
                            <h6>" Receive a clear and comprehensive report. 
                                It has all the information I wanted to know before selling my car. Top! "
                            </h6>
                        </div>
                    </div>
                    <div className="carouselItem">
                        <div className="item">
                            <h5>KAJI</h5>
                            <h6>" Finally a transparent report "</h6>
                        </div>
                    </div>
                    <div className="carouselItem">
                        <div className="item">
                            <h5>LEANDER</h5>
                            <h6>"Bought the full report and taken to the dealer who wanted to sell me my new Seat. 
                                After negotiating hard on the basis of the real sales price in the report, 
                                we were able to negotiate €250. "
                            </h6>
                        </div>
                    </div>
                    <div className="carouselItem">
                        <div className="item">
                            <h5>NIENKE</h5>
                            <h6>" Receive a clear and comprehensive report. 
                                It has all the information I wanted to know before selling my car. Top! "
                            </h6>
                        </div>
                    </div>
                    <div className="carouselItem">
                        <div className="item">
                            <h5>KAJI</h5>
                            <h6>" Finally a transparent report "</h6>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
    
}

export default Carousel;
