import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
import { setLoggedStatus,setEmpData } from '../../reducer/userSlice';
import { useNavigate } from 'react-router';


function EmpTable() {

    let empsData = useSelector((state) => state.user.loggedStatus.empData)
    let userStatus = useSelector((state) => state.user.loggedStatus.user)
    let navigate=useNavigate()
    let dispatch=useDispatch()

    useEffect(()=>{
        if(localStorage.getItem("logStatus")=="Admin"){
            getAllEmployees()
        }else{
            navigate('/')
        }
    },[])

    function getAllEmployees() {
        axios.get("https://agaram.academy/api/crm/?request=all_employees").then(function (response) {
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

export default EmpTable