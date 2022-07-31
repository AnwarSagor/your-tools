import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex h-screen justify-center items-center '>
            <div className='grid grid-flow-row'>
                <div>
                    <img src="https://images.viblo.asia/11ff00f7-7905-4b7f-8f06-2a65eda7456b.png" alt="" />
                </div>

                <div className='flex justify-center mt-10'>
                    <button class="btn btn-wide bg-gradient-to-b from-blue-900 to-cyan-300"> <Link to={'/home'}>Click here to go home</Link></button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;