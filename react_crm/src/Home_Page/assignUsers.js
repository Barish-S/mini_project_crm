import { ToAssignEmployees } from "./empTable"
import { useParams } from "react-router";


function Assign(){
    let {workid}=useParams();
    
    return(
        <>
     
        <ToAssignEmployees workids={workid}/>
       
        </>
    )
}

export default Assign;