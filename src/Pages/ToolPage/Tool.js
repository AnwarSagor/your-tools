import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool, setPurchase }) => {
    const { _id, name, img, price, quantity, shortDescription } = tool;

    const navigate = useNavigate();

    const navigateToPurchase = id => {
        navigate(`/tool/${id}`);
    }

    return (
        <div>
            <div key={tool._id} className="card card-compact my-5 bg-base-100 shadow-xl">
                <figure className='h-60'>
                    <img className='max-h-60 p-2' src={img} alt="Tool" />
                </figure>
                <div className="card-body h-72 text-transparent bg-clip-text bg-gradient-to-b from-blue-900 to-cyan-300">
                    <h2 className="card-title">{name}</h2>
                    <h3>Price per unit: {price}</h3>
                    <h3>Available quantity: {quantity}</h3>
                    <h3 className='text-red-400'>Minimum order quantity: 20 pieces!</h3>
                    <p className='overflow-clip overflow-ellipsis'> <strong>Short Description: </strong> <small className=''>{shortDescription}</small></p>

                    <button onClick={() => navigateToPurchase(_id)} className='btn bg-gradient-to-b from-blue-900 to-cyan-300'>ORDER NOW</button>


                </div>
            </div>
        </div>
    );
};

export default Tool;