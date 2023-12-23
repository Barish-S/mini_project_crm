import axios from 'axios';
import {useState} from 'react';
import { setClientLogin } from '../reducer/userSlice';
import {useSelector,useDispatch} from "react-redux"
import "../ClientLogin/clientLogin.css"

function ClientLogin(){

    // let [loginData,setLoginData] = useState({
    //     email:"",
    //     password:""
    // })

    const loginData=useSelector((state)=>state.user.clientLogin)
    const dispatch=useDispatch()

    const checkclientlogin = ()=>{

        let formData= new FormData()
        formData.append("email",loginData.email)
        formData.append("password",loginData.password)

        axios.post('https://agaram.academy/api/crm/?request=client_login',formData)
     .then(response=>{
        console.log(response)
      let status=response.data.status
      if(status=="success"){
        alert("success")
      }
      else{
        alert("failed")
      }

        // axios({
        //     method : 'get',
        //     url : 'https://346ecf18-5094-4743-aa32-8c7c55e73246.mock.pstmn.io/GetEmployees',
        //     Data : {
        //         request : "Get_All_Employee"
        //     }
        // }).then(function(response){
        //     console.log((response))
            
            // console.log(response.data)
            // let datas= response.data;
            // console.log(JSON.stringify(datas))
            // console.log(typeof(datas))
      let loopdata= datas.map((s)=>{
                
                if(s.email===loginData.password && s.name==loginData.email){
                    alert("success");
                }   
          
            })
        })}
            

    return(
        <>
        {JSON.stringify(loginData)}
        {/* <h2>Login</h2>
        <label>Name:</label>
        <input type="text" onKeyUp={(e)=>dispatch(setClientLogin({...loginData,email:e.target.value}))}></input>

        <label>Email:</label>
        <input type="text" onKeyUp={(e)=>dispatch(setClientLogin({...loginData,password:e.target.value}))}></input>

        <button type="button" onClick={()=>checkclientlogin()}>Submit</button> */}

<form class="form">
    <p class="title">Login </p>
    <p class="message">Signin now and get full access to our app. </p>
      
    <label>
        <input class="input" onKeyUp={(e)=>dispatch(setClientLogin({...loginData,email:e.target.value}))} type="email" placeholder="" required=""/>
        <span>Email</span>
    </label> 
        
    <label>
        <input class="input" onKeyUp={(e)=>dispatch(setClientLogin({...loginData,password:e.target.value}))} type="password" placeholder="" required=""/>
        <span>Password</span>
    </label>
  
    <button class="submit" type='button' onClick={()=>checkclientlogin()}>Submit</button>
    <p class="signin">Don't have an acount ? <a href="#">Signup</a> </p>
</form>
        </>
    )
}
export default ClientLogin; 