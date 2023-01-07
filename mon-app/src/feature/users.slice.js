import { createSlice } from "@reduxjs/toolkit";

export const userDatatSlice = createSlice({
  name : "users",
  initialState : {
    token: ["ok"]
    /*users : [
      firstName = "test" ,
      lastName = "test1",
      email = "test@SpeechGrammarList.com",
      password = "password",
      token = "test"
     ], */
  },
  reducers : {
    setUsersData: ( state, action) => {
      state.token= action.payload
      console.log(state.token)
    }
  }
})

export const {setUsersData} = userDatatSlice.actions
export default userDatatSlice.reducer;
