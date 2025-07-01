"use client"

import Image from "next/image";
import React, { useState, useEffect } from "react";
import blazer from "@/images/men blazer.webp";
import { CiHeart } from "react-icons/ci";
import { TfiComment } from "react-icons/tfi";
import {productDetail} from "../../model/productModel";
import { IoCartOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import Button from '@mui/material/Button';
import AddProduct from "../components/modals/addProduct";
import Modal from "../components/modal";
import ProductAPIs from "@/services/CRUD";


function ProductListing() {

  const [products, setProducts] = useState([])

  const fetchProducts  = ()=>{ProductAPIs. Fetch_Products().then((res)=> 
 setProducts(res))}

  useEffect(()=>{
 fetchProducts()
  },[])

const [showModal, setShowModal ] = useState<boolean>(false)
const [showEditModal, setShowEditModal] = useState<boolean>(false)
const [showSuccessModal, setShowSuccessModal ] = useState<boolean>(false)
const [deleteSucccessModal, setDeleteSucccessModal] = useState<boolean>(false)
const [edit, setEdit] = useState<boolean>(false)

const handleClose =()=>{setShowModal(false)}
const closeSuccessModal =()=>{setShowSuccessModal(false)}

const deleteProduct=(id:number)=>{
   ProductAPIs.DeleteProduct(id).then((res)=>{
    setDeleteSucccessModal(true)
    console.log(res)
    return res;
   })
}

  const [editThis, setEditThis] = useState<productDetail>()
  const [editThisId, setEditThisId]= useState<number>()

function editModal(id:number){
  setEditThisId(id)
  setEdit(true)
  setShowEditModal(true)

 const selectedProduct = products.find((item:productDetail)=>item?.product_id === id )

  setEditThis(selectedProduct)
}

const closeEditModal =()=>{
  setShowEditModal(false)
}


const closeDeleteSuccessModal =()=>{
  setDeleteSucccessModal(false)
  fetchProducts()
}



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
          const { designer, name, price, sizes, product_id } = product;
         
          return (
            <div className="bg-white shadow-lg border-gray-300 border-1  rounded-sm" key={index} >
              <Link href={`/product_details/${product_id}`} >
              <div >
                {/* <div className="w-full flex justify-self-center ">
                  <Image
                    src={image}
                    width={240}
                    height={200}
                    alt="blaqkly logo"
                    className="rounded-t"
                  />
                </div> */}
                <div className="pt-3 px-3">
                  <p className="text-[14px]">{name}</p>
                  <p className="font-bold text-[15px]">{price}</p>
                  <p className="text-gray-600 pb-2 text-[12px]">
                    Size: {sizes} | {designer}
                  </p>
                  <hr className="border-gray-400" />
                  <div className="py-3 flex justify-between">
                    <CiHeart />
                    <TfiComment />
                    <IoCartOutline />
                  </div>
      
        <hr className="border-gray-400" />
                  
                </div>
              </div>
            </Link>
            <div  className="p-3 flex justify-end gap-x-8">
                    
      <MdDelete className="cursor-pointer" onClick={()=>deleteProduct(product_id)}/>
       <FaRegEdit className="cursor-pointer" 
                      onClick={()=>editModal(product_id)}/>
                  </div>
            </div>
          
          );
        })}
      </div>
    </div>
{showModal && <AddProduct handleClose={handleClose} open = {showModal} setShowSuccessModal={setShowSuccessModal} fetchProducts={fetchProducts}/>}
{showSuccessModal && <Modal handleClose={closeSuccessModal} open = {showSuccessModal} text={`${edit=== true ?"Product Updated Successfully": "Product Added Successfully" }`}/>}
{deleteSucccessModal && <Modal handleClose={closeDeleteSuccessModal} open={deleteSucccessModal}  text="Product Deleted Successfully"/> }
{showEditModal && <AddProduct editThisId={editThisId} handleClose={closeEditModal} open = {showEditModal} setShowSuccessModal={setShowSuccessModal} fetchProducts={fetchProducts} edit={edit} editThis={editThis}/>}
    </>
   
  );
}

export default ProductListing;
