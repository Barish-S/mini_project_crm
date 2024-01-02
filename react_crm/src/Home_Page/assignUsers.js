import { useEffect } from "react";
import { ToAssignEmployees } from "./empTable"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";


function Assign(){
    let navigate=useNavigate()
    let userStatus = useSelector((state) => state.user.loggedStatus.user)

    useEffect(()=>{
        if(localStorage.getItem("logStatus")=="Admin"){
            navigate('/AssignEmployees')
        }else{
            navigate("/")
        }
    },[])

    
    return(
        <>
        <ToAssignEmployees/>

        </>
    )
}

export default Assign;