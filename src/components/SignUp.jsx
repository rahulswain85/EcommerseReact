import React, { useState } from 'react'
import { useUser } from './UserContext';


function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const {handleUserSignUp} = useUser();
    


    function handleSignUp(event) {
      event.preventDefault();
      handleUserSignUp(name, email, password);
      setEmail('');
      setName('');
      setPassword('');
  }
  
  return (
    <>
      <form className="w-full flex justify-center items-center" onSubmit={(e)=>handleSignUp(e)}>
        <div className="bg-black/20 flex flex-col justify-center gap-2 w-[90%] rounded-xl m-2 p-6">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              name="userName"
              className="bg-amber-50 rounded-lg py-1 text-center focus:outline-lg focus:outline-amber-500"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              name="email"
              className="bg-amber-50 rounded-lg py-1 text-center focus:outline-lg focus:outline-amber-500"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              name="password"
              className="bg-amber-50 rounded-lg py-1 text-center focus:outline-lg focus:outline-amber-500"
            />
            <button className="bg-black text-white font-bold px-4 py-2 rounded-full">
              Sign Up
            </button>
        </div>
      </form>
    </>
  );
}

export default SignUp