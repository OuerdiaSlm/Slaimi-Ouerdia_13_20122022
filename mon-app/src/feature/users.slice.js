import { createSlice } from "@reduxjs/toolkit";

export const userDatatSlice = createSlice({
  name : "users",
  initialState : {
    token: '',
    userFirstName:'',
    userLastName:''
  },

  reducers : {
    setUsersData: ( state, action) => {
      state.token= action.payload
    },

    setUserInfo: (state, action)=>{
      state.userFirstName=action.payload[0]
      state.userLastName=action.payload[1]
    }
  }
})

export const {setUsersData,setUserInfo} = userDatatSlice.actions
export default userDatatSlice.reducer;
