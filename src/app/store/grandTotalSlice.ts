import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface grandTotalState{
    total:number;
}


const initialState: grandTotalState={
    total:0
}

const grandTotalSlice = createSlice({
    name:"grandTotal",
    initialState,
    reducers:{
        addGrandTotal(state, action:PayloadAction<number>){
           state.total = action.payload
        },
        clearGrandTotal(state){
            state.total = 0
        }
    }

})


export const {addGrandTotal, clearGrandTotal} = grandTotalSlice.actions;
export default grandTotalSlice.reducer;