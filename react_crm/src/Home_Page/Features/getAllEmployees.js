import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { setLoggedStatus, setEmpData } from '../../reducer/userSlice';
import { useNavigate } from 'react-router';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function EmpTable() {

    let empsData = useSelector((state) => state.user.loggedStatus.empData)
    let userStatus = useSelector((state) => state.user.loggedStatus.user)
    let navigate = useNavigate()
    let dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem("Token")) {
            getAllEmployees()
        } else {
            navigate('/')
        }
    }, [])

    function getAllEmployees() {
        let token = localStorage.getItem("Token")
        axios.get(`https://agaram.academy/api/crm/?request=all_employees&token=${token}`).then(function (response) {
            let datas = response.data.data
            dispatch(setLoggedStatus("Employees"))
            dispatch(setEmpData(datas))
        })
    }

    function RemoveEmployee(id) {
        axios.post(`https://agaram.academy/api/crm/?request=delete_employee&employeeid=${id}`).then(function (response) {
            getAllEmployees()
        })
    }

    let [search, setSearch] = useState("")
    return (
        <Container>
            <h1>Employees Details</h1>
            <InputGroup className="mb-3">
                <Form.Control
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search"
                />
            </InputGroup>
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
                    {empsData.filter((detail) => {
                        return search.toLowerCase() === "" ? detail : detail.name.toLowerCase().includes(search);
                    }).map((detail) => (
                        <tr key={detail.id}>
                            <td>{detail.name}</td>
                            <td>{detail.email}</td>
                            <td>{detail.phone}</td>
                            <td>{detail.address}</td>
                            <td>{detail.education}</td>
                            <td>{detail.workbase}</td>
                            <td>{detail.gender}</td>
                            <td><Button variant="outline-danger" onClick={() => RemoveEmployee(detail.id)}>Remove Employee</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default EmpTable