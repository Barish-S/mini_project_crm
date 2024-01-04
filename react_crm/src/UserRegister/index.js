import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'

import { EmployeeRegisterDetails } from "../reducer/userSlice"

import { Button,Form,Col,Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import "./index.css"

import moment from "moment"
import { Navigate, useNavigate } from "react-router";



function UserReg(){
   
    const dispatch = useDispatch()
    const navigate = useNavigate()
   
    const {EmpRegDet} = useSelector((state) => state.user)

    const Regdata = () => {
                let formData = new FormData()
                
        formData.append("name",EmpRegDet.name)
        formData.append("email",EmpRegDet.email)
        formData.append("password",EmpRegDet.password)
        formData.append("gender",EmpRegDet.gender)
        formData.append("dob",EmpRegDet.dob)
        formData.append("aadhar",EmpRegDet.aadhar)
        formData.append("address",EmpRegDet.address)
        formData.append("pincode",EmpRegDet.pincode)
        formData.append("district",EmpRegDet.district)
        formData.append("state",EmpRegDet.state)
        formData.append("phone",EmpRegDet.phone)
        formData.append("education",EmpRegDet.education)
        formData.append("workbase",EmpRegDet.workbase)

        let age = moment().diff(EmpRegDet.dob,"years")


            let error = false

            {Object.entries(EmpRegDet).map(([key,value]) => {
                // console.log(key)
                if(value == ""||value=="  "||value=="   "||value=="     "){
                    console.log("enter values of: ",key)
                    error = true
                }
            }
            )}

            if(error == false){
                if (age>18 && age<50){
                    // alert("successfully registered")
                    axios.post("https://agaram.academy/api/crm/?request=employee_register",formData).then(function(success){
                    console.log(success)
                    console.log(formData)
                    navigate('/Userlogin')
                    })
                }
                else{
                    alert("You are not eligible to register!")
                } 
            }

        }
    return(
        <>
        {JSON.stringify(EmpRegDet)}
        <form class="form">

            <p class="title">Register here!</p>

            <p class="message">Signup now and get full access to our app. </p>

            {/* <div class="flex"> */}

                <label>
                    <input class="input" type="text" placeholder=""  onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,name:e.target.value}))}/>
                    <span>Name</span>
                </label>

            {/* </div>   */}

            <div class="flex">

            <label>
                <input class="input" type="email" placeholder=""  onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,email:e.target.value}))}/>
                <span>Email</span>
            </label> 
                
            <label>
                <input class="input" type="password" placeholder=""  onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,password:e.target.value}))}/>
                <span>Password</span>
            </label>

            </div>

            <label>
                <input class="input" type="date" placeholder=""  onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,dob:e.target.value}))}/>
                <span>DOB</span>
            </label>

            <label>
                <input class="input" type="text" placeholder=""  onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,address:e.target.value}))}/>
                <span>Address</span>
            </label>

            <label>
                <input class="input" type="text" placeholder="" onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,pincode:e.target.value}))}/>
                <span>Pincode</span>
            </label>

            <label>
                <input class="input" type="text" placeholder=""  onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,aadhar:e.target.value}))}/>
                <span>Aadhar</span>
            </label>

            <label>
                <input class="input" type="text" placeholder=""  onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,phone:e.target.value}))}/>
                <span>Phone</span>
            </label>

            <div class="flex">

            <label>
                <input class="input" type="text" placeholder="" onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,district:e.target.value}))}/>
                <span>District</span>
            </label>

            <label>
                <input class="input" type="text" placeholder="" onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,state:e.target.value}))}/>
                <span>State</span>
            </label>

            </div>

            <label>
                <input class="input" type="text" placeholder=""  onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,education:e.target.value}))}/>
                <span>Education</span>
            </label>

            <select value={EmpRegDet.workbase} onChange={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,workbase:e.target.value}))}>
            
            <option disabled={true} value ="" hidden> Workbase </option>

            <option value="Webdevelopment "> Webdevelopment </option>

            <option value="Driver"> Driver </option>

            <option value="Plumber"> Plumber </option>

            <option value="Electrical work"> Electrical work </option>

            <option value="Interiordesign"> Interiordesign </option>

            </select>

            <label>
                <input class="input" type="text" placeholder=""  onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,gender:e.target.value}))}/>
                <span>Gender</span>
            </label> 
            
            <button class="submit" type="button" onClick={()=>Regdata()}>Submit</button>

            <p class="signin">Already have an acount ? <a href="#">Signin</a> </p>

        </form>

        </ >
    )
}


export default UserReg




                
