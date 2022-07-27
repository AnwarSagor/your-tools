import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();


    useEffect(() => {
        // const url = 'tools.json'
        // const url = ;
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    // if (res.status === 401 || 403) {
                    //     signOut(auth);
                    //     localStorage.removeItem('accessToken')
                    //     navigate('/');
                    // }
                    return res.json()
                })
                .then(data => {

                    setOrders(data)
                })
        }
    }, [user]);

    return (
        <div>
            <h1 className='text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-b from-blue-900 to-cyan-300'>My total orders: {orders.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Tool Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Pay</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.toolName}</td>
                                <td>{order.quantity}</td>
                                <td>{order.price}</td>
                                <td>
                                    {/* <button class="btn btn-circle bg-gradient-to-b from-blue-900 to-cyan-300">Pay</button> */}
                                    <button class="btn btn-sm bg-gradient-to-b from-blue-900 to-cyan-300">Pay</button>
                                </td>
                                <td>
                                    {/* <button className="btn btn-circle  bg-gradient-to-b from-red-700 to-red-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button> */}
                                    <button class="btn btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>

                                    </button>
                                </td>


                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;