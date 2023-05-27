import React from 'react';
import HeadTitle from './HeadTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import img1 from '../assets/home/slide1.jpg';
import img2 from '../assets/home/slide2.jpg';
import img3 from '../assets/home/slide3.jpg';
import img4 from '../assets/home/slide4.jpg';
import img5 from '../assets/home/slide5.jpg';
import { Pagination } from "swiper";
const Category = () => {
    return (
        <div>
            <div>
                <HeadTitle
                    subHeading='---From 11:00am to 10:00pm---'
                    heading='ORDER ONLINE'
                ></HeadTitle>
            </div>
            <div className='container mx-auto mt-5'>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={5}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='w-full p-2' src={img1} alt="" />
                        <h2 className='text-4xl uppercase  -mt-14 text-white text-center'>Salads</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full p-2' src={img2} alt="" />
                        <h2 className='text-4xl uppercase  -mt-14 text-white text-center'>Salads</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full p-2' src={img3} alt="" />
                        <h2 className='text-4xl uppercase  -mt-14 text-white text-center'>Salads</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full p-2' src={img4} alt="" />
                        <h2 className='text-4xl uppercase  -mt-14 text-white text-center'>Salads</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full p-2' src={img5} alt="" />
                        <h2 className='text-4xl uppercase  -mt-14 text-white text-center'>Salads</h2>
                    </SwiperSlide>
                    
                </Swiper>

            </div>
        </div>
    );
};

export default Category;