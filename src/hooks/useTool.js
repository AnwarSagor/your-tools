import { useEffect, useState } from 'react';

const useTool = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('tools.json')

            .then(res => res.json())
            .then(data => setTools(data))
    }, []);
    return [tools, setTools]
}

export default useTool;
