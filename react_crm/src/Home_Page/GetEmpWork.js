import { useEffect } from "react";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import {workAssignedEmployees,setClientData } from "../reducer/userSlice";

function GetEmpsWorks(){
   let navigate=useNavigate();
   let dispatch=useDispatch();
   let assignedemp=useSelector((state)=>state.user.AssigndedEmp)
   let empdata=useSelector((state)=>state.user.loggedStatus.clientData )

   
   
    useEffect(()=>{

        if(localStorage.getItem("loggedtoken")){
            axios.post(`https://agaram.academy/api/crm/?request=getClientDetailsByToken&token=${localStorage.getItem("loggedtoken")}`)
            .then(response => {
                console.log(response.data.data.id)
                dispatch(setClientData(response.data.data))
               let ids=response.data.data.id
            Employeeworkdata(ids)
            })

        }else{
            
            navigate("/ClientLogin")
        }
       
},[])
    
    
    const Employeeworkdata=(id)=>{
        let token=localStorage.getItem("loggedtoken")
      
        axios.get(`https://agaram.academy/api/crm/?request=get_employees_with_work&clientid=${id}&token=${token}`).then(function (response) {
            let datas = response
            console.log(datas.data.data)
            let empdata=datas.data.data;
            empdata.map((emp)=>{
                let work=emp.work_list
                dispatch(workAssignedEmployees(work))
            })
           
           
        //    dispatch(workAssignedEmployees(empdata))
        })
        }
    
    return(
        <>
      {/* {JSON.stringify(assignedemp)} */}
        <Container>
            <h1>Employees Details</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                       
                        <th>EmployeeID</th>
                        <th>work</th>
                        <th>workplace</th>
                        
                       
                    </tr>
                </thead>
                <tbody>
      
                   {assignedemp.map((works)=>{
                   
                 return (
                        <tr>
                            {/* {console.log(s)} */}
                          
                            <td>{works.clientid}</td>
                            <td>{works.work}</td>
                            <td>{works.workplace}</td>
                           
                        </tr>)
                })}
               
        
            </tbody>
            </Table>
        </Container>
        </>

    )}
export default GetEmpsWorks;