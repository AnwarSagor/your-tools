import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../SharedPage/Loading';

const ToolDetail = ({ tool, setTool }) => {
    const { _id, name, img, price, quantity, shortDescription } = tool;
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div>
                    <figure className='h-60'>
                        <img className='max-h-60 p-2' src={img} alt="Tool" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <h3>Minimum order quantity: { }</h3>
                        <h3>Available quantity: {
                            quantity > 14
                                ? quantity
                                : <strong className='text-red-500'>Out of min stock!!!</strong>

                        }</h3>
                        <h3>Price (per unit price): {price}</h3>
                        <p className='text-justify'> <strong>Short Description: </strong> {shortDescription}</p>
                        {/* <button disabled={tool.quantity < 14} className='btn'>Purchase</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolDetail;