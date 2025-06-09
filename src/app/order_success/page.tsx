import Image from 'next/image'
import order_success from '@/images/order-succesful.png';
import React from 'react';
import Link from 'next/link';

function OrderSuccess() {
  return (
    <div>
      <div className='flex flex-col space-y-8 bg-white shadow-[0px_-4px_10px_rgba(0,0,0,0.3)] max-w-xl inset-8 p-8 mx-auto my-20 justify-center items-center'>
        <div className='rounded-full'>
          <Image alt="bag" src={order_success} width={200} height={200} className='rounded-full w-full h-full'/>  
          
        </div>

        <div className='text-center'>
          <p>We have received your order and you will recieve your goods within 24hours</p>
          <p>Your order Number is blaqk-042</p>
        </div>

        <Link href='./'>
          <div className="bg-gray-800 rounded-md  text-white text-center  hover:bg-black w-full py-2">
          <button className='cursor-pointer px-4' >Continue Shopping</button>
        </div>
        </Link>
        
      </div>
    </div>
  )
}

export default OrderSuccess
