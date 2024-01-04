import { useEffect } from "react"
import axios from "axios"
import { useSelector,useDispatch } from "react-redux"
import { setEmpData, setEmployeeWorkDetail } from "../reducer/userSlice"
import { Table } from "react-bootstrap"

function EmployeeWorkDetail(){

    let dispatch = useDispatch()

    useEffect(()=> {
        let token = localStorage.getItem("employeetoken")
        if(localStorage.getItem("employeetoken")){
            axios.post(`https://agaram.academy/api/crm/?request=getEmployeeByToken&token=${token}`).then(function(success){
                console.log(success.data.data)
                dispatch(setEmpData(success.data.data))
                let Id = success.data.data.id
                console.log(Id)
                datas(Id)
            })
        }
        
    },[])


    let datas = (Id) => {
      let token = localStorage.getItem("employeetoken")
        axios.get(`https://agaram.academy/api/crm/?request=fetch_employee_work&emp_id=${Id}&token=${token}`).then(function(success){
            console.log(success.data.data)
            dispatch(setEmployeeWorkDetail(success.data.data))
        })
    }

    let {EmployeeWorkDetail} = useSelector((state) => state.user)
 
    return(
        <>
            <Table>
                <thead>
                    <tr>
                        <th>ClientId</th>
                        <th>Assigned work</th>
                        <th>Workplace</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {JSON.stringify(EmployeeWorkDetail)} */}
                        {
                            EmployeeWorkDetail.map((e)=>{
                               return(
                                <tr>
                                    <td>{e.id}</td>
                                    <td>{e.work}</td>
                                    <td>{e.workplace}</td>
                                </tr>
                               )
                            })
                        }
                   
                </tbody>
            </Table>
        </>
    )
}

export default EmployeeWorkDetail