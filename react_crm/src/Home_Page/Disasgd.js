import { Assignedperdet } from "./empTable"
import { useEffect } from "react"
import { useNavigate } from "react-router"


function Displayassignedper(){
   let navigate=useNavigate()
   useEffect(()=>{
    if(!localStorage.getItem("Token")){
        navigate("/")
    }
   },[])
   
    return(
        <>
        <Assignedperdet/>
        </>
    )
}
export default Displayassignedper
