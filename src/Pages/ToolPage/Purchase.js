import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../SharedPage/Loading';
import OrderForm from './OrderForm';
import ToolDetail from './ToolDetail';

const Purchase = () => {
    const { toolId } = useParams();
    const [tool, setTool] = useState({});
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        // const url = "tools.json/${toolId}";
        const url = `https://hidden-cliffs-80104.herokuapp.com/tool/${toolId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className='grid lg:grid-cols-2 md:grid-rows-1 gap-4 '>

                <ToolDetail
                    key={tool._id}
                    tool={tool}
                    setTool={setTool}
                ></ToolDetail>

                <OrderForm
                    key={tool._id}
                    tool={tool}
                    setTool={setTool}
                ></OrderForm>
            </div>
        </div>
    );
};

export default Purchase;