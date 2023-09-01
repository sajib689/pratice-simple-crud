import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import User from './User/User';

const Users = () => {
    const users = useLoaderData()
    return (
        <>
        <div className=' grid grid-cols-4 gap-5'>
            {
                users.map(user => <User key={user._id} user={user}></User>)
            }
            
        </div>
        <Link className='mx-auto p-2 mt-2 rounded text-white hover:bg-emerald-600 border border-solid bg-emerald-400 border-indigo-600' to='/'>Back To User</Link>
        </>
    );
};

export default Users;