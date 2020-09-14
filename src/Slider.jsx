import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../src/images/slider-1.jpg";
import img2 from "../src/images/slider-2.jpg";
import img3 from "../src/images/slider-3.jpg";

const Slider = () => {
    return (
        <>
    <div className="carousel-wrapper" style={{marginTop: '10rem'}}>
            <Carousel infiniteLoop useKeyboardArrows autoPlay stopOnHover interval={3000} showArrows={true} showIndicators showThumbs={false}>
                <div>
                    <img src={img1} alt="slider_img" />
                </div>
                <div>
                    <img src={img2} alt="slider_img"/>
                </div>
                <div>
                    <img src={img3} alt="slider_img"/>
                </div>
            </Carousel>
        </div>
  </>
);
    }

export default Slider;