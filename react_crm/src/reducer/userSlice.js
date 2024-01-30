import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { useDispatch } from 'react-redux'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    superAdminLogin: {
      email: "admin123@gmail.com",
      password: "admin@123"
    },
    clientLogin: {
      email: "bhuvana@gmail.com",
      password: "12345"
    },
    

    EmpRegDet: {
      name: "barish",
      email: "barish@gmail.com",
      password: "123456",
      gender: "male",
      dob: "2000-10-28",
      aadhar: "391913191857",
      phone: "6383456559",
      place: "Layam",
      pincode: "629302",
      district: "Kanyakumari",
      state: "Tamilnadu ",
      education: "M.Sc Comuputer Sciece",
      workbase: ""

    },

    userloginsuccess: {},

    ClientDetails: {},

    loggedStatus: {
      user: "",
      data: [],
      empData: [],
      clientData: [],
      status: ""
    },

    Assignedperson : [
      
    ],

    Assignedperson : [
      
    ],

    WorkDetails: [],
    AssigndedEmp:[],
  },
 


  reducers: {
    setSuperAdminLogin: (state, action) => {
      state.superAdminLogin = action.payload
    },
    setClientLogin: (state, action) => {
      state.clientLogin = action.payload
    },
    EmployeeRegisterDetails: (state, action) => {
      state.EmpRegDet = action.payload
    },
    setLoggedData: (state, action) => {
      state.loggedStatus.data = action.payload
    },
    setLoggedUser: (state, action) => {
      state.loggedStatus.user = action.payload
    },
    setEmpData: (state, action) => {
      state.loggedStatus.empData = action.payload
    },
    setClientData: (state, action) => {
      state.loggedStatus.clientData = action.payload
    },
    setLoggedStatus: (state, action) => {
      state.loggedStatus.status = action.payload
    },

    RegisterClient: (state, action) => {
      state.ClientDetails = action.payload
    },
    setClientLogin: (state, action) => {
      state.clientLogin = action.payload
    },
    setSuperAdminLogin: (state, action) => {
      state.superAdminLogin = action.payload
    },
    updateUserLoginSuccess: (state, action) => {
      state.userloginsuccess = action.payload
    },
    setWorkDetails: (state, action) => {
      state.WorkDetails = action.payload
    },
    setAssignedperson : (state,action) => {
      state.Assignedperson = action.payload
    },
    workAssignedEmployees:(state,action) => {
      state. AssigndedEmp= action.payload
    }
  },

})


// Action creators are generated for each case reducer function
export default userSlice.reducer
export const {workAssignedEmployees, setSuperAdminLogin,setClientData, EmployeeRegisterDetails, setLoggedStatus, RegisterClient, setClientLogin, updateUserLoginSuccess, setLoggedData, setEmpData,setWorkDetails,setLoggedUser,setAssignedperson } = userSlice.actions
