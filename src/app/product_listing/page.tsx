"use client"

import Image from "next/image";
import React, { useState } from "react";
import blazer from "@/images/men blazer.webp";
import { CiHeart } from "react-icons/ci";
import { TfiComment } from "react-icons/tfi";
import { IoCartOutline } from "react-icons/io5";
import blackbag from "@/images/blackbag.png";
import Link from "next/link";
import Button from '@mui/material/Button';
import AddProduct from "../components/modals/addProduct";


function ProductListing() {



  const products = [
    {
      product_id: "1245",
      name: "Carolina herrera ",
      price: "$124",
      sizes: "S-XXL",
      author: "Carolina Herrera1",
      image: blazer,
    },
    {
      product_id: "1246",
      name: "Carolina herrera2 ",
      price: "$124",
      sizes: "S-XXL",
      author: "Carolina Herrera",
      image: blazer,
    },
    {
      product_id: "1247",
      name: "Carolina herrera3",
      price: "$124",
      sizes: "S-XXL",
      author: "Carolina Herrera",
      image: blazer,
    },
  ];

const [showModal, setShowModal ] = useState<boolean>(false)

const handleClose =()=>{setShowModal(false)}

  return (
    <>
     <div className="mt-10 mx-4 p-2 rounded-lg  space-y-8">
   
   <div className="flex justify-end">
   <Button variant="outlined" onClick={()=>setShowModal(true)}>Add Product</Button>
   </div>
     
     

      {/* women */}
      <div>
        {/* <span className="bg-gray-500 text-white rounded-2xl px-4 py-2 ">
          Women
        </span> */}
      </div>

      <div className="my-10 mx-2 md:mx-15 gap-10 grid md:grid-cols-4 lg:grid-cols-5">
        {products.map((product, index) => {
          const { image, name, price, author, sizes, product_id } = product;
          return (
            <Link href={`/product_details/${product_id}`} key={index}>
              <div className="bg-white shadow-lg border-gray-300 border-1  rounded-sm">
                {/* <div className="w-full flex justify-self-center ">
                  <Image
                    src={image}
                    width={240}
                    height={200}
                    alt="blaqkly logo"
                    className="rounded-t"
                  />
                </div> */}
                <div className="p-3">
                  <p className="text-[14px]">{name}</p>
                  <p className="font-bold text-[15px]">{price}</p>
                  <p className="text-gray-600 pb-2 text-[12px]">
                    Size: {sizes} | {author}
                  </p>
                  <hr className="border-gray-400" />
                  <div className="pt-3 flex justify-between">
                    <CiHeart />
                    <TfiComment />
                    <IoCartOutline />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
{showModal && <AddProduct handleClose={handleClose} open = {showModal}/>}

    </>
   
  );
}

export default ProductListing;
