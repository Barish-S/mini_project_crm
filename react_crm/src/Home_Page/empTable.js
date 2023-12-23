import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';


function EmpTable() {
    let empData = useSelector((state) => state.user.loggedStatus.empData)
    return(
        <Container>
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
                </tr>)
        })}
    </tbody>
</Table>
        </Container>
    )
}

function ClientTable(){
    let cliData = useSelector((state) => state.user.loggedStatus.clientData )
    return(
        <Container>
            <Table striped bordered hover>
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Gender</th>
        </tr>
    </thead>
    <tbody>
        {/* {JSON.stringify(globeData)} */}
        {cliData.map((detail) => {
            return (
                <tr>
                    <td>{detail.name}</td>
                    <td>{detail.email}</td>
                    <td>{detail.phone}</td>
                    <td>{detail.address}</td>
                    <td>{detail.gender}</td>
                </tr>)
        })}
    </tbody>
</Table>
        </Container>
    )
}

export {EmpTable,ClientTable}