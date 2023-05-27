import React, { useEffect, useState } from 'react';
import orderBg from '../assets/shop/banner2.jpg'
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Cover from '../components/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../hooks/useMenu';
import { useParams } from 'react-router-dom';

const Order = () => {
    const category = ['salad','pizza','soup','dessert','drinks']
    const {catName} = useParams()
    const initialIndex = category.indexOf(catName)
    const [menu] = useMenu()
    const [data, setData] = useState([])
    const [current, setCurrent] = useState(catName)
    const [tabIndex, setTabIndex] = useState(initialIndex)

    useEffect(() => {
        const d = menu.filter(item => item.category === current)
        setData(d)

    }, [menu,current])




    const tabData = <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {data?.map(item => <div className='bg-gray-100' key={item._id}>
            <div className='relative'>
            <img className='w-full' src={item.image} alt="" />
            <h4 className='absolute top-2 right-2 font-bold text-black text-lg'>${item.price}</h4>
            </div>
            <div className='p-5 '>
                <h3 className='text-xl font-bold'>{item.name}</h3>
                <p>{item.recipe}</p>
            </div>
            <div className='flex justify-center pb-5'>
                <button className='btn bg-black text-[#BB8506] hover:bg-gray-200 border-b-4 border-[#BB8506]'>Add to cart</button>
            </div>


        </div>)}


    </div>

    return (
        <div>
            <Helmet>
                <title>Order || Bistro boos</title>
            </Helmet>
            <div className='w-full absolute top-0 z-10 bg-[#0000004d] '>
                <div className='container mx-auto'>
                    <Navbar></Navbar>
                </div>
            </div>
            <Cover name='OUR SHOP' img={orderBg} description='Would you like to try a dish?' ></Cover>

            <div className='mt-5 container mx-auto'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab onClick={() => setCurrent('salad')} >Salad </Tab>
                        <Tab onClick={() => setCurrent('pizza')}>Pizza</Tab>
                        <Tab onClick={() => setCurrent('soup')}>Soup</Tab>
                        <Tab onClick={() => setCurrent('dessert')}>Dessert</Tab>
                        <Tab onClick={() => setCurrent('drinks')}>Drinks</Tab>
                    </TabList>
                    <TabPanel>{tabData}</TabPanel>
                    <TabPanel>{tabData}</TabPanel>
                    <TabPanel>{tabData}</TabPanel>
                    <TabPanel>{tabData}</TabPanel>
                    <TabPanel>{tabData}</TabPanel>
                </Tabs>

            </div>
        </div>
    );
};

export default Order;