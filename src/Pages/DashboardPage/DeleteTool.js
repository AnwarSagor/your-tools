import React, { useEffect, useState } from 'react';

const DeleteTool = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch(`https://hidden-cliffs-80104.herokuapp.com/tool`)
            .then(res => res.json())
            .then(data => setTools(data));
    }, []);

    const handleToolDelete = id => {
        const proceed = window.confirm('Are you sure to delete?')
        if (proceed) {
            console.log('deleting item', id);
            const url = `https://hidden-cliffs-80104.herokuapp.com/tool/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }


    return (
        <div>
            <h1 className='text-2xl text-center font-bold m-2 text-transparent bg-clip-text bg-gradient-to-b from-blue-900 to-cyan-300'>Total Tools: {tools.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className='text-center'>
                            <th>Serial</th>
                            <th className='text-start'>Tool Name</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            tools.map((tool, index) =>
                                <tr key={tool._id}>
                                    <th className='text-center'>{index + 1}</th>
                                    <td>{tool.name}</td>
                                    <td className='flex justify-center'>
                                        <figure className='h-20 text'>
                                            <img className='max-h-20 max-w-20' src={tool.img} alt="Tool" />
                                        </figure>
                                    </td>
                                    <td className='text-center'>{tool.quantity}</td>
                                    <td className='text-center'>{tool.price}</td>

                                    <td className='text-center'>
                                        <button
                                            onClick={() => handleToolDelete(tool._id)}
                                            className='btn btn-sm bg-gradient-to-b from-red-700 to-red-300'
                                        >XXX
                                        </button>
                                    </td>
                                </tr>)
                        }
                    </tbody>

                </table>
            </div>

            {/* <div className='grid lg:grid-cols-5 md:grid-rows-1  gap-4'>

                {
                    tools.map(tool => <div key={tool._id} className="card card-compact my-5 bg-base-100 shadow-xl">
                        <figure className='h-60'>
                            <img className='max-h-60 p-2' src={tool.img} alt="Tool" />
                        </figure>
                        <div className="card-body h-72 text-transparent bg-clip-text bg-gradient-to-b from-blue-900 to-cyan-300">
                            <h2 className="card-title">{tool.name}</h2>
                            <h3>Price per unit: {tool.price}</h3>
                            <h3>Available quantity: {tool.quantity}</h3>
                            <h3 className='text-red-400'>Minimum order quantity: 20 pieces!</h3>

                            <button
                                onClick={() => handleToolDelete(tool._id)}
                                className='btn btn-sm'
                            >XXX
                            </button>


                        </div>
                    </div>)
                }

            </div> */}
        </div>
    );
};

export default DeleteTool;