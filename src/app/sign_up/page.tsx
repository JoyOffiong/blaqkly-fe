"use client";

import React from "react";
import InputBoxComp from "../components/inputField";
import { useForm } from "react-hook-form";
import SelectBoxComp from "../components/selectField";
import Link from "next/link";

function SignUp() {
  const { control, handleSubmit } = useForm();

  function submit(data: any) {
    console.log(data);
  }

  const gender =[{value:"male", label:"Male"},{value:"female", label:"Female"}]

  return (
    <div className="max-w-xl mx-auto my-20 shadow-[0_-4px_10px_rgba(0,0,0,0.3)] bg-white rounded-md">
      <div className="p-8 flex flex-col justify-center text-center space-y-8">
        <p className="text-3xl">Create an Account</p>

        <div className="pb-4">
          <button className="w-full bg-white shadow-[0px_-4px_10px_rgba(0,0,0,0.3)] py-3">
            Continue with Google
          </button>
        </div>

        <hr className="border-gray-400" />

        <form action="" onSubmit={handleSubmit(submit)} className="gap-8 flex flex-col">
          <div className="flex flex-col md:flex-row gap-8 md:gap-4 items-center ">
            <InputBoxComp
              name="first_name"
              control={control}
              type="text"
              label="First Name"
            />
            <InputBoxComp
              name="last_name"
              control={control}
              type="text"
              label="Last Name"
            />
            </div>

            <InputBoxComp
              name="email"
              control={control}
              type="email"
              label="Email"
            />
            <InputBoxComp
              name="username"
              control={control}
              type="text"
              label="Username"
            />
                         <SelectBoxComp data={gender} label="Country" name="country" control={control} />

                        <div className="bg-gray-800 cursor-pointer text-white text-center p-2 hover:bg-black rounded-md">
                          <button type='submit'>Create Account</button>
                        </div>
           
          <div>
           
           
          </div>
        </form>
         <hr className="border-gray-400" />

            <div className="flex pt-2 justify-end items-center gap-2">
              <p className="font-bold text-[10px]">You already have an account?</p>
              <Link href="./log_in" > <p className="text-[14px]">Sign in</p></Link>
             
            </div>
      </div>
    </div>
  );
}

export default SignUp;
