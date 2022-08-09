import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const OrderForm = ({ tool, setTool }) => {
    const { _id, name, img, price, quantity, description } = tool;

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()

    const { register, handleSubmit, getValues, watch, formState: { errors } } = useForm({
        defaultValues: {
            price: tool.price,
            email: user.email,
            name: user.displayName,
        }
    });
    console.log(watch(['address', 'mobile', 'totalPrice']));

    const [orderTotalPrice, setOrderTotalPrice] = useState('');
    // console.log(orderTotalPrice);

    const watchPrice = watch('price');
    const watchQuantity = watch('quantity');
    const watchTotalPrice = watchPrice * watchQuantity;



    const onSubmit = data => {
        console.log(data)

        const url = `https://hidden-cliffs-80104.herokuapp.com/order`;
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


                if (data.success) {
                    toast('Your info is submitted')
                }
            })
        navigate('/dashboard/myOrders');
    };


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="font-extrabold text-center text-2xl text-transparent bg-clip-text bg-gradient-to-b from-blue-900 to-cyan-300">Provide Information</h2>


                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-clos-1 gap-1">

                        <input className="input input-bordered w-full max-w-xs"
                            value={name || ''}
                            {...register("toolName")} />

                        <input className="input input-bordered w-full max-w-xs"
                            // value={user?.displayName || ''}
                            {...register("name")} />

                        <input className="input input-bordered w-full max-w-xs"
                            placeholder='Address'
                            {...register("address")} />

                        <input className="input input-bordered w-full max-w-xs"
                            placeholder='Mobile'
                            {...register("mobile")} />

                        <input className="input input-bordered w-full max-w-xs"
                            // value={user?.email || ''}
                            {...register("email")} />

                        <div className="flex">
                            <label htmlFor="price" className='flex w-full max-w-xs items-center'>Price per unit:</label>
                            <input className="input input-bordered w-full max-w-xs" placeholder='Unit Price'
                                // value={tool.price} 
                                type="text" {...register("price")} />
                        </div>

                        <div className='flex'>
                            <label htmlFor="totalPrice" className='flex w-full max-w-xs items-center'>Total Price:</label>

                            <input className="input input-bordered w-full max-w-xs"
                                placeholder='Total Price'
                                value={watchTotalPrice}
                                type="number"
                                {...register("totalPrice")} />
                        </div>

                        <div className="flex">
                            <label htmlFor="quantity" className='flex w-full max-w-xs items-center'>Order quantity:</label>
                            <input className="input input-bordered w-full max-w-xs"
                                type="number"
                                placeholder='Minimum 20'
                                {...register("quantity")} />
                        </div>

                        <input className="input input-bordered w-full max-w-xs hidden" value={tool?.img || ''} type="text" {...register("img")} />



                        <input className='btn mt-3 w-full max-w-xs bg-gradient-to-b from-blue-900 to-cyan-300' type="submit" value="SUBMIT ORDER" />

                    </div>

                </form>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default OrderForm;