import React from 'react';
import './SectionFive.css'
import Slider from "react-slick";
import Container from 'react-bootstrap/esm/Container';
import SliderOne from '../../FakeData/SliderOne'
import { useState } from 'react';
import PartOne from './PartOne';
const SectionFive = () => {
  const [ImgData , SetImgData] = useState(SliderOne)

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
 
    autoplaySpeed: 2000,
   
    responsive: [
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
      <div className="BgColorSlider pt-5 pb-5">
        <Container>
      <Slider {...settings}>
          {
            ImgData.map((Sliderdata)=> <PartOne Sliderdatas={Sliderdata}/>)
          }
      </Slider>
      </Container>
    </div>
    );
};

export default SectionFive;