import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LQqszCQY2EPuiPHO1miCFepKLerepaW2icqE3QACz9chRe6HHVl5Q0sPcCm9PQ5Dnh7C5fd7RGZUWUMnxXAOkQU00FyC4Ftbr');


const Payment = () => {
    const { id } = useParams();
    const [order, setOrder] = useState([]);
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:5000/order/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    return (
        <div >
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p>Hello, {order.name}</p>
                    <h2 class="card-title">Pay for {order.toolName}</h2>
                    <p>Pay for ${order.price * order.quantity} for {order.quantity} pieces.</p>
                    {/* <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;