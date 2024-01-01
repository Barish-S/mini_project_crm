import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { useDispatch } from 'react-redux'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    superAdminLogin: {
      email: "",
      password: ""
    },
    clientLogin: {
      email: "",
      password: ""
    },

    EmpRegDet: {
      name: "divya",
      email: "div@gmail.com",
      password: "2345",
      gender: "female",
      dob: "",
      aadhar: "23604116",
      phone: "7993337687",
      address: "kottar",
      pincode: "629002",
      district: "kanyakumari",
      state: "tamil nadu",
      education: "BA.english",
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

    WorkDetails: [],
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
  },

})


// Action creators are generated for each case reducer function
export const { setLoggedUser, setSuperAdminLogin, setClientData, EmployeeRegisterDetails, setLoggedStatus, RegisterClient, setClientLogin, updateUserLoginSuccess, setLoggedData, setEmpData, setWorkDetails } = userSlice.actions

export default userSlice.reducer;

