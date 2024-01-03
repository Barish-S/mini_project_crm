import { useDispatch ,useSelector} from "react-redux";
import axios from 'axios';
import { setWorkDetails } from '../reducer/userSlice';
import { useEffect } from "react";
import { useNavigate } from "react-router";


function Workdetails(){
    let navigate=useNavigate()
   useEffect(()=>{
        if(localStorage.getItem("loggedstate")!="client"){
            navigate("/ClientLogin")
        }
   },[])  
    const dispatch=useDispatch();
    const workdetailsData=useSelector((state)=>state.user.WorkDetails)
    // const clientloginid=useSelector((state)=>state.user.clientLogin)
    let clientloginid=localStorage.getItem("clientid")
    
    let workdetailsget=()=>{
        let formData= new FormData() 
        formData.append("clientid",workdetailsData.clientid) 
        formData.append("work",workdetailsData.work) 
        formData.append("workplace",workdetailsData.workplace) 
        axios.post('https://agaram.academy/api/crm/?request=create_work_details',formData) 
        .then(response=>{
           console.log(response)})
        // localStorage.removeItem("clientid")})
    }
    return(
        <>
        {JSON.stringify(workdetailsData)}
        {/* {JSON.stringify(clientloginid)} */}
{clientloginid}
        <h1>work</h1>
        <form class="form">
    <p class="title">Login </p>
    <p class="message">Signin now and get full access to our app. </p>
    <label>
        <input class="input" defaultValue={clientloginid} onChange={(e)=>dispatch(setWorkDetails({...workdetailsData,clientid:e.target.value}))} type="text" placeholder="" required=""/>
        <span>clientId</span>
    </label>
    <label>

    <span>work :</span>   
    <select value={workdetailsData.work} onChange={(e) => dispatch(setWorkDetails({...workdetailsData,work:e.target.value}))}>
   
            <option value="" selected disabled hidden>select work</option>
            <option value="Webdevelopment ">Webdevelopment</option>

            <option value="Driver">Driver</option>

            <option value="Plumber">Plumber</option>

            <option value="Electrical work">Electrical work</option>

            <option value="Interiordesign">Interiordesign</option>

            </select>
           
            </label>
   
    <label>
        <input class="input" onKeyUp={(e)=>dispatch(setWorkDetails({...workdetailsData,workplace:e.target.value}))} type="text" placeholder="" required=""/>
        <span>workplace</span>
    </label>
    
    <button class="submit" type='button' onClick={()=>workdetailsget()}>Submit</button>
    <p class="signin">Don't have an acount ? <a href="#">Signup</a> </p>
</form>
        </>
    )
}

export default Workdetails;