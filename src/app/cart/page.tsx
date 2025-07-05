"use client";

import React, { useState } from "react";
import blazer from "@/images/men blazer.webp";
import emptyCart from "@/images/emptyCart.png";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector,  } from "react-redux";
import { RootState } from "@/app/store/store";
import { addGrandTotal } from "../store/grandTotalSlice";
import { formatNaira } from "../components/currencyFormating";
import { CartItem } from "../store/cartSlice";


function Cart() {

  const [grandTotal, setGrandTotal] = useState<number>(0)
  const items: CartItem[] = useSelector((state: RootState) => state?.cart.items);

  console.log(items.length)
  const dispatch = useDispatch()
  useState(()=>{
const total = items.reduce((acc, item)=>acc + item.price * item.quantity, 0)
setGrandTotal(total)
  dispatch(addGrandTotal(total))

  })


 

  return (
    <div className="space-y-8">
      <div className="bg-[#f9f9f9] w-full h-36 justify-center flex items-center ">
        <p className="text-[#3f3f3f] text-3xl font-light">CART</p>
      </div>

{items.length != 0 ? (
  <div className="flex flex-col px-4 md:px-0 md:flex-row justify-between gap-16  max-w-6xl mx-auto">
       
       {/* Large screen */}
        <div className=" w-full hidden space-y-6 md:block">
          <div className="flex flex-col md:flex-row justify-between gap-8 w-full">
            <div className="w-full gap-4">
              <p className="text-[10px]">PRODUCT</p>
            </div>

            <div className="flex justify-between w-full items-start flex-row gap-4 text-[10px]">
              <p>PRICE</p>
              <p>QUANTITY</p>
              <p>SUBTOTAL</p>
            </div>
          </div>

          {(items as any[])?.map((item, index: number) => {
            const { name, price, quantity } = item;
            return (
              <div
                className="flex flex-col space-y-4 md:flex-row items-center justify-between gap-8 w-full"
                key={index}
              >
                <div className="w-full gap-4">
                  <div className="flex flex-col md:flex-row items-center gap-2">
                    <Image src={blazer} alt="image" width={100} height={500} />
                    <p className="font-light text-[12px]">{name}</p>
                  </div>
                </div>

                <div className="flex justify-between w-full items-start flex-row gap-4 text-[10px]">
                  <p >{formatNaira(price)}</p>
                  <p>{quantity}</p>
                  <p className="font-bold">{formatNaira(quantity * price)}</p>
                </div>
              </div>
            );
          })}
        </div>

          {/* Small Screen */}
        <div className="block md:hidden">
          <div>
         <p className="text-[10px] text-center pb-6 font-bold">PRODUCTS</p>
            <div>
               {(items as any[])?.map((item, index: number) => {
            const { name, price, quantity } = item;
            return (
              <div
                className="flex flex-col mb-4 items-center justify-between gap-2 w-full"
                key={index}
              >
                <div className="w-full gap-4">
                  <div className="flex flex-col md:flex-row items-center gap-2">
                    <Image src={blazer} alt="image" width={100} height={500} />
                    <p className="font-light text-[12px]">{name}</p>
                  </div>
                </div>

                <div className="flex border-[0.5px] border-gray-500 p-2 justify-between w-full items-start flex-row gap-4 text-[10px]">
                  <p className=" text-[10px]"> PRICE: <span className=" font-bold">{formatNaira(price)}</span></p>
                  <p className="font-normal"><span className="text-[10px] font-bold">QTY: </span>{quantity}</p>
                  <p><span className="text-[10px] font-bold">SUBTOTAL: </span>{formatNaira(quantity * price)}</p>
                </div>
              </div>
            );
          })}
            </div>
          </div>
        </div>

        <div className="bg-[#f9f9f9] h-1/2 md:mx-4 mx-0 w-full md:w-2/5">
          <div className="p-4 space-y-8 text-sm">
            <p className="font-medium">Cart tools</p>

            <div className="flex justify-between">
              <p className="font-bold">Subtotal</p>
              <p>{formatNaira(grandTotal)}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold">Shipping</p>
              <p>Calculate Shipping</p>
            </div>

            <hr />

            <div className="flex justify-between">
              <p className="font-bold">Total</p>
              <p>
{formatNaira(grandTotal)}</p>
            </div>

            <Link href="./checkout">
              <div className="bg-gray-800 text-white text-center  hover:bg-black w-full py-2">
                <button className="cursor-pointer">Proceed to Checkout</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
) :
(
  <div className="text-center flex justify-center my-10 flex-col">
    <div className="justify-center flex ">
    <Image src={emptyCart} alt="image" width={300} height={300} />
    </div>
    <Link href="./">
              
                <button className="cursor-pointer bg-gray-800 text-white text-center  hover:bg-black py-2 px-4 rounded-md">Proceed to Shop</button>
            </Link>
      
  </div>
)

}
    
    </div>
  );
}

export default Cart;
