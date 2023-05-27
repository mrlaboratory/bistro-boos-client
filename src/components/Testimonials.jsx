import React, { useEffect, useState } from 'react';
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
    const [reviews,setReviews] = useState([])
    useEffect(()=> {
        fetch('http://localhost:3000/review')
        .then(res => res.json())
        .then(d => setReviews(d))
    },[])
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

                    {
                        reviews.map(re => <SwiperSlide key={re._id}>
                            <div className='text-center px-5 '>
    
                                <div className='py-3'>
                                    <Rating
                                        placeholderRating={re.rating}
                                        emptySymbol={<AiOutlineStar className='text-2xl text-[#CD9003]'></AiOutlineStar>}
                                        placeholderSymbol={<BsFillStarFill className='text-2xl text-[#CD9003]'></BsFillStarFill>}
                                        fullSymbol={<FaStarHalfAlt className='text-2xl text-[#CD9003]'></FaStarHalfAlt>}
                                    />
                                </div>
                               <div className='flex justify-center items-center'>
                               <img className='w-[150px]' src={quatsPng} alt="" />
                               </div>
                                <p className='my-3 '>
                                   {re.details}
                                </p>
                                <h4 className='text-[#CD9003] font-bold text-3xl my-3'>{re.name}</h4>
    
                            </div>
                        </SwiperSlide> )
                    }
                    
                  
                   
                </Swiper>

            </div>

        
        </div>
    );
};

export default Testimonials;