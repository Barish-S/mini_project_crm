import { useState } from 'react'
import { Button,Form,Row,Col } from 'react-bootstrap';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import { RegisterClient } from '../reducer/userSlice';




export function ClientRegister() {

    // const [ClientResgister, IsClientRegister] = useState({
    //    name:"",
    //    email:"",
    //    password:"",
    //    address:"",
    //    phone:"",
    //    city:"",
    //    area:"",
    //    pin:"",
    // })

    let dispatch=useDispatch();

    let ClientDetail=useSelector((state)=>state.user.RegisterClient)
    console.log(ClientDetail)

    const RegData=()=>{
        axios({
            method: 'post',
            url: 'https://346ecf18-5094-4743-aa32-8c7c55e73246.mock.pstmn.io/newUsers',
           data: {
                request : "Add New Users",
                name : ClientDetail.name,
                email : ClientDetail.email,
                password : ClientDetail.password,
                address : ClientDetail.address,
                phone : ClientDetail.phone,
                city : ClientDetail.city,
                area : ClientDetail.area,
                pin : ClientDetail.pin,
            },
            
          }).then(function(response){
            console.log(response)
            dispatch(RegisterClient(response))
            alert("Registerd succefully")
          })
} 

    return (
        <>
        <Form>
                          <h1>Register here !</h1>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Name :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your name" onKeyUp={(e) => dispatch(RegisterClient({ ...ClientDetail, name: e.target.value }))}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Email :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your email" onKeyUp={(e) => dispatch(RegisterClient({ ...ClientDetail, email: e.target.value }))}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Password :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your password" onKeyUp={(e) => dispatch(RegisterClient({ ...ClientDetail, password: e.target.value }))}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Mobile no :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your phone" onKeyUp={(e) => dispatch(RegisterClient({ ...ClientDetail, phone: e.target.value }))}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Address :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your address" onKeyUp={(e) => dispatch(RegisterClient({ ...ClientDetail, address: e.target.value }))}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">City :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your city" onKeyUp={(e) => dispatch(RegisterClient({ ...ClientDetail, city: e.target.value }))}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Area :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your area" onKeyUp={(e) => dispatch(RegisterClient({ ...ClientDetail, area: e.target.value }))}/></Col></Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"><Form.Label column sm="4">Pincode :</Form.Label><Col sm="8"><Form.Control type="text" placeholder="enter your pincode" onKeyUp={(e) => dispatch(RegisterClient({ ...ClientDetail, pin: e.target.value }))}/></Col></Form.Group>
            <Link>if You Already Register</Link>
            <Col xs="auto"><Form.Check type="checkbox" id="autoSizingCheck" column="sm" className="mb-2" label="Remember me"/></Col>
            <div className="d-grid gap-1">
            <Button variant="primary" size="sm" class="button" onClick={()=>RegData()}>Register</Button></div>
            </Form>
            
        </>

    )
}

