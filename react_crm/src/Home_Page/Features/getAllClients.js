import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
import { setClientData,setLoggedStatus } from '../../reducer/userSlice';


function ClientTable() {
    let navigate = useNavigate();
    let dispatch=useDispatch()
    let cliData = useSelector((state) => state.user.loggedStatus.clientData)
    let userStatus = useSelector((state) => state.user.loggedStatus.user)


    let workdetails = (clientid) => {
        navigate(`/clientWorkdetails/${clientid}`)
    }

    useEffect(()=>{
        if(localStorage.getItem("logStatus")=="Admin"){
            getAllClients()
            
        }else{
            navigate('/')
        }
        
    },[])


    function getAllClients() {
        axios.get("https://agaram.academy/api/crm/?request=all_clients").then(function (response) {
            let datas = response.data.data
            // dispatch(setLoggedStatus("Client"))
            dispatch(setClientData(datas))
            
        })
    }

    function RemoveClient(id) {
        axios.post(`https://agaram.academy/api/crm/?request=delete_client&clientid=${id}`).then(function (response) {
            getAllClients()
        })
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

export default ClientTable