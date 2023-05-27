import React from 'react';

const HeadTitle = ({ subHeading, heading }) => {
    return (
        <div>
            <h2 className='text-[#D99904] text-center'>{subHeading}</h2>

            <div className='flex justify-center'>
                <div className='border-y-2 w-full md:w-[400px] mt-3 '>
                    <h2 className='text-center text-4xl my-3'>{heading}</h2>
                </div>
            </div>

        </div>
    );
};

export default HeadTitle;