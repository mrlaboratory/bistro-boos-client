import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Category from '../components/Category';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Featured from '../components/Featured';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <div>
            <div className='w-full absolute top-0 z-10 bg-[#0000004d] '>
                <div className='container mx-auto'>
                    <Navbar></Navbar>
                </div>
            </div>
            <Slider></Slider>
            <div className='container mx-auto'>
                <Category></Category>
                <Menu></Menu>




            </div>
            <div>
                <Featured></Featured>
            </div>
            <div className='container mx-auto'>
                <Testimonials></Testimonials>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;