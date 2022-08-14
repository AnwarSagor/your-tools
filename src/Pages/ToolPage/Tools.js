import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    const [purchase, setPurchase] = useState(null);

    useEffect(() => {
        // const url = 'tools.json'
        const url = `https://hidden-cliffs-80104.herokuapp.com/tool`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTools(data))
    }, []);


    return (
        <div className='lg:px-12'>
            <h2 className='font-extrabold mt-4 text-center text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blue-900 to-cyan-300'>YOUR TOOLS: {tools.length}</h2>
            <div className='grid lg:grid-cols-4 md:grid-rows-1  gap-4'>
                {
                    tools.map(tool =>
                        <Tool
                            key={tool._id}
                            tool={tool}
                            setPurchase={setPurchase}
                        ></Tool>
                    )
                }
            </div>
        </div>
    );
};

export default Tools;