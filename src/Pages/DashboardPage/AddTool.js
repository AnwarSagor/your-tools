import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const AddTool = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const onSubmit = data => {
        console.log(data)
        const url = `https://hidden-cliffs-80104.herokuapp.com/tool`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                reset()
                toast.success(`Successfully added the tool`);
            })
    };


    return (
        <div className='flex h-screen justify-center lg:items-center'>

            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="font-extrabold text-center text-2xl text-transparent bg-clip-text bg-gradient-to-b from-blue-900 to-cyan-300 '">Provide Info about Tool</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input className="input input-bordered w-full max-w-xs mb-2" placeholder='Tool Name' {...register("name")} />
                        <input className="input input-bordered w-full max-w-xs mb-2" placeholder='Price per unit' type="number" {...register("price")} />
                        <input className="input input-bordered w-full max-w-xs mb-2" placeholder='Quantity' type="number" {...register("quantity")} />
                        <input className="input input-bordered w-full max-w-xs mb-2" placeholder='Photo URL' type="text" {...register("img")} />
                        {/* <input className="input input-bordered w-full max-w-xs" type="file" {...register("img")} /> */}
                        {admin
                            ? <input className='btn w-full max-w-xs' type="submit" value="Add Tool" />
                            : <h2 className="font-extrabold text-center text-2xl text-transparent bg-clip-text bg-gradient-to-b from-red-700 to-red-300 '">You are not an Admin!</h2>

                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTool;