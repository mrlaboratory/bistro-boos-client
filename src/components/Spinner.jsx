import React from 'react';
import { BounceLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div className='h-[300px] w-full flex justify-center items-center'>
            <BounceLoader color="#36d7b7" />
        </div>
    );
};

export default Spinner;