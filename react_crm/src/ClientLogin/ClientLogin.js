import axios from 'axios';
import {useState} from 'react';


function ClientLogin(){

    let [loginData,setLoginData] = useState({
        email:"",
        password:""
    })

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
        <input type="text" onKeyUp={(e)=>setLoginData({...loginData,email:e.target.value})}></input>

        <label>Email:</label>
        <input type="text" onKeyUp={(e)=>setLoginData({...loginData,password:e.target.value})}></input>

        <button type="button" onClick={()=>checkclientlogin()}>Submit</button>
        </>
    )
}
export default ClientLogin;