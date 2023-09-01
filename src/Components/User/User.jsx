import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {_id, firstName, lastName, email} = user
    const handleDelete = _id => {
       fetch(`http://localhost:3000/users/${_id}`,{
        method: 'DELETE',
       })
       .then(res => res.json())
       .then(data => {
        if(data.deletedCount > 0) {
            alert(' Delete Success')
        }
        console.log(data)
       })

    }
    return (
        <div>
        <div className='m-10 p-5 border border-slate-300	rounded'>
            <h1>Name: {firstName} {lastName}</h1>
            <h4>Email: {email}</h4>
            <h6>ID NO: {_id}</h6>
            <button className='mx-auto p-2 mt-2 rounded text-white hover:bg-emerald-600 border border-solid bg-emerald-400 border-indigo-600 ' onClick={() => handleDelete(user._id)}>Delete</button>
            <Link className='ms-4 mx-auto p-2 mt-2 rounded text-white hover:bg-emerald-600 border border-solid bg-emerald-400 border-indigo-600 ' to={`/update/${_id}`}>Update Form</Link>
        </div>
       
        </div>
    );
};

export default User;