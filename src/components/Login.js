import React, { useState } from 'react'
import Header from './Header'


const Login = () => {
    const [IsSignin,setIsSign]=useState(true)
    const handleLogin=()=>{
        setIsSign(!IsSignin)
        console.log(IsSignin);
        
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img  alt='bg-img' src='https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_small.jpg'/>
        </div>
        
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{IsSignin ? "Sign In":"Sign Up"} </h1>
        {!IsSignin &&<input type='text'
         placeholder='Full Name' 
        className='p-2 my-2 w-full bg-gray-500'
        />}
        <input type='text'
         placeholder='Email Address' 
        className='p-2 my-2 w-full bg-gray-500'
        />
        

        <input type='password'
         placeholder='Password' 
        className='p-2 my-2 w-full bg-gray-500'
        />
        <button className='p-4 my-4 bg-red-700 w-full rounded-lg cursor-pointer'>{IsSignin?"Sign In":"Sign Up"}</button>
        <p className='p-4 cursor-pointer' onClick={handleLogin}>{IsSignin? "New to Netflix? SignUp Now":"Already registered? SignIn Now.."}</p>
        </form>
       
    </div>
  )
}

export default Login 