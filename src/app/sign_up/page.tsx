"use client";

import React, { useState } from "react";
import InputBoxComp from "../components/inputField";
import { useForm } from "react-hook-form";
import SelectBoxComp from "../components/selectField";
import CircularProgress from "@mui/material/CircularProgress";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Modal from "../components/modal";
import auth from "../../services/authentication";

function SignUp() {
  const { control, handleSubmit } = useForm();

  const router = useRouter();

  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const [loading, setLoading] = useState<boolean>(false);

  function submit(data: any) {
    setLoading(true);

    const { confirmPassword, ...formValues } = data;

   auth.Sign_Up(formValues)
      .then((res) => {
        setLoading(false);
        console.log(res);
        if (res) {
          setOpen(true);
          if (!open) {
            router.push("/log_in");
          }
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        alert(err.message);
      });
  }

  const gender = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

   const role = [
    { value: "ADMIN", label: "Admin" },
    { value: "SELLER", label: "Seller" },
    { value: "BUYER", label: "Buyer" },
  ];

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

          <form
            action=""
            onSubmit={handleSubmit(submit)}
            className="gap-8 flex flex-col"
          >
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
              name="phoneNumber"
              control={control}
              type=""
              label="phoneNumber"
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
            <SelectBoxComp
              data={gender}
              label="Gender"
              name="gender"
              control={control}
            />
             <SelectBoxComp
              data={role}
              label="Role"
              name="role"
              control={control}
            />

            <div className="bg-gray-800 cursor-pointer text-white text-center p-2 hover:bg-black rounded-md">
              <button type="submit">
                {loading ? <CircularProgress size={24} /> : "Create Account"}{" "}
              </button>
            </div>

            <div></div>
          </form>
          <hr className="border-gray-400" />

          <div className="flex pt-2 justify-end items-center gap-2">
            <p className="font-bold text-[10px]">
              You already have an account?
            </p>
            <Link href="./log_in">
              {" "}
              <p className="text-[14px]">Sign in</p>
            </Link>
          </div>
        </div>
      </div>

      {open && (
        <Modal
          handleClose={handleClose}
          open={open}
          text="Sign Up Successful"
        />
      )}
    </>
  );
}

export default SignUp;
