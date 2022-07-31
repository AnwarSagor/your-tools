import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user)

    return (
        <div className='flex justify-center my-10'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <h2 className="font-extrabold text-center text-2xl text-transparent bg-clip-text bg-gradient-to-b from-blue-900 to-cyan-300 '">My Profile</h2>

                <figure class="px-10 pt-10">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{user.displayName}</h2>
                    <p>{user.email}</p>
                    <div class="card-actions">
                        <button class="btn btn-sm bg-gradient-to-b from-blue-900 to-cyan-300">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;