import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../data"


const userSlice=createSlice({
name:"users",
initialState:{
 value: userList,
},

reducers:{
    addUser:(state,action)=>{
        state.value.push(action.payload)
    }
}
})
export default userSlice.reducer
export const {addUser}=userSlice.actions