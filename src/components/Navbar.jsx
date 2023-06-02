import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import useCart from '../hooks/useCart';


const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext)

    const [data] = useCart()
    const navItem = <>
        <li> <NavLink to='/'>Home</NavLink> </li>
        <li><NavLink to='/menu'>Menu</NavLink></li>
        <li><NavLink to='/order/salad'>Order</NavLink></li>

        {
            !user && <li><NavLink to='/login'>Login</NavLink></li>
        }
        {
            user && <button onClick={logOutUser} className='btn'>Logout</button>
        }

    </>
    console.log(data)
    return (
        <div className="navbar text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>



                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
           <Link to='/items'>
           <button className="btn gap-2">
                item
                <div className="badge badge-secondary">+{data?.length || 0}</div>
            </button>
            </Link>
            <div className="navbar-end">
               <Link className='btn' to='/dashboard'>Dashboard</Link>
            </div>
        </div>
    );
};

export default Navbar;