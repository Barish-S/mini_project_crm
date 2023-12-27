import { useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch} from "react-redux";
import { setWorkDetails } from '../reducer/userSlice';
import { WorkDetailsTable } from "./empTable";


function ClientWorkDetails(){
    let {clientid}=useParams();
    let dispatch = useDispatch();

   useEffect(()=>{
    axios.post(`http://agaram.academy/api/crm/?request=client_work_list&clientid=${clientid}`).then(function(response){
        console.log(response.data.data)
        dispatch(setWorkDetails(response.data.data))
    })

   },[])
   
    return(
        <>
      
        {/* {JSON.stringify(worklist)} */}
    <WorkDetailsTable/> 


        </>
    )
}

export default ClientWorkDetails;