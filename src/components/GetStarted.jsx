import { useState } from 'react'
import Login from './Login';
import SignUp from './SignUp';

function GetStarted() {

    const [toggleSignUpSignIn, setToggleSignUpSignIn] = useState("signup");

    function handleToggle(e) {

        if (e == "signup") {
            setToggleSignUpSignIn("signup");
        }
        else {
            setToggleSignUpSignIn("login")
        }
  }
  
  return (
    <>
      <div className="flex w-full min-h-screen bg-amber-50">
        <div className="flex flex-col justify-around items-center rounded-xl m-auto bg-linear-to-bl from-white to-slate-200 w-[90vh] h-[50vh] ">
          <div className="flex gap-2 mt-2 bg-amber-50 rounded-full font-bold">
            <div
              data-name="signup"
              className={
                toggleSignUpSignIn == "signup"
                  ? `bg-black text-white py-3 px-4 rounded-full cursor-pointer`
                  : `py-3 px-4 cursor-pointer`
              }
              onClick={(e) => handleToggle(e.currentTarget.dataset.name)}
            >
              Sign Up
            </div>
            <div
              data-name="login"
              className={
                toggleSignUpSignIn == "login"
                  ? `bg-black text-white py-3 px-4 rounded-full cursor-pointer`
                  : `py-3 px-4 cursor-pointer`
              }
              onClick={(e) => handleToggle(e.currentTarget.dataset.name)}
            >
              Login In
            </div>
          </div>
          {toggleSignUpSignIn=="login" ? <Login /> : <SignUp />}
        </div>
      </div>
    </>
  );
}

export default GetStarted