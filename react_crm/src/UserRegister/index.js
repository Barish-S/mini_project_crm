import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'

import { EmployeeRegisterDetails } from "../reducer/userSlice"

import { Button,Form,Col,Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


function UserReg(){
   
    const dispatch = useDispatch()
   
    const {EmpRegDet} = useSelector((state) => state.user)

   
    let RegisterEmployees=()=>{
        let formData= new FormData()
        formData.append("name",EmpRegDet.name)
        formData.append("email",EmpRegDet.email)
        formData.append("password",EmpRegDet.password)
        formData.append("address",EmpRegDet.address)
        formData.append("phone",EmpRegDet.phone)
        formData.append("education",EmpRegDet.education)
        formData.append("dob",EmpRegDet.dob)

        formData.append("workbase",EmpRegDet.workbase)
        formData.append("gender",EmpRegDet.gender)
        formData.append("state",EmpRegDet.state)
        formData.append("pincode",EmpRegDet.pincode)
        formData.append("district",EmpRegDet.district)
        formData.append("aadhar",EmpRegDet.aadhar)


        axios.post("https://agaram.academy/api/crm/?request=employee_register",formData)
        .then(response=>{
           console.log(response)})
        // localStorage.removeItem("clientid")})
    }

    return(
        <>

            <h2>Register here!</h2>

            <b> {JSON.stringify(EmpRegDet)} </b>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Name :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your name" onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,name:e.target.value}))}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Email :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your email" onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,email:e.target.value}))}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Password :</Form.Label><Col sm="8"><Form.Control type="password" placeholder="enter your password" onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,password:e.target.value}))}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Address :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your address" onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,address:e.target.value}))}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Phone :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your phone" onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,phone:e.target.value}))}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Education :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your education" onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,education:e.target.value}))}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">aadhar :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your education" onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,aadhar:e.target.value}))}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">dob :</Form.Label><Col sm="8"><Form.Control type="date" placeholder="enter your education" onChange={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,dob:e.target.value}))}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">district :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your education" onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,district:e.target.value}))}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">state :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your education" onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,state:e.target.value}))}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">pincode :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your education" onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,pincode:e.target.value}))}/></Col></Form.Group>

            <Form.Select aria-label="Default select example" onChange={(e) =>dispatch(EmployeeRegisterDetails({...EmpRegDet,workbase:e.target.value}))}>
            <option>select work base</option>
            <option value="Wepdevelopment"  onChange={(e) =>dispatch(EmployeeRegisterDetails({...EmpRegDet,workbase:e.target.value}))}>Wepdevelopment</option>
            <option value="Driver"          onChange={(e) =>dispatch(EmployeeRegisterDetails({...EmpRegDet,workbase:e.target.value}))}>Driver</option>
            <option value="Plumber"         onChange={(e) =>dispatch(EmployeeRegisterDetails({...EmpRegDet,workbase:e.target.value}))}>Plumber</option>
            <option value="ElectricalWork"  onChange={(e) =>dispatch(EmployeeRegisterDetails({...EmpRegDet,workbase:e.target.value}))}>ElectricalWork</option>
            <option value="Interiordesign"  onChange={(e) =>dispatch(EmployeeRegisterDetails({...EmpRegDet,workbase:e.target.value}))}>Interiordesign</option>

            </Form.Select> 
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Gender :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your gender" onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,gender:e.target.value}))}/></Col></Form.Group>

            <div className="d-grid gap-1"> 
            <Button variant="primary" size="sm"  onClick={()=>RegisterEmployees()}>REGISTER</Button> 
            </div>
        </ >
    )
}

export default UserReg




                
