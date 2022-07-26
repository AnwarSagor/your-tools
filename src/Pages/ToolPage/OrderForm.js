import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const OrderForm = ({ tool, setTool }) => {
    const { _id, name, img, price, quantity, description } = tool;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()

    const onSubmit = data => {
        console.log(data)

        const url = `http://localhost:5000/order`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        navigate('/tools');
    };


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <h2 className="font-extrabold text-center text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blue-900 to-cyan-300 '">Order Form</h2>
            <div className="card-body">
                <h2 className='text-center font-bold text-xl'>Submit Your Information</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-clos-1 gap-1">
                        <input className="input input-bordered w-full max-w-xs" value={user?.displayName || ''} {...register("name")} />
                        <input className="input input-bordered w-full max-w-xs" placeholder='Address' {...register("address")} />
                        <input className="input input-bordered w-full max-w-xs" placeholder='Mobile' {...register("mobile")} />
                        <input className="input input-bordered w-full max-w-xs" value={user?.email || ''} {...register("email")} />
                        <input className="input input-bordered w-full max-w-xs" placeholder='Price' type="number" {...register("price")} />
                        <input className="input input-bordered w-full max-w-xs" placeholder='Quantity' type="number" {...register("quantity")} />
                        <input className="input input-bordered w-full max-w-xs" placeholder='Photo URL' type="text" {...register("img")} />

                        <input className='btn btn-outline w-full max-w-xs' type="submit" value="SUBMIT ORDER" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default OrderForm;