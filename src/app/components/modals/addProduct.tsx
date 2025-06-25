import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiModal from "@mui/material/Modal";
import { Style } from "../style";
import { useForm } from "react-hook-form";
import InputBoxComp from "../inputField";
import SelectBoxComp from "../selectField";
import { Button } from "@mui/material";

type props = {
  handleClose: () => void;
  open: boolean;
};
export default function AddProduct({handleClose, open}: props) {

  const { control, handleSubmit} = useForm()

const category =[{value:"Female", label:"Female"}, {value:"Male", label:"Male"}]
const type =[{value:"Cloth", label:"Cloth"}, {value:"Shoe", label:"Shoe"}]


  const addProduct=(data:any)=>{
    
    ProductAPIs.Create_Product(data)
  }



  return (
     <MuiModal
         open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
       >
         <Box sx={Style}>
           <Typography id="modal-modal-title" variant="h6" component="h4">
            Add a Product
           </Typography>
           
           <div className="mt-4">
            <form onSubmit={handleSubmit(addProduct)} >
              <div className="flex gap-4 flex-col mb-4">
             <InputBoxComp control={control} name="name" type="text" label="Enter Name"/>
               <InputBoxComp control={control} name="price" type="number" label="Enter Price" />
              <InputBoxComp control={control} name="sizes" type="text" label=" Enter Sizes Available"/>
             <InputBoxComp control={control} name="designer" type="text" label="designer"/>
            <SelectBoxComp control={control} name="category" data={category} label="Category" />
            <InputBoxComp control={control} name="care_instructions" type="text" label="Enter Care Instructions"/>

             <SelectBoxComp control={control} name="type" data={type} label="Type" />
              <InputBoxComp control={control} name="description" type="text" label="Description"/>

              </div>
               
    <div >
  <Button variant="outlined">Submit</Button>
    </div>
            


             
            </form>
           </div>
         </Box>
       </MuiModal>
  )

}

