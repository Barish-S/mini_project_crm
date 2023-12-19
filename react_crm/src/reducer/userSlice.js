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
    userloginsuccess:{},
    loggedStatus:{
      user:""
    }
  },
 
 
  reducers: {
    EmployeeRegisterDetails : (state,action) => {
      state.EmpRegDet = action.payload
    },
    updateUserLoginSuccess : (state,action)=>{
      state.userloginsuccess = action.payload
    },
    setloggedStatus : (state,action) =>{
      state.loggedStatus.user=action.payload
    }
    
   
  },
})

// Action creators are generated for each case reducer function
export const { EmployeeRegisterDetails,updateUserLoginSuccess} = userSlice.actions

export default userSlice.reducer 