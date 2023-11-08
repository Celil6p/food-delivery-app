"use client";
import React from "react";
import Slider from "react-slick";
import "./overrides.css";
import Image from "next/image";

const LoginHero: React.FC = () => {
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        appendDots: (
            dots:
                | string
                | number
                | boolean
                | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | null
                | undefined
        ) => (
            <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4">
                {dots}
            </div>
        ),
    };

    return (
        <div className="h-full p-8 flex flex-col">
            <h2 className="text-white text-2xl mb-6 text-center"></h2>

            <div className="flex-grow relative">
                <Slider {...carouselSettings}>
                    <div className="p-8 flex items-center justify-center">
                        <Image
                            src="/login-hero-slider-content.png"
                            alt="Slider content"
                            height={600}
                            width={600}
                            style={{
                                height: "auto",
                                width: "auto",
                            }}
                        />
                    </div>
                    <div className="p-8 flex items-center justify-center">
                        <Image
                            src="/login-hero-slider-content.png"
                            alt="Slider content"
                            height={600}
                            width={600}
                            style={{
                                height: "auto",
                                width: "auto",
                            }}
                        />
                    </div>
                    <div className="p-8 flex items-center justify-center">
                        <Image
                            src="/login-hero-slider-content.png"
                            alt="Slider content"
                            height={600}
                            width={600}
                            style={{
                                height: "auto",
                                width: "auto",
                            }}
                        />
                    </div>
                    <div className="p-8 flex items-center justify-center">
                        <Image
                            src="/login-hero-slider-content.png"
                            alt="Slider content"
                            height={600}
                            width={600}
                            style={{
                                height: "auto",
                                width: "auto",
                            }}
                        />
                    </div>
                    <div className="p-8 flex items-center justify-center">
                        <Image
                            src="/login-hero-slider-content.png"
                            alt="Slider content"
                            height={600}
                            width={600}
                            style={{
                                height: "auto",
                                width: "auto",
                            }}
                        />
                    </div>
                    
                </Slider>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center"></div>
            </div>
        </div>
    );
};

export default LoginHero;
