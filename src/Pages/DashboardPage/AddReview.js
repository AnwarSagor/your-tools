import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const AddReview = () => {

    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            {!admin ?

                <div className='mx-12 my-4'>
                    <h2 className='font-extrabold text-center text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blue-900 to-cyan-300'>REVIEWS</h2>
                </div>

                : <h2 className="font-extrabold text-center text-5xl text-transparent bg-clip-text bg-gradient-to-b from-red-700 to-red-300 '">You are an Admin! <br />So, not allowed here!!</h2>

            }
        </div>
    );
};

export default AddReview;