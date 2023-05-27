import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({img, name , description}) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div className="hero h-[600px]" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md bg-[#0000005b] p-5 md:p-10 rounded-lg">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{name}</h1>
                    <p className="mb-5">{description}</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    </Parallax>

       
    );
};

export default Cover;