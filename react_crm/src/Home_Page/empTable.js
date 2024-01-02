import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { setEmpData } from "../reducer/userSlice";
import { useState } from 'react';


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

export {WorkDetailsTable, ToAssignEmployees }