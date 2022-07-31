import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Cancel = () => {
    const { id } = useParams();
    const [cancel, setCancel] = useState([]);
    const [order, setOrder] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?');

        if (proceed) {
            const url = `https://hidden-cliffs-80104.herokuapp.com/order/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setCancel(data);
                })
            navigate('/dashboard/myOrders');
        }

    }

    useEffect(() => {
        const url = `https://hidden-cliffs-80104.herokuapp.com/order/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    return (
        <div>

            <div className='flex justify-center my-10'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <h2 className="font-extrabold text-center text-2xl text-transparent bg-clip-text bg-gradient-to-b from-blue-900 to-cyan-300 '">Tool Detail</h2>
                    <figure class="px-10 pt-10">
                        <img src={order.img} alt="Tool Image" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{order.toolName}</h2>
                        <p>Order for {order.quantity} pieces cost ${order.price * order.quantity}.</p>

                        <div class="card-actions">
                            <button onClick={() => handleDelete(id)} class="btn btn-sm bg-gradient-to-b from-blue-900 to-cyan-300">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cancel;