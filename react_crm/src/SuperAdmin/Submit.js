import { useState } from "react";


function Submit(){
    let[loginData,setLogin]=useState({
        email:"",
        password:""
    })
    const checkLogin=()=>{
      if (loginData.email=="sobith@gmail.com" && loginData.password==1234){
       alert("Login sucess")
      }
      else if(loginData.email=="sobith@gmail.com" && loginData.password!=1234){
        alert("wrong password")
      }
      else if(loginData.email!="sobith@gmail.com" && loginData.password==1234){
        alert("wrong email")
      }
      else{
        alert("wrong email and password")
      }
            
        };
        return(  
            <>
              <form>
            <h1>Log In</h1>
            <h3> Email: <input type="email" id="email" onKeyUp={(e)=>setLogin({
                ...loginData,
                email:e.target.value
             })}/></h3>
              <h3>Password:<input type="password" id="password" onKeyUp={(e)=>setLogin({
                ...loginData,
                password:e.target.value
              })}/></h3>
              <button type="button" onClick={()=>checkLogin()}>Login</button>
              </form>
            
            </>
)}
export default Submit;    