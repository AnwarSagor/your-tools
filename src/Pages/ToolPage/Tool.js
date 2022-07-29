import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool, setPurchase }) => {
    const { _id, name, img, price, quantity, supplier, description } = tool;

    const navigate = useNavigate();

    const navigateToPurchase = id => {
        navigate(`/tool/${id}`);
    }
    return (
        <div>
            <div key={tool._id} className="card card-compact my-5 bg-base-100 shadow-xl">
                <figure>
                    <img src={img} alt="Tool Image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h3>Price per unit: {price}</h3>
                    <h3>Available quantity: {quantity}</h3>
                    <h3>Minimum order quantity: 20 pieces!</h3>
                    <p> <strong>Short Description: </strong> {description}</p>
                    <button onClick={() => navigateToPurchase(_id)} className='btn'>ORDER NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;