import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user);


    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tools">Tools</Link></li>
        <li><Link to="/home#reviews">Reviews</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/about">About</Link></li>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        <li>
            {user
                ? <>
                    <button className="btn btn-ghost" onClick={handleSignOut}>Sign-out</button>
                    <button className="btn btn-ghost lowercase">{user.email}</button>
                </>
                : <Link to="/signIn">Sign-in</Link>
            }
        </li>
        {admin && <button class="btn btn-sm mt-2 bg-white text-black">ADMIN</button>}

    </>

    return (
        <div className="navbar mb-6 bg-gradient-to-t from-cyan-500 to-blue-900 ... text-white">

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>

                <a className="btn btn-ghost normal-case text-2xl">Your Tools</a>
            </div>

            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>


            <div className='navbar-end lg:hidden'>
                <label tabindex="1" for="dashboard-sidebar" className="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Header;