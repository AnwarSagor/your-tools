import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../SharedPage/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/signIn" state={{ from: location }} replace />;
    }

    // if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
    //     return <div className='flex h-screen justify-center items-center'>
    //         <div className="card w-96 bg-base-100 shadow-xl">
    //             <div className="card-body items-center text-center">
    //                 <h2 className="card-title">Email Verification</h2>
    //                 <p className='text-red-500'> Your Email is not verified!!</p>
    //                 <p className='text-primary'>Please Verify your email address</p>
    //                 <div className="card-actions">
    //                     <button
    //                         className='btn btn-outline btn-secondary'
    //                         onClick={async () => {
    //                             await sendEmailVerification();
    //                             toast('Sent email');
    //                         }}>
    //                         Send Verification email again
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
    //         <ToastContainer></ToastContainer>
    //     </div>
    // }


    return children;
};


export default RequireAuth;