import axios from "axios"
import {useState} from "react"

function UserReg(){
   
   
    let [regData,setRegData] = useState({
        name : "",
        email : "",
        password : "",
        address : "",
        phone : "",
        city : "",
        area : "",
        pincode : ""
    })
    
    const Regdata = () => {
        axios({
            method : 'post',
            url : 'https://346ecf18-5094-4743-aa32-8c7c55e73246.mock.pstmn.io/NewEmployee',
            Data : {
                request : "Add_New_Employee",
                name : regData.name,
                email : regData.email,
                password : regData.password,
                address : regData.address,
                phone : regData.phone,
                city : regData.city,
                area : regData.area,
                pincode : regData.pincode

            }
        })
            .then(function(response){
                console.log(response)
            })
        // alert (JSON.stringify(regData))      
    }

    return(
        <>
            <h2>Register here!</h2>

            {/* <b> {JSON.stringify(regData)} </b> */}

            <label>Name : </label>
            <input type="text" onKeyUp={(e)=> setRegData({...regData,name:e.target.value})}/> 

            <label>Email : </label>
            <input type="email" onKeyUp={(e)=> setRegData({...regData,email:e.target.value})}/> 

            <label>password : </label>
            <input type="password" onKeyUp={(e)=>setRegData({...regData,password:e.target.value})}/> 

            <label>Address : </label>
            <textarea cols="15" rows="2" onKeyUp={(e)=>setRegData({...regData,address:e.target.value})}></textarea> 

            <label>Phone : </label>
            <input type="text" onKeyUp={(e)=>setRegData({...regData,phone:e.target.value})}/> 

            <label>City : </label>
            <input type="text" onKeyUp={(e)=>setRegData({...regData,city:e.target.value})}/> 

            <label>Area : </label>
            <input type="text" onKeyUp={(e)=>setRegData({...regData,area:e.target.value})}/> 

            <label>Pincode : </label>
            <input type="text" onKeyUp={(e)=>setRegData({...regData,pincode:e.target.value})}/> 

            <button type="button" variant="primary"  onClick={()=>Regdata()}>REGISTER</button>
        </ >
    )
}

export default UserReg




                
