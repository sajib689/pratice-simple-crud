import { Link } from "react-router-dom";

function App() {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target
    const firstName = form.firstName.value 
    const lastName = form.lastName.value
    const email = form.email.value
    const user = {firstName, lastName, email}
    fetch('http://localhost:3000/users',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then( res => res.json())
    .then( data => {
      if(data) {
        alert('Successful Form Fill Up')
        form.reset()
      }
    })
  }
  return (
    <>
      <div className="">
        <form onSubmit={handleSubmit} className="container flex flex-col justify-center items-center h-screen">
          <input
            className="mt-6 p-2.5 w-96 border-solid border-2 border-indigo-600 rounded "
            type="text"
            name="firstName"
            placeholder="Enter your first name"
          />
          <input
            className="mt-6 p-2.5 w-96 border-solid border-2 border-indigo-600 rounded "
            type="text"
            name="lastName"
            placeholder="Enter your last name"
          />
          <input
            className="mt-6 p-2.5 w-96 border-solid border-2 border-indigo-600 rounded "
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <input
            className="cursor-pointer bg-violet-500 text-white hover:bg-violet-600 active:bg-violet-700 mt-6 p-2.5 w-96 border-solid border-2 border-indigo-600 rounded "
            type="submit"
            value="Submit"
          />
        </form>
        <Link className='mx-auto p-2 mt-2 rounded text-white hover:bg-emerald-600 border border-solid bg-emerald-400 border-indigo-600' to='/users'>Go To User</Link>
      </div>
    </>
  );
}

export default App;
