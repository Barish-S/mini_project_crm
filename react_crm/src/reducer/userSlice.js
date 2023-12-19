import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    superAdminLogin:{
      email:"",
      password:""
    },
    clientLogin:{
      email:"",
      password:""
    },
    EmpRegDet:{},
    userloginsuccess:{}
  },
 
 
  reducers: {
    
   
  },
})

// Action creators are generated for each case reducer function
export const {setSuperAdminLogin,setClientLogin ,EmployeeRegisterDetails,updateUserLoginSuccess} = userSlice.actions

export default userSlice.reducer 