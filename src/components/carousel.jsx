import React from "react";
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import car1 from '../assets/car1.jpg';
import car2 from '../assets/car2.jpg';
import car3 from '../assets/car3.jpg';
import car4 from '../assets/car4.jpg';
import car5 from '../assets/car5.jpg';

import CarouselItem from './carouselItem';


const images = [car1, car2, car3, car4, car5];

const Carousel = ()=> {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll:1,
            centerMode: true,
            centerPadding: '0px',
        };
        const renderImages = ()=>
        images.map((Image, index) => <CarouselItem key={index} Image={Image} />);
        
        return(
            <div className=" flex items-center justify-center">
                <div className="w-full">
                    <Slider {...settings}>
                        {renderImages()}
                        </Slider>
                </div>
            </div>
        )
}

export default Carousel