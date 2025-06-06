"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import blazer from "@/images/men blazer.webp";


function Product_Details() {

    const [size, setSize] = useState('');
    const [count, setCount] = useState(0)

  const handleChange = (event:any) => {
    setSize(event.target.value as string);
  };

  const productDetials=[
  {type:"cloth",image:blazer, cost:"₦53,500.00", title:"BLACK BLAZER- UNISEX", description:"",
    care_instructions:"Machine wash, Hand wash, Dry-clean", category:"Female"
  }
  ]

  return (
    <div className='max-w-4xl px-8 mx-auto my-16'>
        

{productDetials.map((details, index)=>{
  const {type, image, cost, title,category, description, care_instructions}= details

  return(
    <div className='flex items-start gap-8 justify-between md:flex-row flex-col' key={index}>
      <div className=''>
          <Image alt="bag" src={image} width={500} height={600}/>  
      </div>

      <div className=' w-full md:px-0 px-4 space-y-4 md:w-1/2'>
        <p className='font-light'>{title}</p>
            <hr className='text-gray-200'/>

        <div className='space-y-4'>
            <p className='font-bold text-2xl'>{cost}</p>

            <ol className='pl-4 text-[#8793a6]'> 
                <li className='list-disc'>Black Zipper</li>
                <li className='list-disc'>Full Length: 63 inches</li>
                <li className='list-disc'>Lilian is 5ft11 wearing UK 8</li>
                <li className='list-disc'>Fabric type: Silk satin</li>
                <li className='list-disc'>Ebony Black</li>
            </ol>
           <p className='text-[#8793a6]'> <strong>Care instructions:</strong> {care_instructions} </p>
        </div>

        <div className='flex gap-8 items-center w-full'>
            <p className='text-[#8793a6]'>Size</p>
{type==="cloth" ? (
  <Box sx={{
    minWidth: {
      xs: 200, 
      sm: 280, 
      md: 360, 
    },
    minHeight: 10,
  }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label" className='text-[#8793a6] text-sm'>Choose a Size</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={size}
          label="Size"
          onChange={handleChange}
        >
          <MenuItem value={"s"}>Small</MenuItem>
          <MenuItem value={"m"}>Medium</MenuItem>
          <MenuItem value={"l"}>Large</MenuItem>
          <MenuItem value={"xl"}>Extra-large</MenuItem>
          <MenuItem value={"xxl"}>Extra-extra-large</MenuItem>
        </Select>
      </FormControl>
           </Box>):(
              <Box sx={{
    minWidth: {
      xs: 200, 
      sm: 280, 
      md: 360, 
    },
    minHeight: 10,
  }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label" className='text-[#8793a6] text-sm'>Choose a Size</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={size}
          label="Size"
          onChange={handleChange}
        >
          <MenuItem value="37">37</MenuItem>
          <MenuItem value="38">38</MenuItem>
          <MenuItem value="39">39</MenuItem>
          <MenuItem value="40">40</MenuItem>
          <MenuItem value="41">41</MenuItem>
          <MenuItem value="42">42</MenuItem>
          <MenuItem value="43">43</MenuItem>
        </Select>
      </FormControl>
           </Box>
           )}
            
        </div>

        <div className='flex gap-2 '>
            <div className='border-1 p-2 flex gap-2 items-center'>
                <p onClick={()=>{setCount(count-1)}} className='cursor-pointer' >-</p>
                <p>{count}</p>
                <p onClick={()=>{setCount(count+1)}} className='cursor-pointer'>+</p>
            </div>

            <div className='w-1/2 text-center py-2 bg-gray-800 hover:bg-black'>
                <button className='text-white text-sm font-bold'>ADD TO CART</button>
            </div>
        </div>

        <hr />

        <div className='text-[#8793a6] text-sm'>
            <p >SKU: 003325</p>
            <p>Category:{category}</p>
            <p>Tags: <span className='text-black'>black, Unisex, Lagos Fashion </span> </p>
        </div>
      </div>
    </div>
  )
})}
      
    </div>
  )
}

export default Product_Details
