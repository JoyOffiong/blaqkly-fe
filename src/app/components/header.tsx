"use client"

import { X } from "lucide-react";
import React, { useState } from "react";
import {blaqklyLogo} from "../../../public/"
import Image from "next/image";

function Header() {

    const [closeHeader, setCloseHeader] = useState<boolean>(false)

  return (
    <div>
 <div className={`bg-[#2b2a2a] transition-full duration-300 md:block hidden ${closeHeader && `md:hidden`}`}>
      <div className="px-10 w-full items-center justify-center flex py-1">
        <div className="w-1/2"/>
        <div className="w-2/3 justify-between flex-end flex items-center">
          <div className="flex flex-row justify-between items-center">
            <p className="text-white font-light text-12">We ship Worldwide</p>
          </div>

          <div className="">
            <X size={12} onClick={()=>setCloseHeader(!closeHeader)}/>
          </div>
        </div>
      </div>
    </div>

    <div className="flex justify-center">
        <div>
            <Image src={blaqklyLogo}/>
        </div>
    </div>
    </div>
   
  );
}

export default Header;
