import axios from 'axios';
import {useState} from 'react';
import { setClientLogin } from '../reducer/userSlice';
import {useSelector,useDispatch} from "react-redux"


function ClientLogin(){

    // let [loginData,setLoginData] = useState({
    //     email:"",
    //     password:""
    // })

    const loginData=useSelector((state)=>state.user.clientLogin)
    const dispatch=useDispatch()

    const checkclientlogin = ()=>{
        axios({
            method : 'get',
            url : 'https://346ecf18-5094-4743-aa32-8c7c55e73246.mock.pstmn.io/Users',
            Data : {
                request : "Get All Users"
            }
        }).then(function(response){
            
            console.log(response.data)
            let datas= response.data;
            console.log(datas)
            let loopdata = datas.map((s)=>{
                
                if(s.email===loginData.password && s.name==loginData.email){
                    alert("success");
                }   
          
            })
        })}
            

    return(
        <>
        <h2>Login</h2>
        <label>Name:</label>
        <input type="text" onKeyUp={(e)=>dispatch(setClientLogin({...loginData,email:e.target.value}))}></input>

        <label>Email:</label>
        <input type="text" onKeyUp={(e)=>dispatch(setClientLogin({...loginData,password:e.target.value}))}></input>

        <button type="button" onClick={()=>checkclientlogin()}>Submit</button>
        </>
    )
}
export default ClientLogin;