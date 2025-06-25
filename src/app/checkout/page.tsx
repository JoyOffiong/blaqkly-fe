"use client";

import React from "react";
import InputBoxComp from "../components/inputField";
import { useForm } from "react-hook-form";
import SelectBoxComp from "../components/selectField";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { formatNaira } from "../components/currencyFormating";
import { clearCart } from "../store/cartSlice";
import { clearGrandTotal } from "../store/grandTotalSlice";

function Checkout() {
  const total = useSelector((state: RootState) => state.grandTotal.total);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const { control, handleSubmit } = useForm();

  const dispatch = useDispatch()

  const submit = (data: any) => {
    console.log(data);
      dispatch((clearCart()))
      dispatch(( clearGrandTotal()))
    
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
        <form action="" onSubmit={handleSubmit(submit)}>
        <div className=" md:flex-row text-[12px] flex-col flex gap-8 justify-between">
          <div className="w-full space-y-4 px-4 md:px-0">
            <p className="font-bold"> BILLING ADDRESS</p>
            <hr className="border-gray-400" />
           
              <div className="space-y-8">
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
                <div className="flex gap-4 items-center ">
                  <InputBoxComp
                    name="email"
                    control={control}
                    type="email"
                    label="Email Address"
                  />
                </div>

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
                <button className="bg-[#bf0926] rounded-sm text-white w-full cursor-pointer py-2" type="submit">
                  Pay with ALATPay
                </button>
                <hr className="border-gray-400" />
                <button className="bg-[#0d273c] rounded-sm text-white w-full cursor-pointer py-2" type="submit">
                  Pay with Paystack
                </button>
                <hr className="border-gray-400" />
                <button className="bg-[#ff9b06] rounded-sm text-white w-full cursor-pointer py-2" type="submit">
                  Pay with FlutterWave
                </button>
                <hr className="border-gray-400" />
                <button className="bg-[#ffcc00] rounded-sm text-white w-full py-2 cursor-pointer" type="submit">
                  Pay with Nomba
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
