import { useDispatch, useSelector } from "react-redux"
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import { Table } from 'react-bootstrap';
import { useEffect } from "react";
import { setCliAssignforEmp } from "../reducer/userSlice";
import { useNavigate } from "react-router";

function ClientsasgdforEmpID() {

    let navigate=useNavigate()
    let EmpId = useSelector((state) => state.user.userloginsuccess)
    let id = EmpId.id 
    let cliAssignforEmp = useSelector((state)=>state.user.CliAssignforEmp)

    let dispatch = useDispatch()

    useEffect(()=>{
        if(localStorage.getItem("loggedstate")=="Employee"){
            clientassign()
        }
        else{
            navigate("/Userlogin")
        }
    },[])

    const clientassign=()=>{
        axios.get(`https://agaram.academy/api/crm/?request=fetch_employee_work&emp_id=${id}`).then(function (response) { 
        let datas = response.data.data
        console.log(datas)
        let clients = [];
        datas.map((d)=>{
            clients.push(d) 
            
        })
        dispatch(setCliAssignforEmp(clients))
       
        })
    }

    return (
        <>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ClientID</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {JSON.stringify(cliAssignforEmp)} */}
                    {cliAssignforEmp.map((u)=>{
                        return(
                            <tr>
                                <td>{u.client.id}</td>
                                <td>{u.client.name}</td>
                                <td>{u.client.email}</td>
                            </tr>
                        )
                        })}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}
export default ClientsasgdforEmpID