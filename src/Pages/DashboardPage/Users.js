import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../SharedPage/Loading';

const Users = () => {
    const [users, setUsers] = useState([]);
    console.log(users);
    useEffect(() => {
        // fetch('tools.json')
        fetch('http://localhost:5000/user')

            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h2 className='text-3xl'>All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user =>
                                <tr key={user._id}>
                                    <th>1</th>
                                    <td>{user.email}</td>
                                    <td></td>
                                    <td>Blue</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;