"use client"

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiModal from "@mui/material/Modal";
import { Style } from "../style";
import { useForm } from "react-hook-form";
import InputBoxComp from "../inputField";
import SelectBoxComp from "../selectField";
import ProductAPIs from "../../../services/CRUD";
import {  CircularProgress } from "@mui/material";
import { productDetail } from "@/model/productModel";


type props = {
  handleClose: () => void;
  open: boolean;
  fetchProducts: ()=>void
  edit?: boolean
  editThisId?: number,
  editThis?: productDetail
  setShowSuccessModal:(arg0: boolean)=>void;
}

export default function AddProduct({editThisId, fetchProducts, handleClose,editThis, open,edit, setShowSuccessModal}: props) {

  const { control, handleSubmit, reset} = useForm()
  const [loading, setLoading] = useState(false)

  const category =[{value:"Female", label:"Female"}, {value:"Male", label:"Male"}]
const type =[{value:"Cloth", label:"Cloth"}, {value:"Shoe", label:"Shoe"}]


  const addProduct=(data:any)=>{
    setLoading(true)

    if(!edit){
   ProductAPIs.Create_Product(data).then((res)=>{
      setLoading(false)
      handleClose()
      setShowSuccessModal(true)
      fetchProducts()
      return res
    })
    .catch((err)=>{throw err})
    return
    }
    if(editThisId !== undefined){
  ProductAPIs.updateProduct(editThisId, data).then((res)=>{
      if(res){
        
       setLoading(false)
      handleClose()
      setShowSuccessModal(true)
      fetchProducts()
      }
    })
    }
  
 
  }


  useEffect(()=>{
    if(edit){
      reset({
        name: editThis?.name,
        price: editThis?.price,
        sizes: editThis?.sizes,
        designer:editThis?.designer,
        category: editThis?.category,
        care_instructions: editThis?.care_instructions,
        type: editThis?.type,
        description: editThis?.description

      })
    }
  },[])


  return (
     <MuiModal
         open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
       >
         <Box sx={Style}>
           <Typography id="modal-modal-title" variant="h6" component="h4">
           {edit === true ? "Update Product": "Add a Product"} 
           </Typography>
           
           <div className="mt-8">
            <form onSubmit={handleSubmit(addProduct)} >
              <div className="flex gap-4 flex-col mb-4">
              
             <InputBoxComp control={control} name="name" type="text" label="Enter Name"/>
               <InputBoxComp control={control} name="price" type="number" label="Enter Price" />

               {/* This should be a dropdown with sizes, and when I select one, it should come up as a selected field, multi-select implementation */}
              <InputBoxComp control={control} name="sizes" type="text" label=" Enter Sizes Available"/>
             <InputBoxComp control={control} name="designer" type="text" label="designer"/>
            <SelectBoxComp control={control} name="category" data={category} label="Category" />
            <InputBoxComp control={control} name="care_instructions" type="text" label="Enter Care Instructions"/>

             <SelectBoxComp control={control} name="type" data={type} label="Type" />
              <InputBoxComp control={control} name="description" type="text" label="Description"/>

              </div>
               
    <div className="bg-gray-800 cursor-pointer text-white text-center p-2 hover:bg-black rounded-md">
                 <button type="submit">
                 {loading ? <CircularProgress size={24} /> : edit=== true ? "Update" : "Add"}
               </button>
    </div>
            


             
            </form>
           </div>
         </Box>
       </MuiModal>
  )

}

