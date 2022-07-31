import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    console.log(users);
    useEffect(() => {
        // fetch('tools.json')
        fetch('http://localhost:5000/user', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            {admin
                ? <div>
                    <h2 className='text-2xl mb-4 ml-4 font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-900 to-cyan-300'>Total users: {users.length}</h2>
                    <div class="overflow-x-auto">
                        <table class="table w-full text-center">
                            <thead>
                                <tr>
                                    <th>Serial</th>
                                    <th>User</th>
                                    <th>Role</th>
                                    <th>Remove user</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) =>
                                        <User
                                            key={user._id}
                                            user={user}
                                            index={index}
                                        ></User>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                : <h2 className="font-extrabold text-center text-5xl text-transparent bg-clip-text bg-gradient-to-b from-red-700 to-red-300 '">You are not an Admin!</h2>
            }
        </div>
    );
};

export default Users;