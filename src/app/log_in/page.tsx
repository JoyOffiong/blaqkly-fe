"use client"

import React, { useState } from 'react';
import InputBoxComp from '@/app/components/inputField';
import { set, useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import auth from "../../services/authentication";
import { useDispatch } from 'react-redux'
import { CircularProgress } from '@mui/material'
import { addUser } from '../store/userSlice'
import { AppDispatch } from '../store/store'


function Login() {

  const {control, handleSubmit } = useForm()
  const [loading, setLoading] = useState<boolean>(false)

      const success = () => toast("Login Successfull!");
      const failed = () => toast("Invalid Credentials!");

        const router = useRouter();
      
   const dispatch = useDispatch<AppDispatch>()
  function submit(data:any){
                  setLoading(true)

            auth.Sign_In(data).then((res)=>{
       
             if(res?.status === 200){
              
              success();
              setLoading(false)
              
         dispatch(addUser({
            email: res?.data.email,
            password: res?.data.password,
            role: res?.data.role,
            userName: res?.data.userName,
            gender:res?.data.gender,
            firstName: res?.data.firstName,
            lastName: res?.data.lastName,
            phoneNumber:res?.data.phoneNumber
}))

      setTimeout(() => {
 router.push("/product_listing");        
  }, 1000);      
  }
        else{
             setLoading(false)

          failed();
        }
         

  });
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
                type="text"
                label="Password"
              />

              <div className='flex justify-between w-full items-center'>
                <p className='font-bold text-[10px]'>Forgot Password</p>
 <div className="bg-gray-800  text-white text-center p-2 hover:bg-black rounded-md">
                          <button type='submit' className='cursor-pointer' >
                                             {loading ? <CircularProgress size={24} /> : "Sign-in"}
                            
                          </button>
                       <ToastContainer />
                        </div>

              </div>
                      <hr className="border-gray-400" />

              <div className='flex items-center gap-2'>
                <p className='font-bold text-[10px]'>Don't have an account?</p>
              <Link href='/sign_up  '><p className='text-[14px]'>Sign up</p></Link>  
              </div>
                       
              </div>


 </form>
        </div>
    </div>
  )
}

export default Login
