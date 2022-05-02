import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {LazyLoadImage} from 'react-lazy-load-image-component'


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.scss"
import {Navigation, Pagination, Mousewheel, Keyboard, Autoplay} from "swiper";

import img from '../../../Assets/Home/team.png'
import img2 from '../../../Assets/Home/team2.png'
import img3 from '../../../Assets/Home/team3.png'




const Slider = () => {
    return (
        <>
            <Swiper
                pagination={
                    {clickable: true}
                }
                cssMode={true}
                navigation={true}
                loop={true}
                autoPlay={true}
                mousewheel={true}
                keyboard={true}
                spaceBetween={30}
                autoplay={ {delay: 3000}}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                speed={3000}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="team__content-left">
                        <LazyLoadImage
                            className="team__content-img"
                            alt='img'
                            src={img}
                            effect='blur'
                        />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="team__content-left">
                        <LazyLoadImage
                            className="team__content-img"
                            alt='img'
                            src={img2}
                            effect='blur'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="team__content-left">
                        <LazyLoadImage
                            className="team__content-img"
                            alt='img'
                            src={img3}
                            effect='blur'
                        />
                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    );
};

export default Slider;