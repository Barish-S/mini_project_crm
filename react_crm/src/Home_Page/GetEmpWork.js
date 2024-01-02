import { useEffect } from "react";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setEmpData, setLoggedStatus, setClientData,setAssignedperson,workAssignedEmployees } from "../reducer/userSlice";

function GetEmpsWorks(){
   let navigate=useNavigate();
   let dispatch=useDispatch();
   let assignedemp=useSelector((state)=>state.user.AssigndedEmp)
    useEffect(()=>{

        if(localStorage.getItem("loggedstate")=="client"){

            Employeeworkdata()

        }else{
            
            navigate("/ClientLogin")
        }
       
},[])
    
    
    const Employeeworkdata=()=>{
        axios.get(`https://agaram.academy/api/crm/?request=get_employees_with_work&clientid=${5}`).then(function (response) {
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
      
                   {assignedemp.map((s)=>{
                   
                 return (
                        <tr>
                            {/* {console.log(s)} */}
                          
                            <td>{s.clientid}</td>
                            <td>{s.work}</td>
                            <td>{s.workplace}</td>
                           
                        </tr>)
                })}
               
        
            </tbody>
            </Table>
        </Container>
        </>

    )}
export default GetEmpsWorks;