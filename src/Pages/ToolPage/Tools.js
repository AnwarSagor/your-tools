import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useTool from '../../hooks/useTool';

const Tools = () => {
    const [tools, setTools] = useTool();


    return (
        <div class='grid lg:grid-cols-3 md:grid-rows-1  gap-4 lg:px-12 mb-12 '>
            {
                tools.map(tool =>
                    <div class="card card-compact w-96 my-5 bg-base-100 shadow-xl">
                        <figure><img src={tool.img} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Name: {tool.name}</h2>
                            <h3>Minimum order quantity: { }</h3>
                            <h3>Available quantity: { }</h3>
                            <h3>Price (per unit price): {tool.price}</h3>
                            <h3>Quantity: {tool.quantity}</h3>
                            <h3>Supplier: {tool.supplier}</h3>
                            <p> <strong>Short Description: </strong> {tool.description}</p>
                            <div class="card-actions justify-start">
                                <button class="btn bg-gradient-to-r from-blue-900 to-cyan-500">Buy Now</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Tools;