"use client";

import React, { useState } from "react";
import InputBoxComp from "../components/inputField";
import { useForm } from "react-hook-form";
import SelectBoxComp from "../components/selectField";
import {paymentGateways} from "../components/paymentConfigs"
import {  useSelector } from "react-redux";
import { RootState } from "../store/store";
import { formatNaira } from "../components/currencyFormating";

function Checkout() {
  const total = useSelector((state: RootState) => state.grandTotal.total);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const loggedInUser = useSelector((state: RootState) => state.user.items);

  const { control, handleSubmit } = useForm();

const handlePayment = (method: "alatpay" | "flutterwave" | "paystack" | "nomba" | "budpay" ) => {
  handleSubmit((data) => submit(data, method))();
};

const InitializeALATPay = paymentGateways.ALATconfig(
    loggedInUser,
    total,
    (response: any) => console.log("ALAT Transaction:", response),
    () => console.log("ALAT Popup Closed")
  );

  const initializeBudPay = paymentGateways.BUDPAYconfig(
   
      loggedInUser,
      total,
      (response: any) => {
        console.log("BudPay Completed:", response);
      },
      (data: any) => {
        console.log("BudPay Cancelled:", data);
      }
    )

const submit = (data: any, method: "alatpay" | "flutterwave" | "paystack" | "nomba" | "budpay") => {
  console.log(method);
  console.log(data)
  if (method === "alatpay") {
   InitializeALATPay.submit();
 } 
 else if (method === "budpay") {
    initializeBudPay()
  } else if (method === "paystack") {
    console.log("Paystack payment goes here");
  } else if (method === "nomba") {
    console.log("Nomba payment goes here");
  }
};



  const countries = [
    { value: "Nigeria", label: "Nigeria" },
    { value: "South Africa", label: "South Africa" },
  ];





  return (
    <div className="space-y-8">
      <div className="bg-[#f9f9f9] w-full h-36 justify-center flex items-center ">
        <p className="text-[#3f3f3f] text-3xl font-light">CHECKOUT</p>
      </div>

      <div className="max-w-6xl mx-auto mb-20">
        <form action="">
        <div className=" md:flex-row text-[12px] flex-col flex gap-8 justify-between">
          <div className="w-full space-y-4 px-4 md:px-0">
            <p className="font-bold"> BILLING ADDRESS</p>
            <hr className="border-gray-400" />
           
              <div className="space-y-8">
                 <div className="flex gap-4 items-center ">
                  <SelectBoxComp
                    data={countries}
                    label="Country"
                    name="country"
                    control={control}
                  />
                </div>
                <div>
                  <InputBoxComp
                    name="Street"
                    control={control}
                    type="text"
                    label="Street"
                  />
                </div>

                <div>
                  <InputBoxComp
                    name="city"
                    control={control}
                    type="text"
                    label="City"
                  />
                </div>

                <div className="flex flex-col md:flex-row md:gap-4 gap-8 justify-between">
                  <InputBoxComp
                    name="State"
                    control={control}
                    type="text"
                    label="State"
                  />

                  <InputBoxComp
                    name="zip"
                    control={control}
                    type="text"
                    label="ZIP"
                  />
                </div>
                <div className='hidden'>
            <InputBoxComp
              name="metadata"
              control={control}
              type="text"
              label="Meta Data"
            />
          </div>
              </div>
          
          </div>

          <div className="w-full md:w-1/2 bg-[#f9f9f9]">
            <div className="p-4 text-sm">
              <p className="pb-1 font-bold">Your Order</p>

              <hr className="border-gray-400" />

              <div className="flex py-4 font-bold justify-between items-center">
                <p>Product</p>
                <p>SubTotal</p>
              </div>

              {cartItems.map((prod, index) => {
                const { quantity, name, price } = prod;
                return (
                  <div key={index} className="flex gap-4 mb-2">
                    <p className="">{quantity}</p>
                    <div className="flex flex-row justify-between  w-full">
                      <p>{name}</p>
                      <p>{formatNaira(price * quantity)}</p>
                    </div>
                  </div>
                );
              })}
              <hr className="border-gray-400" />

              <div className="flex justify-between items-center pt-2">
                <p className="font-bold"> Grand Total</p>
                <p>{formatNaira(total)}</p>
              </div>

              {/* payment Methods */}
              <div className="space-y-2 pt-8">
                <button className="bg-[#bf0926] rounded-sm text-white w-full cursor-pointer py-2" type="button"  onClick={()=>handlePayment("alatpay")} >
                  Pay with ALATPay
                </button>
                <hr className="border-gray-400" />
                <button className="bg-[#0d273c] rounded-sm text-white w-full cursor-pointer py-2" type="button" onClick={()=>handlePayment("paystack")}>
                  Pay with Paystack
                </button>
                <hr className="border-gray-400" />
                <button className="bg-[#ff9b06] rounded-sm text-white w-full cursor-pointer py-2"  type="button"
                onClick={()=>handlePayment("flutterwave")}>
                  Pay with FlutterWave
                </button>
                <hr className="border-gray-400" />
                <button className="bg-[#ffcc00] rounded-sm text-white w-full py-2 cursor-pointer" type="button"
                onClick={()=>handlePayment("nomba")}>
                  Pay with Nomba
                </button>
                 <button className="bg-[#6a29b9] rounded-sm text-white w-full py-2 cursor-pointer" type="button"
                onClick={()=>handlePayment("budpay")}>
                  Pay with Budpay
                </button>
                <hr className="border-gray-400" />
              </div>
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
