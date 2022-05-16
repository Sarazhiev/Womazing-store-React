import React, {useContext} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import './sliderProduct.scss'
import "swiper/css/pagination";
import {Navigation, Pagination, Mousewheel, Keyboard, Autoplay} from "swiper";
import {Link} from "react-router-dom";
import {CustomContext} from "../../../Context";


const SliderProduct = () => {
    const {shop, product} = useContext(CustomContext);
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={40}
                navigation={true}
                loop={true}
                autoPlay={true}
                speed={2000}
                autoplay={
                    {delay: 3000}
                }
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper"
            >
                {
                    shop.filter(item => {
                        return item.category === product.category && item.id !== product.id
                    }).map(item => (
                        <SwiperSlide key={item.id}>

                            <div  className='product__card'>
                                <Link className="shop__card-link" to={`/product/${item.id}`}>

                                    <img className='shop__card-img' src={`../${item.image.black}`} alt=""/>
                                </Link>
                                <h3 className='shop__card-title'>{item.title}</h3>
                                <p className='shop__card-price'>${item.priceSale
                                    ? <>
                                        <span style={{textDecoration: 'line-through'}}>{item.price}</span>
                                        -
                                        <span className='shop__card-price-sale'>${item.priceSale}</span>
                                    </>
                                    : item.price}</p>
                            </div>

                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
};

export default SliderProduct;