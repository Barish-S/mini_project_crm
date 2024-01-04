import { useDispatch, useSelector } from "react-redux"
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import { Table } from 'react-bootstrap';
import { useEffect } from "react";
import { setEmployeeWorkDetail,setEmpData } from "../reducer/userSlice";
import { useNavigate } from "react-router";

function EmployeeWorkDetail() {
    
    let dispatch = useDispatch()
    let navigate = useNavigate()

    // let EmpId = useSelector((state) => state.user.loggedStatus.empData.id)
    let { EmployeeWorkDetail } = useSelector((state) => state.user)

    useEffect(() => {

        let token = localStorage.getItem("employeetoken")
        if(localStorage.getItem("employeetoken")){
                axios.post(`https://agaram.academy/api/crm/?request=getEmployeeByToken&token=${token}`)
                .then(response=>{
                    console.log(response.data.data.id)
                    dispatch(setEmpData(response.data.data))
                    let empid = response.data.data.id
                    EmployeeWork(empid)
                })
            }
        else{
            navigate("/Userlogin")
        }
        
    }, [])

    let EmployeeWork = (id) => {
        let token = localStorage.getItem("employeetoken")
        axios.get(`https://agaram.academy/api/crm/?request=fetch_employee_work&emp_id=${id}&token=${token}`).then(function (response) {
            let datas = response.data.data
            console.log(datas)
            dispatch(setEmployeeWorkDetail(datas))
        })
    }

    return (
        <>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Client Id</th>
                            <th>Work</th>
                            <th>Work Place</th>
                        </tr>
                    </thead>
                    <tbody>
                        {EmployeeWorkDetail.map((works)=>{
                            return(
                                <tr>
                                    <td>{works.clientid}</td>
                                    <td>{works.work}</td>
                                    <td>{works.workplace}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}
export default EmployeeWorkDetail