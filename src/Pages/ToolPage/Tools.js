import React from 'react';
import useTool from '../../hooks/useTool';
import PrimaryButton from '../SharedPage/PrimaryButton';

const Tools = () => {
    const [tools, setTools] = useTool();

    return (
        <div class='lg:px-12 my-4 mb-12 pb-4'>
            <h2 class='font-extrabold text-center text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blue-900 to-cyan-300'>YOUR TOOLS</h2>
            <div class='grid lg:grid-cols-3 md:grid-rows-1  gap-4'>
                {
                    tools.map(tool =>
                        <div key={tool._id} class="card card-compact w-96 my-5 bg-base-100 shadow-xl">
                            <figure>
                                <img src={tool.img} alt="Shoes" />
                            </figure>
                            <div class="card-body">
                                <h2 class="card-title">Name: {tool.name}</h2>
                                <h3>Minimum order quantity: { }</h3>
                                <h3>Available quantity: { }</h3>
                                <h3>Price (per unit price): {tool.price}</h3>
                                <h3>Quantity: {tool.quantity}</h3>
                                <h3>Supplier: {tool.supplier}</h3>
                                <p> <strong>Short Description: </strong> {tool.description}</p>
                                <div class="card-actions justify-start">
                                    <PrimaryButton>BUY NOW</PrimaryButton>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Tools;