"use client";
import React from "react";
import Slider from "react-slick";
import "./overrides.css";

const LoginHero: React.FC = () => {
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        appendDots: (dots: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined) => (
          <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4">
            {dots}
          </div>
        )
    };

    return (
        <div className="h-full p-8 flex flex-col">
            <h2 className="text-white text-2xl mb-6 text-center">
                Overall rating
            </h2>

            <div className="flex-grow relative">
                <Slider {...carouselSettings}>
                    <div className="px-4 flex items-center justify-center">
                        <div className="bg-gray-300 w-3/4 h-48 rounded-lg"></div>
                    </div>
                    <div className="px-4 flex items-center justify-center">
                        <div className="bg-gray-300 w-3/4 h-48 rounded-lg"></div>
                    </div>
                </Slider>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                    {/* Your dots will render here */}Hi
                </div>
            </div>
        </div>
    );
};

export default LoginHero;
