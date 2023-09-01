import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Update = () => {
    const user = useLoaderData()
    const {_id, firstName, lastName, email} = user
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target 
        const firstName = form.firstName.value 
        const lastName = form.lastName.value
        const email = form.email.value
        const updateUser = {_id,firstName, lastName, email}
        fetch(`http://localhost:3000/users/${_id}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateUser)
        })
        .then( res => res.json())
        .then( data => {
            form.reset()
            alert(`Mr/Ms ${user.lastName} Updated successfully`)
        })
    }
    return (
        <div>
        <form onSubmit={handleUpdate} className='flex-col flex m-10 p-5 border border-slate-300	rounded'>
            <input className="mt-6 mx-auto p-2.5 w-96 border-solid border-2 border-indigo-600 rounded " type="text" name="firstName" defaultValue={firstName}/>
            <input className="mt-6 mx-auto p-2.5 w-96 border-solid border-2 border-indigo-600 rounded " type="text" name="lastName" defaultValue={lastName}/>
            <input className="mt-6 mx-auto p-2.5 w-96 border-solid border-2 border-indigo-600 rounded " type="text" name="email" defaultValue={email}/>
            <br />
            <button className='w-96 mx-auto p-2 mt-2 rounded text-white hover:bg-emerald-600 border border-solid bg-emerald-400	 border-indigo-600 '>Update</button>
        </form>
        <Link className='mx-auto p-2 mt-2 rounded text-white hover:bg-emerald-600 border border-solid bg-emerald-400 border-indigo-600' to='/users'>Back To User</Link>
        </div>
    );
};

export default Update;