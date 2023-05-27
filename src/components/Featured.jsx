import React from 'react';
import { Link } from 'react-router-dom';
import featuredImg from '../assets/home/featured.jpg'
import HeadTitle from './HeadTitle';

const Featured = () => {
    return (
        <div className="py-10 text-white my-5 bg-fixed"
        style={{
          backgroundImage: `url(${featuredImg})`,
        }}
      >
            <div className='container mx-auto'>
                <HeadTitle
                    subHeading='---Check it out---'
                    heading='FROM OUR MENU'
                ></HeadTitle>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-7 items-center py-10'>
                    <div className='flex justify-center items-center'>
                        <img className='w-[350px] rounded-lg' src={featuredImg} alt="" />
                    </div>
                    <div>
                        <h3 className='text-xl'>March 20, 2023 WHERE CAN I GET SOME?</h3>
                        <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <Link className='px-5 py-3 border-b-2 border-black font-bold'>Read more </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Featured;