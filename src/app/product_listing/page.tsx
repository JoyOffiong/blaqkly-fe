import Image from "next/image";
import React from "react";
import blazer from "@/images/men blazer.webp";
import { CiHeart } from "react-icons/ci";
import { TfiComment } from "react-icons/tfi";
import { IoCartOutline } from "react-icons/io5";
import blackbag from "@/images/blackbag.png";
import Link from "next/link";

function ProductListing() {

  const products=[
    {title:"Carolina herrera men blazer fit", price:"$124",
      sizes: "S-XXL", author:"Carolina Herrera",image: blazer,
    },
     {title:"Carolina herrera men blazer fit", price:"$124",
      sizes: "S-XXL", author:"Carolina Herrera",image: blazer,
    },
     {title:"Carolina herrera men blazer fit", price:"$124",
      sizes: "S-XXL", author:"Carolina Herrera",image: blazer,
    }
  ]


  return (
    <div className="mt-10 mx-4 p-2 border-[1px] rounded-lg border-bg-gray-300 space-y-8">
      <div className="flex flex-row  w-full">
        <div className="md:block hidden">
          <Image
            src={blackbag}
            width={600}
            height={150}
            alt="blaqkly logo"
            className="rounded-l-lg"
          />
        </div>

        <div className="bg-[#2b2a2a] w-full md:rounded-l-none rounded-l-lg rounded-r-lg   flex justify-center items-center">
          <div className="space-y-4 text-center md:p-0 py-4">
            <p className="text-2xl text-white">Blaqkly Women</p>
            <button className="bg-gray-500 py-2 px-3 text-white rounded-md">
              Follow
            </button>
          </div>
        </div>
      </div>

      {/* women */}
      <div>
        <span className="bg-gray-500 text-white rounded-2xl px-4 py-2 ">
          Women
        </span>
      </div>

      <Link href="./product_details">
        <div className="my-10 mx-2 md:mx-15 gap-10 grid md:grid-cols-4 lg:grid-cols-5">

{products.map((product, index)=>{
  const {image, title, price, author, sizes} = product;
  return(
<div className="bg-white shadow-md rounded-sm" key={index}>
            <div className="w-full flex justify-self-center ">
              <Image
                src={image}
                width={240}
                height={200}
                alt="blaqkly logo"
                className="rounded-t"
              />
            </div>
            <div className="p-3">
              <p className="text-[14px]">{title}</p>
              <p className="font-bold text-[15px]">{price}</p>
              <p className="text-gray-600 pb-2 text-[12px]">
                Size: {" "}{sizes} | {author}
              </p>
              <hr className="border-gray-400" />
              <div className="pt-3 flex justify-between">
                <CiHeart />
                <TfiComment />
                <IoCartOutline />
              </div>
            </div>
          </div>
  )

})}
          
        </div>
      </Link>
    </div>
  );
}

export default ProductListing;
