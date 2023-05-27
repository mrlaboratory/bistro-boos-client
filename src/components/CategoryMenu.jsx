import React, { useEffect, useState } from 'react';
import HeadTitle from './HeadTitle';
import { Link } from 'react-router-dom';
import Cover from './Cover';



const CategoryMenu = ({ data, title, subTile, description, coverImg }) => {
    return (
        <div className='mt-5'>
           {title &&  <Cover
                img={coverImg}
                name={title}
                description={description}
            >
            </Cover>}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-3 container mx-auto'>
                {
                    data?.map(item => <div className='flex  gap-2 p-2' key={item._id}>
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
                <Link to={`/order/${title}`} className='px-5 py-3 border-b-2 border-gray-700'>ORDER YOUR FAVOURITE FOOD</Link>
            </div>

        </div>
    );
};

export default CategoryMenu;