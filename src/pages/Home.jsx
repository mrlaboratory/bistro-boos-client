import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Category from '../components/Category';
import PopulerMenu from '../components/PopulerMenu';
import Footer from '../components/Footer';
import Featured from '../components/Featured';
import Testimonials from '../components/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || Bistro boos</title>
            </Helmet>
            <div className='w-full fixed top-0 z-10 bg-[#0000004d] '>
                <div className='container mx-auto'>
                    <Navbar></Navbar>
                </div>
            </div>
            <Slider></Slider>
            <div className='container mx-auto'>
                <Category></Category>
                <PopulerMenu></PopulerMenu>




            </div>
            <div>
                <Featured></Featured>
            </div>
            <div className='container mx-auto'>
                <Testimonials></Testimonials>

            </div>
           
        </div>
    );
};

export default Home;