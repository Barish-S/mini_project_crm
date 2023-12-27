import axios from 'axios';
import { useState } from "react";
import  setSuperAdminLogin from "../reducer/userSlice";
import {useSelector,useDispatch} from "react-redux";
import '../SuperAdmin/superLogin.css'

function SuperLogin(){
    // let[loginData,setLogin]=useState({
    //     email:"",
    //     password:""
    // })

    const loginData=useSelector((state)=>state.user.superAdminLogin)
    const dispatch=useDispatch()


    const checkLogin=()=>{

      let formData= new FormData()
      formData.append("email",loginData.email)
      formData.append("password",loginData.password)

      axios.post('https://agaram.academy/api/crm/?request=admin_login',formData)
      .then(response=>{
       let status=response.data.status
      if(status=="success"){
        alert("success")
      }
      else{
        alert("failed")
      }
      })

      // if (loginData.email=="sobith@gmail.com" && loginData.password==1234){
      //  alert("Login sucess")
      // }
      // else if(loginData.email=="sobith@gmail.com" && loginData.password!=1234){
      //   alert("wrong password")
      // }
      // else if(loginData.email!="sobith@gmail.com" && loginData.password==1234){
      //   alert("wrong email")
      // }
      // else{
      //   alert("wrong email and password")
      // }
            
        };
        return(  
            <>
              {/* <form>
            <h1>Log In</h1>
            <h3> Email: <input type="email" id="email" onKeyUp={(e)=>dispatch(setSuperAdminLogin({...loginData,email:e.target.value}))}/></h3>
              <h3>Password:<input type="password" id="password" onKeyUp={(e)=>dispatch(setSuperAdminLogin({...loginData,password:e.target.value}))}/></h3>
              <button type="button" onClick={()=>checkLogin()}>Login</button>
              </form> */}

<form class="form">
    <p class="title">Login </p>
    <p class="message">Signin now and get full access to our app. </p>
      
    <label>
        <input class="input" onKeyUp={(e)=>dispatch(setSuperAdminLogin({...loginData,email:e.target.value}))}  type="email" placeholder="" required=""/>
        <span>Email</span>
    </label> 
        
    <label>
        <input class="input" onKeyUp={(e)=>dispatch(setSuperAdminLogin({...loginData,password:e.target.value}))} type="password" placeholder="" required=""/>
        <span>Password</span>
    </label>
  
    <button class="submit" type='button' onClick={()=>checkLogin()}>Submit</button>
    <p class="signin">Don't have an acount ? <a href="#">Signup</a> </p>
</form>
            
            </>
)}
export default SuperLogin;    