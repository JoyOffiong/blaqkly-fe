"use client";

import { X } from "lucide-react";
import { IoLogoTwitter } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { BsCart3 } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import blaqklyLogo from "@/images/blaqkly2.jpeg";
import Image from "next/image";

import { IoPersonOutline } from "react-icons/io5";
import Link from "next/link";
import { RootState } from "../store/store";
import { clearUser } from "../store/userSlice";
import Modal from "./modal";

function Header() {
  const [items, setItems] = useState<number>(0);
  const [closeHeader, setCloseHeader] = useState<boolean>(false);
  const [showScrolledHeader, setShowScrolledHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
  if(window.scrollY > 40){
      setShowScrolledHeader(!showScrolledHeader);

  } ;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [confirmModal, setConfirmModal] = useState<boolean>(false)
  const confirmLogOut = () =>{
    setConfirmModal(true)
  }
  const closeConfirmLogout = ()=>{
        setConfirmModal(false)

  }

  const dispatch = useDispatch()

  const LogOut=()=>{
    dispatch((clearUser()))
    setConfirmModal(false)
    window.location.href = "https://blaqklyfe.netlify.app/"
  }

  const itemsCount =useSelector((state:RootState )=> state.cart.items)
  

  return (
    <div className="mb-10">
      <div>
        <div
          className="bg-[#2b2a2a] transition-full duration-300"
        >
          <div className=" px-4 md:px-10 w-full items-center justify-center flex py-1">
            <div className=" w-0 md:w-1/2" />
            <div className="w-full md:w-2/3 justify-between flex-end flex items-center">
              <div className="flex flex-row justify-between items-center">
                <p className="text-white font-light text-12">
                  We ship Worldwide
                </p>
              </div>

              <div className="">
                <X
                  size={12}
                  color="white"
                  onClick={() => setCloseHeader(!closeHeader)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="  ">
          {/* <div className="flex gap-4 flex-row items-center">
            <FaFacebookSquare />
            <IoLogoTwitter />
            <AiOutlineInstagram />
            <IoLogoWhatsapp />
          </div> */}
          <div className="flex gap-2 justify-end items-center">

            <Link href="/log_in" className="flex gap-1 items-center">
              <IoPersonOutline />
              <p className="font-light text-sm">LOGIN</p>   
               

            </Link>
           

   <Link href="/cart">
     <div className="bg-gray-600 text-white flex gap-2 items-center px-4 py-2">
              <BsCart3 />
              <p className="font-light ">{itemsCount.length}</p>
            </div>
    </Link>
      <button className="bg-gray-800  text-white text-center p-2 hover:bg-black" type='submit' onClick={()=>confirmLogOut()}>
                                          Log Out
                                        </button>   
           
          </div>
        </div>


        <div className="flex flex-col md:-mt-5 justify-center pb-2">
          <Link href="./">
           <div className="flex gap-6 justify-center pb-2">
            <Image
              src={blaqklyLogo}
              width={200}
              height={200}
              alt="blaqkly logo"
            />
          </div>
          </Link>
         

          {/* <div className="flex gap-6 justify-center">
            <p>New In</p>
            <p>shop</p>
            <p>Brand</p>
            <p>Sale</p>
          </div> */}
        </div>
      </div>

{confirmModal && <Modal operation={LogOut} handleClose={closeConfirmLogout} open={confirmModal}  text="Are you sure you want to log out? You could shop some more you know, if you want."/> }
 
    </div>
  );
}

export default Header;
