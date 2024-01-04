import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Table } from 'react-bootstrap';
import {setEmpclients,setEmpData} from "../reducer/userSlice"


function ClientsasgdforEmpID(){

    let dispatch = useDispatch()
    // let EmpId = useSelector((state) => state.user.loggedStatus.empData.id)

    useEffect (()=> {
        
        let token = localStorage.getItem("employeetoken")
        if(localStorage.getItem("employeetoken")){
            axios.post(`https://agaram.academy/api/crm/?request=getEmployeeByToken&token=${token}`).then(function(success){
                console.log(success.data.data)
                dispatch(setEmpData(success.data.data))
                let empid = success.data.data.id
                dataa(empid)
            })
        }
        
    },[])

    let dataa=(Id)=>{

        let token = localStorage.getItem("employeetoken")
        axios.get(`https://agaram.academy/api/crm/?request=fetch_employee_work&emp_id=${Id}&token=${token}`).then(function(response){
            let data = response.data.data
            console.log(data)

            let clients = []
            
            data.map((d)=>{
                clients.push(d)
                dispatch(setEmpclients(clients))
            })  
        })

    }

    
    let {Empclients} = useSelector((state) => state.user)
    console.log(Empclients)

    return(
        <>
            <h2>Welcome</h2>
            {/* {EmpId},{localStorage.getItem("employeetoken")} */}
            <Table>
                 <thead>
                     <th>Client ID</th>
                    <th>Client name</th>
                     <th>Client email</th>
                 </thead>
                 <tbody>
                    {/* {JSON.stringify(Empclients)} */}
                     {
                        Empclients.map((e) => {
                            return(
                                <tr>
                                    <td>{e.client.id}</td>
                                    <td>{e.client.name}</td>
                                    <td>{e.client.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody> 
            </Table>
        </>
    )
}
export default ClientsasgdforEmpID

