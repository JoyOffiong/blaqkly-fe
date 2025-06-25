"use client";

import React, { useState } from "react";
import InputBoxComp from "../components/inputField";
import Sign_Up from "../../services/authentication"
import { useForm } from "react-hook-form";
import SelectBoxComp from "../components/selectField";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Style} from "../components/style"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Modal } from "@mui/material";


function SignUp() {
  const { control, handleSubmit } = useForm();

  const router = useRouter()

  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const [loading, setLoading] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)

  function submit(data: any) {
    setLoading(true)

    const {confirmPassword, ...formValues}= data
    
    Sign_Up(formValues).then((res)=>{
    setLoading(false)
    setOpen(true)
    if(res && !open){
        alert(open)
       // router.push("/product_listing")
        return
    }

   }).catch((err)=>{
    console.log(err)
    setLoading(false)
    alert(err.message)
   })

  }

  const gender =[{value:"male", label:"Male"},{value:"female", label:"Female"}]


  //come back and work on the modal
  return (
    <>
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
              name="firstName"
              control={control}
              type="text"
              label="First Name"
            />
            <InputBoxComp
              name="lastName"
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
              name="userName"
              control={control}
              type="text"
              label="Username"
            />
 <div className="flex flex-col md:flex-row gap-8 md:gap-4 items-center ">
            <InputBoxComp
              name="password"
              control={control}
              type="text"
              label="Password"
            />
            <InputBoxComp
              name="confirmPassword"
              control={control}
              type="text"
              label="Confirm Password"
            />
            </div>         
                         <SelectBoxComp data={gender} label="Gender" name="gender" control={control} />

                        <div className="bg-gray-800 cursor-pointer text-white text-center p-2 hover:bg-black rounded-md">
                          <button type='submit'>
                         {loading ? <CircularProgress size={24}/> :  "Create Account"}  </button>
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
    
    {showModal &&
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={Style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    }
    
    </>
    
  );
}

export default SignUp;
