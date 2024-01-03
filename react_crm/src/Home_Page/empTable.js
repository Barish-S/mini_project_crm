import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { setEmpData, setLoggedStatus, setClientData,setAssignedperson } from "../reducer/userSlice";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';



function WorkDetailsTable() {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    

    let workDetailsData = useSelector((state) => state.user.WorkDetails)
    let AddEmployessToClient=(id)=>{
        axios.get("https://agaram.academy/api/crm/?request=all_employees").then(function (response) {
            let datas = response.data.data
        console.log(datas)
        dispatch(setEmpData(datas))})
        navigate(`/${id}/AssignEmployees`)
    }

    let TestAssign=(id)=>{
        
        axios.get(`https://agaram.academy/api/crm/?request=get_employees_with_work&clientid=${id}`).then(function (response) {
            let datas = response
        console.log(datas.data.data)
        dispatch(setAssignedperson(datas.data.data))
        navigate(`/clientWorkdetails/${id}/assignedPersons`)

      })
    }

    return (
        <Container>
            <Table striped bordered hover>
    <thead>
        <tr>
            <th>Id</th>
            <th>clientId</th>
            <th>work</th>
            <th>workplace</th>
            <th>AssignEmployees</th>
            <th>Assigned persons</th>
        </tr>
    </thead>
    <tbody>
        {/* {JSON.stringify(workDetailsData)} */}
        {workDetailsData.map((workdetail) => {
            return (
                <tr>
                    <td>{workdetail.id}</td>
                    <td>{workdetail.clientid}</td>
                    <td>{workdetail.work}</td>
                    <td>{workdetail.workplace}</td>
                    <td><Button type='button' variant="dark" onClick={()=>AddEmployessToClient(workdetail.id)}>Assign</Button></td>
                    <td><Button type='button' variant="outline-dark" onClick={()=>TestAssign(workdetail.clientid)}>Assigned persons</Button></td>
                </tr>)
        })}
    </tbody>
</Table>

        </Container>
    )
}

function ToAssignEmployees(props){

    let navigate=useNavigate()
    let empssData = useSelector((state) => state.user.loggedStatus.empData)
    
    let [assignedEmployees,setAssignedEmployees]=useState([])
    let assignemployees=(id)=>{
      
        setAssignedEmployees([...assignedEmployees,id])
        for (let a of assignedEmployees){
           if(a==id){
        //   console.log(id)
      let  assigEmployees=assignedEmployees.filter(item=>item!==id)
            // console.log(assigEmployees)
            setAssignedEmployees(assigEmployees)
           }
        }
       
    }

let assignemps=()=>{
    let formData = new FormData()
        formData.append("ids",assignedEmployees)
        formData.append("workid",props.workids)
    axios.post(`https://agaram.academy/api/crm/?request=assign_employees`,formData).then(function (response) {
        let datas = response.data
        if(datas.status=="success"){
            alert("Successfully Assigned")
            navigate("/Client-List")
        }
        console.log(datas)
    })}



    let [search,setSearch]=useState("")

    return (
        <>
          
        <Container>
            <h1>List Of Employees</h1>
        <InputGroup className="mb-3">
        <Form.Control
        onChange={(e)=>setSearch(e.target.value)}
          placeholder="Search By Work"
        />
      </InputGroup>
            <Table striped bordered hover>
    <thead>
        <tr>
            <th>select</th>
            <th>id</th>
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
        {/* {JSON.stringify(empssData)} */}
     
         {empssData.filter((detail) => {
            return search.toLowerCase()===''?detail:detail.workbase.toLowerCase().includes(search);}).map((detail)=>(
                <tr key={detail.id}>
                    <td><InputGroup.Checkbox aria-label="Checkbox for following text input" onClick={()=>assignemployees(detail.id)}/></td>
                    <td>{detail.id}</td>
                    <td>{detail.name}</td>
                    <td>{detail.email}</td>
                    <td>{detail.phone}</td>
                    <td>{detail.address}</td>
                    <td>{detail.education}</td>
                    <td>{detail.workbase}</td>
                    <td>{detail.gender}</td>
                </tr>)
        )} 
    </tbody>
</Table>
<Button type='button' variant="dark" onClick={()=>assignemps()}>AssignEmployees</Button>
</Container>
</>
    )
}

function Assignedperdet(){

    let {Assignedperson} = useSelector((state) => state.user)

    

    return(
        <>
           <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>UserID</th>
                        <th>Assigned Users</th>
                        <th>Work assigned for</th>
                    </tr>
                </thead>
                <tbody>
                    {Assignedperson.map((u) => {
                        return(
                            <tr>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>
                                    {u.work_list.map((w) => {
                                        return(
                                            w.work
                                        )
                                    })}
                                </td>
                            </tr>
                    )
                        })}
                </tbody>
           </Table> 
        </>
    )
}

export {WorkDetailsTable,ToAssignEmployees,Assignedperdet}



