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

    return(
        <>

            <h2>Register here!</h2>

            <b> {JSON.stringify(EmpRegDet)} </b>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Name :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your name" onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,name:e.target.value}))}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Email :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your email" onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,email:e.target.value}))}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Password :</Form.Label><Col sm="8"><Form.Control type="password" placeholder="enter your password" onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,password:e.target.value}))}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Address :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your address" onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,address:e.target.value}))}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Phone :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your phone" onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,phone:e.target.value}))}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">City :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your city" onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,city:e.target.value}))}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Area :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your area" onKeyUp={(e) => dispatch(EmployeeRegisterDetails({...EmpRegDet,area:e.target.value}))}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Pincode :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your pincode" onKeyUp={(e) =>dispatch(EmployeeRegisterDetails({...EmpRegDet,pin:e.target.value})) }/></Col></Form.Group>
            
            <div className="d-grid gap-1">
            <Button variant="primary" size="sm"  onClick={()=>Regdata()}>REGISTER</Button>
            </div>

        </ >
    )
}

export default UserReg




                
