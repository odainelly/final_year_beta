// import { i } from 'motion/react-client';
import React from 'react'
import { useState } from 'react';

const Login = () => {

  const [currentState, setCurrentState] = useState('Sign Up');
  const onSubmitHandler = async (event) => {
    event.preventDefault();

  }

  return (
    <div>
      <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-90% sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p  className='happy-monkey-regular text-4xl'>{currentState}</p>
          <hr className="border-none h-[1.5px] w-8  bg-gray-800" />
        </div>
        {currentState === 'Login' ? '' : <input type="text" className="w-full px-3 py-2 border focus:outline-none focus:ring-1 focus:ring-black-500 border-gray-800" placeholder="Name" required />}
        <input type="email" className="w-full px-3 py-2 border focus:outline-none focus:ring-1 focus:ring-black-500 border-gray-800" placeholder="Email" required />
        <input type="password" className="w-full px-3 py-2 border focus:outline-none focus:ring-1 focus:ring-black-500 border-gray-800" placeholder="Password" required />
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="hover:text-gray-600 cursor-pointer">Forgot Password?</p>
          {
            currentState === 'Login' ? <p onClick={()=> setCurrentState('Sign Up')} className="hover:text-gray-600 cursor-pointer">Create account</p> : <p onClick={() => setCurrentState('Login')} className="hover:text-gray-600 cursor-pointer">Already have an account?</p>
          }
        </div>
        <button className="bg-black text-white py-2 px-8 mt-4">
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
        
    </div>
  )
}

export default Login