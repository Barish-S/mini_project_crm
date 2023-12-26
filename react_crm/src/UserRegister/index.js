import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'

import { EmployeeRegisterDetails } from "../reducer/userSlice"

import { Button,Form,Col,Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


function UserReg(){
   
    const dispatch = useDispatch()
   
    const {EmpRegDet} = useSelector((state) => state.user)

    const Regdata = () => {
       axios.post("https://346ecf18-5094-4743-aa32-8c7c55e73246.mock.pstmn.io/NewEmployee",EmpRegDet).then(function(success){
        console.log(success)
       })   
    }
    let RegisterEmployees=()=>{
        let formData= new FormData()
        formData.append("clientid",EmpRegDet.name)
        formData.append("work",EmpRegDet.email)
        formData.append("workplace",EmpRegDet.password)
        formData.append("workplace",EmpRegDet.address)
        formData.append("workplace",EmpRegDet.phone)
        formData.append("workplace",EmpRegDet.education)

        formData.append("workplace",EmpRegDet.workbase)
        formData.append("workplace",EmpRegDet.gender)

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




                
