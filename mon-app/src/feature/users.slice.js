import { createSlice } from "@reduxjs/toolkit";

export const userDatatSlice = createSlice({
  name : "users",
  initialState : {
    users : null,
  },
  reducers : {
    setUsersData: ( state, action) => {
      state.user= action.payload
    }
  }
})

export const {setUsersData} = userDatatSlice.actions
export default userDatatSlice.reducer;
