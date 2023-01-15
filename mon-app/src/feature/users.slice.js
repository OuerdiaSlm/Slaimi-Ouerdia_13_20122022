import { createSlice } from "@reduxjs/toolkit";

export const userDatatSlice = createSlice({
  name : "users",
  initialState : {
    token: ["ok"],
    userFirstName:'',
    userLastName:''
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
    },
    setUserInfo: (state, action)=>{
      
      
      state.userFirstName=action.payload[0]
      state.userLastName=action.payload[1]
     // state.userName=action.payload[1]
     console.log(state.userFirstName,state.userLastName)
      
    }
  }
})

export const {setUsersData,setUserInfo} = userDatatSlice.actions
export default userDatatSlice.reducer;
