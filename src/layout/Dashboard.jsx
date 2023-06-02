import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/Go';
import useUserRole from '../hooks/useUserRole';


const Dashboard = () => {
    const { data } = useUserRole()
    return (
        <div>
            <div className="drawer drawer-mobile bg-gray-100">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-5">
                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn z-20 btn-primary drawer-button lg:hidden absolute left-2 top-2"> <GoThreeBars className='text-xl font-bold'></GoThreeBars> </label>

                </div>
                <div className="drawer-side bg-[#D1A054] text-white">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>




                    <div className="menu p-4 w-80  bg-[#D1A054] text-white">
                        <div className='text-black border-b-2'>
                            <h2 className='text-center uppercase font-bold text-2xl'>BISTRO BOSS</h2>
                            <h2 className='text-center uppercase mt-2 text-xl'>Restaurant</h2>
                        </div>
                        <li> <NavLink className='' to='/dashboard'>User home</NavLink> </li>
                        <li> <NavLink className='' to='/items'>Manage Items</NavLink> </li>
                        {
                            data?.role === "Admin" && <>
                                <li> <NavLink className='' to='/userlist'>Manage Users</NavLink> </li>
                                <li> <NavLink className='' to='/additem'>Add Item</NavLink> </li>
                            </>
                        }

                        <li> <NavLink className='' to='/'>Home</NavLink> </li>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;