import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../components/Cover';
import menuImg from '../assets/menu/banner3.jpg'
import Navbar from '../components/Navbar';
import PopulerMenu from '../components/PopulerMenu';
import useMenu from '../hooks/useMenu';
import HeadTitle from '../components/HeadTitle';
import CategoryMenu from '../components/CategoryMenu';
import pizzaBg from '../assets/menu/pizza-bg.jpg'
import saladBg from '../assets/menu/salad-bg.jpg'
import soupBg from '../assets/menu/soup-bg.jpg'
const Menu = () => {
  const [menu] = useMenu()
  const popular = menu.filter(item => item.category === 'popular')
  const salad = menu.filter(item => item.category === 'salad')
  const drinks = menu.filter(item => item.category === 'drinks')
  const dessert = menu.filter(item => item.category === 'dessert')
  const pizza = menu.filter(item => item.category === 'pizza')
  const offered = menu.filter(item => item.category === 'pizza')
  const soup = menu.filter(item => item.category === 'soup')
  return (
    <div>
      <Helmet>
        <title>Menu || Bistro boos</title>
      </Helmet>
      <div className='w-full absolute top-0 z-10 bg-[#0000004d] '>
        <div className='container mx-auto'>
          <Navbar></Navbar>
        </div>
      </div>
      <div>
        <Cover
          img={menuImg}
          name='Our menus '
          description='Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi .'
        >

        </Cover>
      </div>
      <div className='mt-5'>
        <HeadTitle
          heading="TODAY'S OFFER"
          subHeading="---Don't miss---"
        ></HeadTitle>

      </div>
      <div >
        <CategoryMenu
          data={offered}
        ></CategoryMenu>
      </div>
      <div >
        <CategoryMenu
          data={salad}
          name='Salad'
          title='salad'
          description='Salad all item '
          coverImg={saladBg}
        ></CategoryMenu>
        <CategoryMenu
          data={soup}
          name='Soup'
          title='soup'
          description='Soup all item '
          coverImg={soupBg}
        ></CategoryMenu>
      </div>


    </div>
  );
};

export default Menu;