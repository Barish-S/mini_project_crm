import { useState } from 'react'
import { Button,Form,Row,Col } from 'react-bootstrap';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux'
import { RegisterClient } from '../reducer/userSlice';




export function ClientRegister() {

    const [ClientResgister, IsClientRegister] = useState({
       name:"",
       email:"",
       password:"",
       address:"",
       phone:"",
       city:"",
       area:"",
       pin:"",
    })

    let dispatch=useDispatch();

    const RegData=()=>{
        axios({
            method: 'post',
            url: 'https://346ecf18-5094-4743-aa32-8c7c55e73246.mock.pstmn.io/newUsers',
           data: {
                request : "Add New Users",
                name : ClientResgister.name,
                email : ClientResgister.email,
                password : ClientResgister.password,
                address : ClientResgister.address,
                phone : ClientResgister.phone,
                city : ClientResgister.city,
                area : ClientResgister.area,
                pin : ClientResgister.pin,
            },
            
          }).then(function(response){
            console.log(response)
            dispatch(RegisterClient(response))
          })
} 

    return (
        <>
        <Form>
                          <h1>Register here !</h1>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Name :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your name" onKeyUp={(e) => IsClientRegister({ ...ClientResgister, name: e.target.value })}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Email :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your email" onKeyUp={(e) => IsClientRegister({ ...ClientResgister, email: e.target.value })}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Password :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your password" onKeyUp={(e) => IsClientRegister({ ...ClientResgister, password: e.target.value })}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Mobile no :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your phone" onKeyUp={(e) => IsClientRegister({ ...ClientResgister, phone: e.target.value })}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Address :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your address" onKeyUp={(e) => IsClientRegister({ ...ClientResgister, address: e.target.value })}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">City :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your city" onKeyUp={(e) => IsClientRegister({ ...ClientResgister, city: e.target.value })}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Area :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your area" onKeyUp={(e) => IsClientRegister({ ...ClientResgister, area: e.target.value })}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Pincode :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your pincode" onKeyUp={(e) => IsClientRegister({ ...ClientResgister, pin: e.target.value })}/></Col></Form.Group>
            <Col xs="auto"><Form.Check type="checkbox" id="autoSizingCheck" column="sm" className="mb-2" label="Remember me"/></Col>
            <div className="d-grid gap-1">
            <Button variant="primary" size="sm"  onClick={()=>RegData()}>Register</Button></div>
            </Form>
        </>

    )
}

