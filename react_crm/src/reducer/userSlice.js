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
    }
  },
 
 
  reducers: {
    setSuperAdminLogin:(state,action)=>{
      state.superAdminLogin=action.payload
    },
    setClientLogin:(state,action)=>{
      state.clientLogin=action.payload
    }
   
  },
})

// Action creators are generated for each case reducer function
export const {setSuperAdminLogin,setClientLogin } = userSlice.actions

export default userSlice.reducer