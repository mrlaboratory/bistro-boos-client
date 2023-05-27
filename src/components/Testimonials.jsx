import React from 'react';
import HeadTitle from './HeadTitle';
import Rating from 'react-rating';
import { BsFillStarFill } from 'react-icons/Bs'
import { AiOutlineStar } from 'react-icons/Ai'
import { FaStarHalfAlt } from 'react-icons/Fa'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import quatsPng from '../assets/home/quats.png'


const Testimonials = () => {
    return (
        <div className='my-5 py-5'>
            <HeadTitle
                heading='TESTIMONIALS'
                subHeading='---What Our Clients Say---'

            ></HeadTitle>

            <div>
                <Swiper
                    cssMode={true}
                    navigation={true}

                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='text-center px-5 '>

                            <div className='py-3'>
                                <Rating
                                    placeholderRating={4.5}
                                    emptySymbol={<AiOutlineStar className='text-2xl text-[#CD9003]'></AiOutlineStar>}
                                    placeholderSymbol={<BsFillStarFill className='text-2xl text-[#CD9003]'></BsFillStarFill>}
                                    fullSymbol={<FaStarHalfAlt className='text-2xl text-[#CD9003]'></FaStarHalfAlt>}
                                />
                            </div>
                           <div className='flex justify-center items-center'>
                           <img className='w-[150px]' src={quatsPng} alt="" />
                           </div>
                            <p className='my-3 '>
                                Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                            <h4 className='text-[#CD9003] font-bold text-3xl my-3'>JANE DOE</h4>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center px-5 '>

                            <div className='py-3'>
                                <Rating
                                    placeholderRating={4.5}
                                    emptySymbol={<AiOutlineStar className='text-2xl text-[#CD9003]'></AiOutlineStar>}
                                    placeholderSymbol={<BsFillStarFill className='text-2xl text-[#CD9003]'></BsFillStarFill>}
                                    fullSymbol={<FaStarHalfAlt className='text-2xl text-[#CD9003]'></FaStarHalfAlt>}
                                />
                            </div>
                            <div className='flex justify-center items-center'>
                           <img className='w-[150px]' src={quatsPng} alt="" />
                           </div>
                            <p className='my-3 '>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dicta repellendus tempore natus temporibus atque accusantium, adipisci ab vel accusamus.
                            </p>
                            <h4 className='text-[#CD9003] font-bold text-3xl my-3'>Md Mijan</h4>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center px-5 '>

                            <div className='py-3'>
                                <Rating
                                    placeholderRating={4.5}
                                    emptySymbol={<AiOutlineStar className='text-2xl text-[#CD9003]'></AiOutlineStar>}
                                    placeholderSymbol={<BsFillStarFill className='text-2xl text-[#CD9003]'></BsFillStarFill>}
                                    fullSymbol={<FaStarHalfAlt className='text-2xl text-[#CD9003]'></FaStarHalfAlt>}
                                />
                            </div>
                            <div className='flex justify-center items-center'>
                           <img className='w-[150px]' src={quatsPng} alt="" />
                           </div>
                            <p className='my-3 '>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eos expedita possimus quia. Consequatur distinctio laboriosam dolores voluptas, quidem, nesciunt sit perferendis, vitae ullam necessitatibus reprehenderit ipsam architecto earum fugiat!
                            </p>
                            <h4 className='text-[#CD9003] font-bold text-3xl my-3'>Nahid</h4>

                        </div>
                    </SwiperSlide>
                   
                </Swiper>

            </div>

        
        </div>
    );
};

export default Testimonials;