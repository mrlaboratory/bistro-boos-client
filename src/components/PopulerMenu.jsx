import React, { useEffect, useState } from 'react';
import HeadTitle from './HeadTitle';
import { Link } from 'react-router-dom';
import useMenu from '../hooks/useMenu';


const PopulerMenu = () => {
  const [menu] = useMenu()
  const populer =  menu.filter(item => item.category == 'popular')
    return (
        <div className='mt-5'>
            <HeadTitle
                heading='FROM OUR MENU'
                subHeading='---Check it out---'
            ></HeadTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-3'>
                {
                    populer?.map(item => <div className='flex  gap-2 p-2' key={item._id}>
                        <img className='w-[118px] rounded-b-[200px] rounded-tr-[200px]' src={item.image} alt="" />
                        <div>
                       <h3 className='text-xl font-bold'>{item.name}</h3>
                       <p>{item.recipe}</p>
                        </div>
                        <h4 className='font-bold text-[#D99904]'>${item.price}</h4>


                    </div>)
                }

            </div>
            <div className='flex justify-center mt-3'>
                <Link className='px-5 py-3 border-b-2 border-gray-700'>View Full  Menu</Link>
            </div>

        </div>
    );
};

export default PopulerMenu;