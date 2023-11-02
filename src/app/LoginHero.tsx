"use client"
import React from 'react';
import Slider from 'react-slick';

const LoginHero: React.FC = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="h-full p-8">
      <h2 className="text-white text-2xl mb-6 text-center">Overall rating</h2>
      
      <Slider {...carouselSettings}>
        <div className="px-4 flex items-center justify-center">
          <div className="bg-gray-300 w-3/4 h-48 rounded-lg"></div>
        </div>

        <div className="px-4 flex items-center justify-center">
          <div className="bg-gray-300 w-3/4 h-48 rounded-lg"></div>
        </div>

      </Slider>
    </div>
  );
}

export default LoginHero;
