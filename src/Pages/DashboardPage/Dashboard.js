import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <Outlet></Outlet>
            </div>
            <div class="drawer-side mr-4 bg-gradient-to-b from-cyan-500 to-blue-900 ... text-white">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu text-white font-bold p-4 overflow-y-auto w-40 ">
                    {/* <!-- Sidebar content here --> */}

                    {!admin &&
                        <>
                            <li><Link to='/dashboard'>My Orders</Link></li>
                            <li><Link to="/dashboard/addReview">Add Review</Link></li>
                        </>
                    }

                    <li><Link to="/dashboard/myProfile">My Profile</Link></li>

                    {admin &&
                        <>
                            <li><Link to="/dashboard/users">All Users</Link></li>
                            <li><Link to="/dashboard/addTool">Add Tool</Link></li>
                            <li><Link to="/dashboard/deleteTool">Delete Tool</Link></li>
                        </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;