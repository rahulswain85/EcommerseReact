import React, { useState } from 'react'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <>
      <form className='w-full flex justify-center items-center'>
        <div className="bg-black/20 flex flex-col justify-center gap-2 w-[90%] rounded-xl m-2 p-6">
          <input
            value={email}
            onChange={e=>setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            name="email"
            className="bg-white"
          />
          <input
            type="password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            placeholder="Enter your password"
            name="password"
            className="bg-white"
          />
          <button className='bg-black text-white font-bold px-4 py-2 rounded-full'>Login</button>
        </div>
      </form>
    </>
  );
}

export default Login