"use client";

import React, { useState } from "react";
import blazer from "@/images/men blazer.webp";
import Image from "next/image";
import Link from "next/link";

function Cart() {
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-8">
      <div className="bg-[#f9f9f9] w-full h-36 justify-center flex items-center ">
        <p className="text-[#3f3f3f] text-3xl font-light">CART</p>
      </div>

      <div className="flex flex-col px-4 md:px-0 md:flex-row justify-between gap-16  max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 w-full">
          <div className=" w-1/2 space-y-6 gap-4">
            <p className="text-[10px] ">PRODUCT</p>
            <div className="flex gap-4 items-center">
              <div>
                <Image src={blazer} alt="image" width={100} height={500} />
              </div>
              <p className="font-light text-[12px]">BLACK BLAZER- UNISEX</p>
            </div>
          </div>

          <div className="flex justify-between w-1/2 items-start flex-row gap-4 text-[10px]">
            <div className="space-y-4 md:space-y-16">
              <p className="">PRICE</p>
              <p className="text-[12px]">53,400.00</p>
            </div>

            <div className="space-y-4 md:space-y-16 text-[10px]">
              <p>QUANTITY</p>
              <div className="border-1 justify-center text-[12px] p-1 text-center flex gap-2 items-center">
                
                <p >{count}</p>

              </div>
            </div>

            <div className="text-[10px] space-y-4 md:space-y-16">
              <p>SUBTOTAL</p>
              <p className="font-bold text-[12px]">₦53,500.00</p>
            </div>
          </div>
        </div>

        <div className="bg-[#f9f9f9] md:mx-4 mx-0 w-full md:w-2/5">
          <div className="p-4 space-y-8 text-sm">
            <p className="font-medium">Cart tools</p>

            <div className="flex justify-between">
              <p className="font-bold">Subtotal</p>
              <p>N53,400</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold">Shipping</p>
              <p>Calculate Shipping</p>
            </div>

            <hr />

            <div className="flex justify-between">
              <p className="font-bold">Total</p>
              <p>N53,400</p>
            </div>

          <Link href='./checkout'>
          <div className="bg-gray-800 text-white text-center  hover:bg-black w-full py-2">
              <button className="cursor-pointer">Proceed to Checkout</button>
            </div>
          </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
