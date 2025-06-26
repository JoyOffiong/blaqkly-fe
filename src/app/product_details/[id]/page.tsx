"use client";

import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { addItem } from "@/app/store/cartSlice";
import { useParams } from "next/navigation";
import blazer from "@/images/men blazer.webp";
import { useForm } from "react-hook-form";
import SelectBoxComp from "@/app/components/selectField";
import ProductAPIs from "@/services/CRUD";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

type productDetail = {
  name: string | undefined;
  image: string | null;
  description: string;
  category: string;
  sizes: string;
  price: number;
  type: string;
  designer: string;
  care_instructions: string;
};

function Product_Details() {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);

  const params = useParams();
  const { id } = params;

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.8 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const [productDetails, setProductDetails] = useState<productDetail>();

  useEffect(() => {
    ProductAPIs.Fetch_ProductById(id).then((res) => {
      console.log("Fetched res:", res);
      setProductDetails(res);
    });
  }, []);

  useEffect(() => {
    if (productDetails) {
      console.log("State after set:", productDetails); 
    }
  }, [productDetails]);

 const { control, handleSubmit } = useForm();

 const dispatch = useDispatch();



  function submit(data: any) {
    if (count === 0) {
      alert("Kindly indicate quantity required");
      return;
    }
    if(!data.size){
      alert("Kindly indicate size ")
    }
    setClicked(!clicked);
    dispatch(
      addItem({
        product_id: id?.toString(),
        size: data.size,
        name: productDetails?.name,
        price: Number(productDetails?.price),
        quantity: count,
      })
    );
    window.location.href ="http://localhost:3000/cart"
  }

  useEffect(() => {
    if (count === 0) {
      setClicked(false);
    }
  }, [count]);

  const clothSizes = [
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },
  ];

  const shoeSizes = [
    { value: "37", label: "37" },
    { value: "38", label: "38" },
    { value: "39", label: "39" },
    { value: "40", label: "40" },
    { value: "41", label: "41" },
    { value: "42", label: "42" },
  ];

  return (
    <>

      <div
        ref={sectionRef}
        className={`font-inter max-w-6xl px-8  mx-auto mb-16 text-left transform transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-2" : "opacity-0 translate-y-0"
        }`}
      >
        <div className="mb-8">
          <Link href="/product_listing">  <Button >Back</Button>
          </Link>
     
    </div>
        <div className="flex items-start gap-8 justify-between md:flex-row flex-col">
          <div className="border-1 w-full border-amber-500">
            <Image
              alt="bag"
              src="https://www.nakeddresses.com/cdn/shop/files/ASHLEYlauren_11236_Pink_Hera_Evening_Gown..jpg"
              width={500}
              height={600}
            />
          </div>

          <form action="" onSubmit={handleSubmit(submit)}>
            <div className=" w-full md:px-0 px-4 space-y-4 md:w-1/2">
              <p className="font-bold">{productDetails?.name}</p>
              <hr className="text-gray-200" />

              <div className="space-y-4">
                <p className="font-bold text-2xl">N{productDetails?.price}</p>

                <p className="font-medium text-md">{productDetails?.description}</p>
                <p className="font-light text-sm">{productDetails?.designer}</p>
                <p className="text-[#8793a6]">
                  {" "}
                  <strong>Care instructions:</strong>{" "}
                  {productDetails?.care_instructions}{" "}
                </p>
              </div>

              <div className="flex gap-8 items-center w-full">
                <p className="text-[#8793a6]">Size</p>
                {productDetails?.type === "cloth" ? (
                  <Box
                    sx={{
                      minWidth: {
                        xs: 200,
                        sm: 280,
                        md: 360,
                      },
                      minHeight: 10,
                    }}
                  >
                    <SelectBoxComp
                      data={clothSizes}
                      label="Size"
                      name="size"
                      control={control}
                    />
                  </Box>
                ) : (
                  <Box
                    sx={{
                      minWidth: {
                        xs: 200,
                        sm: 280,
                        md: 360,
                      },
                      minHeight: 10,
                    }}
                  >
                    <SelectBoxComp
                      data={shoeSizes}
                      label="Size"
                      name="size"
                      control={control}
                    />
                  </Box>
                )}
              </div>

              <div className="flex gap-2 ">
                <div className="border-1 p-2 flex gap-2 items-center">
                  <p
                    onClick={() => {
                      setCount(count - 1);
                    }}
                    className="cursor-pointer"
                  >
                    -
                  </p>
                  <p>{count}</p>
                  <p
                    onClick={() => {
                      setCount(count + 1);
                    }}
                    className="cursor-pointer"
                  >
                    +
                  </p>
                </div>

                <div className=" text-center">
                  <button
                    className={`text-white text-sm font-bold py-3 px-6 ${
                      clicked
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gray-800 hover:bg-black"
                    }`}
                    type="submit"
                    disabled={clicked}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>

              <hr />

              <div className="text-[#8793a6] text-sm">
            
                <p>Category:{productDetails?.category}</p>
                <p>
                  Tags:{" "}
                  <span className="text-black">
                    black, Unisex, Lagos Fashion{" "}
                  </span>{" "}
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Product_Details;
