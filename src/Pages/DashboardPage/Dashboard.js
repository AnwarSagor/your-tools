import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-900 to-cyan-300'>Your Dashboard</h2>
                <Outlet></Outlet>

            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-40 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/myOrders">My Orders</Link></li>
                    <li><Link to="/dashboard/addReview">Add Review</Link></li>
                    <li><Link to="/dashboard/myProfile">My Profie</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;