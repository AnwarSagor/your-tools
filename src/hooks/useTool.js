import { useEffect, useState } from 'react';

const useTool = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        const url = 'https://hidden-cliffs-80104.herokuapp.com/tool'
        // const url = `https://infinite-badlands-56898.herokuapp.com/product`;
        fetch(url)

            .then(res => res.json())
            .then(data => setTools(data))
    }, []);
    return [tools, setTools]
}

export default useTool;
