import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user }) => {

    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
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
            <th>1</th>
            <td>{email}</td>

            <td>
                {role !== 'admin'
                    ? <button onClick={makeAdmin} className='btn btn-sm'>Make admin</button>
                    : <button className='btn btn-sm btn-success'>Admin</button>
                }
            </td>

            <td><button className='btn btn-sm btn-error'>XXX</button></td>
        </tr>
    );
};

export default User;