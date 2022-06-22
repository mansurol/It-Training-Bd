import React, { Component } from "react";
import Slider from "react-slick";
import SliderTwo from '../../FakeData/SliderTwo'
import './SectionSix.css'

import { useState } from "react";
import SectionSixPartOne from "./SectionSixPartOne";
const SectionSix = () => {

    const [sliders , setSlider] =useState(SliderTwo)

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,      
      autoplay: true,
 
      autoplaySpeed: 2000,responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
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
    return (
        <div>

<div className="container">
    <div className="pb-5">
    <h3 className="text-center pb-4 SuccessfulStudent">OUR SUCCESSFUL STUDENT</h3>
        <Slider {...settings}>
          {
           sliders.map((SliderdataTwo)=> <SectionSixPartOne Profile={SliderdataTwo}s/>)
          }
      
        </Slider>
      </div>
    </div>
            
        </div>
    );
};

export default SectionSix;