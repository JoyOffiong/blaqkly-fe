import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserItem{
    email: string;
    password:string;
    role:string;
    userName: string;
    gender:string;
    firstName: string;
    lastName: string;
    phoneNumber: string
}

interface UserState{
    items:UserItem | null;
}

const initialState:UserState= {items:null}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        addUser(state, action:PayloadAction<UserItem>){
          state.items=action.payload
        },
        clearUser(state){
            state.items =null
        }
    }
})

export const {addUser, clearUser} = userSlice.actions;
export default userSlice.reducer;