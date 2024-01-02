import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { setEmpData, setLoggedStatus, setClientData,setAssignedperson,workAssignedEmployees } from "../reducer/userSlice";
import { useState } from 'react';

function GetAllEmployees(){
    let id=localStorage.getItem("clientid")
    let dispatch=useDispatch()
    let navigate=useNavigate()
    let assignedemp=useSelector((state)=>state.user.AssigndedEmp)
    let statusi=useSelector((state)=>state.user.loggedStatus.user)

    useEffect(()=>{

        if(localStorage.getItem("loggedstate")=="client"){

            Employeedata()

        }else{
            
            navigate("/ClientLogin")
        }
       
},[])


const Employeedata=()=>{
    axios.get(`https://agaram.academy/api/crm/?request=get_employees_with_work&clientid=${5}`).then(function (response) {
        let datas = response
        console.log(datas.data.data)
        let empdata=datas.data.data;

       dispatch(workAssignedEmployees(empdata))})
    }
   

  
    return(
        <>
        {JSON.stringify(statusi)}
        {/* {datas} */}
        {/* {JSON.stringify(assignedemp)} */}
        {/* {JSON.stringify(data.id)} */}
         <Container>
            <h1>Employees Details</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Education</th>
                        <th>Work Base</th>
                        <th>Gender</th>
                       
                    </tr>
                </thead>
                <tbody>
               {assignedemp.map((detail) => {
                        return (
                            <tr>
                                <td>{detail.name}</td>
                                <td>{detail.email}</td>
                                <td>{detail.phone}</td>
                                <td>{detail.address}</td>
                                <td>{detail.education}</td>
                                <td>{detail.workbase}</td>
                                <td>{detail.gender}</td>
                            </tr>)
                    })}
                </tbody>
            </Table>
        </Container>
        </>
    )
}

export default GetAllEmployees;


