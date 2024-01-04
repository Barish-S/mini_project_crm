import './CSS/home.css'
import { useDispatch } from "react-redux";
import axios from "axios";
import { setLoggedStatus, setLoggedData, setEmpData, setClientData} from "../reducer/userSlice";
import { useNavigate } from 'react-router';


function GetAllEmployees() {
    let dispatch=useDispatch()
    axios.get("https://agaram.academy/api/crm/?request=all_employees").then(function (response) {
        let datas = response.data.data
        dispatch(setLoggedStatus("Employees"))
        dispatch(setEmpData(datas))
    })
}
function GetAllClients() {
    let navigate=useNavigate()
    let dispatch=useDispatch()
    axios.get("https://agaram.academy/api/crm/?request=all_clients").then(function (response) {
        let datas = response.data.data
        dispatch(setLoggedStatus("Client"))
        dispatch(setClientData(datas))
        
    })
}
function ApiReturn() {
    let dispatch = useDispatch();
    axios.get("http://agaram.academy/api/action.php?request=getAllMembers").then(function (response) {
        let datas = response.data.data
        console.log(datas)
        dispatch(setLoggedStatus("Dashboard"))
        dispatch(setLoggedData(datas))
    })
}

function RemoveClient(id) {
    axios.post(`https://agaram.academy/api/crm/?request=delete_client&clientid=${id}`).then(function (response) {
        console.log(response)
    })
    console.log(id)
}

function RemoveEmployee(id) {
    axios.post(`https://agaram.academy/api/crm/?request=delete_employee&employeeid=${id}`).then(function (response) {
        console.log(response)
    })
}

export {ApiReturn,RemoveClient,RemoveEmployee,GetAllEmployees,GetAllClients}