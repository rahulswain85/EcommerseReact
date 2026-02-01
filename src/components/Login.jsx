import React, { useState } from 'react'
import { useUser } from './UserContext';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { handleUserLogIn } = useUser();
  
    function handleLogIn(event) {
      event.preventDefault();
      handleUserLogIn(email, password);
      setEmail("");
      setPassword("");
  }
  
  return (
    <>
      <form
        className="w-full flex justify-center items-center"
        onSubmit={(e) => handleLogIn(e)}
      >
        <div className="bg-black/20 flex flex-col justify-center gap-2 w-[90%] rounded-xl m-2 p-6">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
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
            Login
          </button>
        </div>
      </form>
    </>
  );
}

export default Login