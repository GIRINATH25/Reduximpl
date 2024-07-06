import { createSlice } from "@reduxjs/toolkit"; 

const initial = {
    user:[]
}

const userSlice = createSlice({
    name:"handleSlice",
    initialState:initial,
    reducers:{
        addUser:(state,action) => {
            console.log(action);
            state.user = [...state.user,action.payload];
        }
    }
})

export const { addUser } = userSlice.actions;

export default userSlice.reducer;