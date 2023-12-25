import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios'


function removeClient(id) {
    axios.post(`https://agaram.academy/api/crm/?request=remove_client&&${id}`).then(function (response) {

    })
    console.log(id)
}

function removeEmployee(id) {
    axios.post(`https://agaram.academy/api/crm/?request=remove_client&&${id}`).then(function (response) {

    })
}

function EmpTable() {
    let empData = useSelector((state) => state.user.loggedStatus.empData)
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
                    {/* {JSON.stringify(globeData)} */}
                    {empData.map((detail) => {
                        return (
                            <tr>
                                <td>{detail.name}</td>
                                <td>{detail.email}</td>
                                <td>{detail.phone}</td>
                                <td>{detail.address}</td>
                                <td>{detail.education}</td>
                                <td>{detail.workbase}</td>
                                <td>{detail.gender}</td>
                                <td><Button variant="outline-danger" onClick={() => removeEmployee(detail.id)}>Remove Employee</Button></td>
                            </tr>)
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

function ClientTable() {
    let cliData = useSelector((state) => state.user.loggedStatus.clientData)
    return (
        <Container>
            <h1>Clients Details</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {JSON.stringify(globeData)} */}
                    {cliData.map((detail) => {
                        return (
                            <tr>
                                <td>{detail.id}</td>
                                <td>{detail.email}</td>
                                <td>{detail.phone}</td>
                                <td>{detail.address}</td>
                                <td>{detail.gender}</td>
                                <td><Button variant="outline-danger" onClick={() => removeClient(detail.id)}>Remove Client</Button></td>
                            </tr>)
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export { EmpTable, ClientTable }