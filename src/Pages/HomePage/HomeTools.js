import React from 'react';
import { useNavigate } from 'react-router-dom';
import useTool from '../../hooks/useTool';

const HomeTools = (tool) => {
    const { _id, name, img, price, quantity, supplier, description } = tool;
    const [tools, setTools] = useTool();

    return (
        <div className='lg:px-12 my-4' >
            <h2 className='font-extrabold text-center text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blue-900 to-cyan-300'>YOUR TOOLS</h2>

            <div className='grid lg:grid-cols-3 md:grid-rows-1 gap-4'>
                {
                    tools.slice(0, 3).map(tool =>
                        <div key={tool._id} className="card card-compact w-96 my-5 bg-base-100 shadow-xl">
                            <figure>
                                <img src={tool.img} alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Name: {tool.name}</h2>
                                <h3>Minimum order quantity: { }</h3>
                                <h3>Available quantity: { }</h3>
                                <h3>Price (per unit price): {tool.price}</h3>
                                <h3>Quantity: {tool.quantity}</h3>
                                <h3>Supplier: {tool.supplier}</h3>
                                <p> <strong>Short Description: </strong> {tool.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default HomeTools;