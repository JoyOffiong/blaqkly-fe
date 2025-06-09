"use client"

import React from 'react'
import InputBoxComp from '../components/inputField'
import { useForm } from 'react-hook-form'
import SelectBoxComp from '../components/selectField'

function Checkout() {

const {control, handleSubmit } = useForm()

    const product =[{title:"men blazer fit", price:"N53,400"}]
    const countries =[{value:"Nigeria", label:"Nigeria"}, {value:"South Africa", label:"South Africa"}]

  return (

     <div className="space-y-8">
      <div className="bg-[#f9f9f9] w-full h-36 justify-center flex items-center ">
        <p className="text-[#3f3f3f] text-3xl font-light">CHECKOUT</p>
      </div>

    <div className='max-w-6xl mx-auto mb-20'>
      <div className=' md:flex-row text-[12px] flex-col flex gap-8 justify-between' >
          <div className='w-full space-y-4 px-4 md:px-0'>
            <p > BILLING ADDRESS</p>
             <hr className="border-gray-400" />
            <div className='space-y-8'>
              <div className='flex flex-col md:flex-row gap-8 md:gap-4 items-center '>
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
                <div className='flex gap-4 items-center '>
                   <InputBoxComp
                name="email"
                control={control}
                type="email"
                label="Email Address"
              />
                </div>


              <div className='flex gap-4 items-center '>
              <SelectBoxComp data={countries} label="Country" name="country" control={control} />
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
 

                <div className='flex flex-col md:flex-row md:gap-4 gap-8 justify-between'>
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

          <div className='w-full md:w-1/2 bg-[#f9f9f9]'>
            <div className="p-4 text-sm">
                <p className='pb-1'>Your Order</p>

              <hr className="border-gray-400" />
                
              <div className='flex py-4 justify-between items-center'>
                <p>Product</p>
                <p>SubTotal</p>
              </div>
             
              {product.map((prod, index)=>{
                const {title, price} = prod
                return(
                  <div key={index} className='flex justify-between '>
                    <p>{title}</p>
                    <p>{price}</p>
                  </div>
                )
              })}
             <hr className="border-gray-400" />

              <div className='flex justify-between items-center pt-2'>
                <p>Total</p>
                <p>₦53,500.00</p>
              </div>

{/* payment Methods */}
              <div className='space-y-2 pt-8'>
                <button className='bg-[#bf0926] rounded-sm text-white w-full cursor-pointer py-2'>Pay with ALATPay</button>
                <hr className="border-gray-400" />
              <button className='bg-[#0d273c] rounded-sm text-white w-full cursor-pointer py-2'>Pay with Paystack</button>
                <hr className="border-gray-400" />
                <button className='bg-[#ff9b06] rounded-sm text-white w-full cursor-pointer py-2'>Pay with FlutterWave</button>
                <hr className="border-gray-400" />
               <button className='bg-[#ffcc00] rounded-sm text-white w-full py-2 cursor-pointer'>Pay with Nomba</button>
                <hr className="border-gray-400" />
              </div>
            </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Checkout
