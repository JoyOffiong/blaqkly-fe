"use client";

import React, { useState } from "react";
import blazer from "@/images/men blazer.webp";
import Image from "next/image";
import Link from "next/link";
import { useSelector, UseSelector } from "react-redux";
import { RootState } from "@/app/store/store";

function Cart() {
  const [count, setCount] = useState(0);

  const items = useSelector((state: RootState) =>
    console.log(state.cart.items)
  );

  return (
    <div className="space-y-8">
      <div className="bg-[#f9f9f9] w-full h-36 justify-center flex items-center ">
        <p className="text-[#3f3f3f] text-3xl font-light">CART</p>
      </div>

      <div className="flex flex-col px-4 md:px-0 md:flex-row justify-between gap-16  max-w-6xl mx-auto">
        <div className=" w-full">
          <div className="flex flex-col md:flex-row justify-between gap-8 w-full">
            <div className="w-full md:w-1/2 gap-4">
              <p className="text-[10px]">PRODUCT</p>
            </div>

            <div className="flex justify-between w-full items-start flex-row gap-4 text-[10px]">
              <p>PRICE</p>
              <p>QUANTITY</p>
              <p>SUBTOTAL</p>
            </div>
          </div>



          <div className="flex flex-col md:flex-row justify-between gap-8 w-full">
            <div className="w-full md:w-1/2 space-y-6 gap-4">
              <div className="flex flex-row items-center gap-2">
                <Image src={blazer} alt="image" width={100} height={500} />

                <p className="font-light text-[12px]">BLACK BLAZER- UNISEX</p>
              </div>
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

            <Link href="./checkout">
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
