"use client"

import React from 'react'
import InputBoxComp from '@/app/components/inputField'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

function Login() {

  const {control, handleSubmit } = useForm()
  
  function submit(data:any){
        console.log(data)
    window.location.href="http://localhost:3000/product_listing"
  }


  return (
    <div className="max-w-xl mx-auto my-20 shadow-[0_-4px_10px_rgba(0,0,0,0.3)] bg-white rounded-md">

        <div className='p-8 flex flex-col justify-center text-center space-y-8'>
          <p className='text-3xl'>Log In</p>
        

        <div className='pb-4' >
        
                    <button className="w-full bg-white shadow-[0px_-4px_10px_rgba(0,0,0,0.3)] py-3">
Log in with Google</button>
        </div>

        <hr className="border-gray-400" />

 <form action="" onSubmit={handleSubmit(submit)}>
   <div className='flex flex-col gap-8 md:gap-4 items-center '>

    
        <InputBoxComp
                name="email"
                control={control}
                type="email"
                label="Email"
              />
              <InputBoxComp
                name="password"
                control={control}
                type="password"
                label="Password"
              />

              <div className='flex justify-between w-full items-center'>
                <p className='font-bold text-[10px]'>Forgot Password</p>
 <div className="bg-gray-800  text-white text-center p-2 hover:bg-black rounded-md">
                          <button type='submit' className='cursor-pointer' >Log in</button>
                        </div>

              </div>
                      <hr className="border-gray-400" />

              <div className='flex items-center gap-2'>
                <p className='font-bold text-[10px]'>Don't have an account?</p>
              <Link href='/pages/sign_up  '><p className='text-[14px]'>Sign up</p></Link>  
              </div>
                       
              </div>


 </form>
        </div>
    </div>
  )
}

export default Login
