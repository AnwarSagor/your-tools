import React from 'react';
import { useNavigate } from 'react-router-dom';
import useTool from '../../hooks/useTool';

const HomeTools = (tool) => {
    const { id, img, name, quantity, price, supplier, description, } = tool;
    const [tools, setTools] = useTool();
    const navigate = useNavigate()

    const navigateToToolDetail = id => {
        navigate(`/tool/${id}`);
    }

    return (
        <div class='grid lg:grid-cols-3 md:grid-rows-1 gap-4'>
            {
                tools.slice(0, 3).map(tool =>
                    <div class="card card-compact w-96 my-5 bg-base-100 shadow-xl" key={id}>
                        <figure><img src={tool.img} alt="Image" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Name: {name}</h2>
                            <h3>Minimum order quantity: { }</h3>
                            <h3>Available quantity: {quantity}</h3>
                            <h3>Price (per unit price): {price}</h3>
                            <h3>Supplier: {supplier}</h3>
                            <p> <strong>Short Description: </strong> {description}</p>
                            <div class="card-actions justify-start">
                                <button onClick={() => navigateToToolDetail(tool.id)} class="btn bg-gradient-to-r from-blue-900 to-cyan-500">Buy Now</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default HomeTools;