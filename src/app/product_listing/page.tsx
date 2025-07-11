import Image from "next/image";
import React from "react";
import blazer from "@/images/men blazer.webp";
import blackbag from "@/images/blackbag.png";

function ProductListing() {
  return (
    <div className="mt-10 mx-4 p-2 border-[1px] rounded-lg border-bg-gray-300 space-y-8">
      <div className="flex flex-row  w-full">
        <div className="md:block hidden">
          <Image
            src={blackbag}
            width={400}
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
      <div className="my-10 mx-2 md:mx-15 gap-10 grid md:grid-cols-4 lg:grid-cols-5">
        <div className="bg-white shadow-md rounded-sm">
          <div className="w-full flex justify-self-center ">
            <Image
              src={blazer}
              width={240}
              height={200}
              alt="blaqkly logo"
              className="rounded-t"
            />
          </div>
          <div className="p-3">
            <p className="text-[14px]">Carolina herrera men blazer fit</p>
            <p className="font-bold text-[15px]">$124</p>
            <p className="text-gray-600 pb-2 text-[14px]">
              Size: 38s | Carolina Herrera
            </p>
            <hr className="border-gray-400" />
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
