import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem{
    product_id: string | undefined;
    name: string | undefined;
    quantity: number;
    size: string;
    price: number;
}

interface CartState{
    items: CartItem[];
}

const initialState:CartState={
    items: []
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem(state, action:PayloadAction<CartItem>){
            const existingItem= state.items.find(item => item.product_id === action.payload.product_id);
            if(existingItem){
                existingItem.quantity +=action.payload.quantity
            }
            state.items.push(action.payload)
        },
          removeItem(state, action:PayloadAction<string>){
                    state.items = state.items.filter(item =>item.product_id != action.payload);
        },
        clearCart(state){
            state.items = []
        }
       
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;