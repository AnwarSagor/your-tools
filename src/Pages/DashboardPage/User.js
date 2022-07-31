import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, index }) => {

    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://hidden-cliffs-80104.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    window.location.reload();
                    toast.success(`Successfully made an admin`);
                }

            })
    }

    return (
        <tr >
            <th>{index + 1}</th>

            <td >{email}</td>

            <td>
                {role !== 'admin'
                    ? <button onClick={makeAdmin} className='btn btn-sm'>Make admin</button>
                    : <button className='btn btn-sm bg-gradient-to-b from-blue-900 to-cyan-300'>Admin</button>
                }
            </td>

            <td><button className='btn btn-sm bg-gradient-to-b from-red-600 to-red-300'>XXX</button></td>
        </tr>
    );
};

export default User;