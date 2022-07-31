import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const AddReview = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const navigate = useNavigate()


    const onSubmit = data => {
        console.log(data)
        const url = `https://hidden-cliffs-80104.herokuapp.com/review`;
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
                toast.success(`Successfully added your review`);
            })
        navigate('/home#reviews');

    };

    return (
        <div>
            {!admin
                ?
                <div className='flex h-screen justify-center'>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="font-extrabold text-center text-2xl text-transparent bg-clip-text bg-gradient-to-b from-blue-900 to-cyan-300 '">Provide Info for Review</h2>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input className="input input-bordered w-full max-w-xs mb-2" value={user.displayName} {...register("user")} />
                                <input className="input input-bordered w-full max-w-xs mb-2" value={user.email} {...register("email")} />
                                <input className="input input-bordered w-full max-w-xs mb-2" placeholder='Rating out of 5' type='number' {...register("rating")} />
                                <textarea className="input input-bordered w-full max-w-xs mb-2" placeholder='Type here to review' {...register("description")} />
                                <input className='btn w-full max-w-xs' type="submit" value="Submit Review" />
                            </form>
                        </div>
                    </div>
                </div>
                :
                <h2 className="font-extrabold text-center text-5xl text-transparent bg-clip-text bg-gradient-to-b from-red-700 to-red-300 '">You are an Admin! <br />So, not allowed here!!</h2>

            }
        </div>
    );
};

export default AddReview;