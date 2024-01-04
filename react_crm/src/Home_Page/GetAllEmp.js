import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import axios from "axios";
import {setClientData,workAssignedEmployees } from "../reducer/userSlice";

function GetAllEmployees(){
    let id=localStorage.getItem("clientid")
    let dispatch=useDispatch()
    let navigate=useNavigate()
    let assignedemp=useSelector((state)=>state.user.AssigndedEmp)
    let clientdata= useSelector((state) => state.user.loggedStatus.clientData)

    useEffect(()=>{

        if(localStorage.getItem("clienttoken")){
            axios.post(`https://agaram.academy/api/crm/?request=getClientDetailsByToken&token=${localStorage.getItem("clienttoken")}`)
            .then(response => {
                console.log(response.data.data.id)
                dispatch(setClientData(response.data.data))
               let ids=response.data.data.id
                Employeedata(ids) 
            })
           

        }else{
            
            navigate("/ClientLogin")
        }
       
},[])


const Employeedata=(idss)=>{
    let token=localStorage.getItem("clienttoken")
    axios.get(`https://agaram.academy/api/crm/?request=get_employees_with_work&clientid=${idss}&token=${localStorage.getItem("clienttoken")}`).then( (response)=> {
        let datas = response
        console.log(datas.data.data)
        let empdata=datas.data.data;

       dispatch(workAssignedEmployees(empdata))})
    }
   

  
    return(
        <>
        {clientdata.id}
        {/* {JSON.stringify(statusi)} */}
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


