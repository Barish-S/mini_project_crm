import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { setEmpData, setLoggedStatus, setClientData } from "../reducer/userSlice";
import { RemoveClient,RemoveEmployee } from './ApiComponent';
import { useState } from 'react';


// function RemoveClient(id) {
//     axios.post(`https://agaram.academy/api/crm/?request=delete_client&clientid=${id}`).then(function (response) {
//         console.log(response)
//     })
//     console.log(id)
// }

// function RemoveEmployee(id) {
//     axios.post(`https://agaram.academy/api/crm/?request=delete_employee&employeeid=${id}`).then(function (response) {
//         console.log(response)
//     })
// }

function EmpTable() {


    let empsData = useSelector((state) => state.user.loggedStatus.empData)

    return (
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
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {JSON.stringify(empData)} */}
                    {empsData.map((detail) => {
                        return (
                            <tr>
                                <td>{detail.name}</td>
                                <td>{detail.email}</td>
                                <td>{detail.phone}</td>
                                <td>{detail.address}</td>
                                <td>{detail.education}</td>
                                <td>{detail.workbase}</td>
                                <td>{detail.gender}</td>
                                <td><Button variant="outline-danger" onClick={()=>RemoveEmployee(detail.id)}>Remove Employee</Button></td>
                            </tr>)
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

function ClientTable() {
    let navigate = useNavigate();
    let cliData = useSelector((state) => state.user.loggedStatus.clientData)

    let workdetails = (clientid) => {


        navigate(`/clientWorkdetails/${clientid}`)
    }
    return (
        <Container>
            <h1>Clients Details</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ClientID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>workdetails</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {JSON.stringify(globeData)} */}
                    {cliData.map((detail) => {
                        return (
                            <tr>
                                <td>{detail.id}</td>
                                <td>{detail.name}</td>
                                <td>{detail.email}</td>
                                <td>{detail.phone}</td>
                                <td>{detail.address}</td>
                                <td>{detail.gender}</td>
                                <td><Button variant="outline-dark" onClick={() => workdetails(detail.id)}>WorkDetails</Button></td>
                                <td><Button variant="outline-danger" onClick={()=>RemoveClient(detail.id)}>Remove Client</Button></td>
                            </tr>)
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

function WorkDetailsTable() {
    let navigate = useNavigate();
    let dispatch = useDispatch();


    let workDetailsData = useSelector((state) => state.user.WorkDetails)
    let AddEmployessToClient = () => {
        axios.get("https://agaram.academy/api/crm/?request=all_employees").then(function (response) {
            let datas = response.data.data
            console.log(datas)
            dispatch(setEmpData(datas))
        })
        navigate("/AssignEmployees")
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
                                <td><Button variant="outline-success" onClick={() => AddEmployessToClient()}>Assign</Button></td>

                            </tr>)
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

function ToAssignEmployees() {

    let empssData = useSelector((state) => state.user.loggedStatus.empData)

    let [assignedEmployees, setAssignedEmployees] = useState([])
    let assignemployees = (id) => {

        setAssignedEmployees([...assignedEmployees, id])
    }

console.log(assignedEmployees) 

    return (
        <>
            <Container>
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

                        {empssData.map((detail) => {
                            return (
                                <tr>
                                    <td><InputGroup.Checkbox aria-label="Checkbox for following text input" onClick={() => assignemployees(detail.id)} /></td>
                                    <td>{detail.id}</td>
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

export { EmpTable, ClientTable, WorkDetailsTable, ToAssignEmployees }