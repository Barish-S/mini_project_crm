import { useDispatch,useSelector } from 'react-redux'
import { setWorkDetails } from '../../reducer/userSlice';
import Container from 'react-bootstrap/Container';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';


function WorkDetails(){
    let dispatch=useDispatch();
    let detail=useSelector((state)=>state.user.WorkDetails)

    useEffect(()=>{
        GetWorkDetails()
    },[])

    function GetWorkDetails(){
        axios.get("https://agaram.academy/api/crm/?request=workassign_details").then(function(response){
            // let data=response.data.data
            console.log(response)
            // dispatch(setWorkDetails(data))
        })
    }

    return (
        <Container>
            <h1>Work Details</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ClientID</th>
                        <th>Work</th>
                        <th>Work Place</th>
                        <th>Work Days</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {JSON.stringify(globeData)} */}
                    {detail.map((detail) => {
                        return (
                            <tr>
                                <td>{detail.id}</td>
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
export default WorkDetails