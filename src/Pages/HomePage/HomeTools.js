import React from 'react';
import { useNavigate } from 'react-router-dom';
import useTool from '../../hooks/useTool';

const HomeTools = (tool) => {
    // const { _id, name, img, price, quantity, supplier, shortDescription } = tool;
    const [tools, setTools] = useTool();

    return (
        <div className='lg:px-12 my-4' >
            <h2 className='font-extrabold text-center text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blue-900 to-cyan-300'>TOOLS</h2>

            <div className='grid lg:grid-cols-5 md:grid-rows-1 gap-4'>
                {
                    tools.slice(0, 5).map(tool =>
                        <div key={tool._id} className="card card-compact my-5 bg-base-100 shadow-xl">
                            <figure className='h-60'>
                                <img className='max-h-60 p-2' src={tool.img} alt="Tool" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-transparent bg-clip-text bg-gradient-to-b from-blue-900 to-cyan-300"><p className='text-center'>{tool.name}</p></h2>
                                <h3 className='text-center text-red-400'>Minimum order quantity: 20</h3>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default HomeTools;