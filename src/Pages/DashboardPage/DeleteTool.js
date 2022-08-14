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
            <h2>DeleteTool: {tools.length}</h2>

            {
                tools.map(tool => <li key={tool._id}>
                    {tool.name}
                    <button
                        onClick={() => handleToolDelete(tool._id)}
                        className='btn btn-sm'
                    >XXX
                    </button>
                </li>)
            }
        </div>
    );
};

export default DeleteTool;