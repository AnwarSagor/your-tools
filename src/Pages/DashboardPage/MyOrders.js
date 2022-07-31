import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const navigate = useNavigate();


    useEffect(() => {
        // const url = 'tools.json'
        // const url = ;
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
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
            {!admin ?
                <>
                    <h1 className='text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-b from-blue-900 to-cyan-300'>My total orders: {orders.length}</h1>
                    <div class="overflow-x-auto">
                        <table class="table w-full">
                            <thead>
                                <tr className='text-center'>
                                    <th>Serial</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Tool Name</th>
                                    <th>Image</th>
                                    <th>Quantity</th>
                                    <th>Unit Price</th>
                                    <th>Total Price</th>
                                    <th>Pay</th>
                                    <th>Cancel</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    orders.map((order, index) =>
                                        <tr>
                                            <th className='text-center'>{index + 1}</th>
                                            <td>{order.name}</td>
                                            <td>{order.email}</td>
                                            <td>{order.toolName}</td>
                                            <td className='w-20'> <img src={order.img} alt="" /> </td>
                                            <td className='text-center'>{order.quantity}</td>
                                            <td className='text-center'>{order.price}</td>
                                            <td className='text-center'>{order.price * order.quantity}</td>

                                            <td className='text-center'>
                                                {(order.price > 0 && !order.paid && order.quantity > 0) && <Link to={`/dashboard/payment/${order._id}`}><button class="btn btn-sm bg-gradient-to-b from-blue-900 to-cyan-300">Pay</button></Link>}
                                                {(order.price > 0 && order.paid && order.quantity > 0) && <button class="btn btn-sm bg-gradient-to-b from-green-900 to-green-300">Paid</button>}
                                            </td>

                                            <td className='text-center'>
                                                <Link to={`/dashboard/cancel/${order._id}`}>
                                                    <button class="btn disabled btn-sm bg-gradient-to-b from-red-700 to-red-300">X</button>
                                                </Link>
                                            </td>
                                        </tr>)
                                }
                            </tbody>

                        </table>
                    </div>
                </>
                : <h2 className="flex h-screen justify-center items-center font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-b from-red-700 to-red-300 '">You are an Admin!</h2>

            }

        </div>
    );
};

export default MyOrders;