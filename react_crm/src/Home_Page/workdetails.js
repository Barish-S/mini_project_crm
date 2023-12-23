import { useDispatch ,useSelector} from "react-redux";
import axios from 'axios';
import { setWorkDetails } from '../reducer/userSlice';




function Workdetails(){
    const dispatch=useDispatch();
    const workdetailsData=useSelector((state)=>state.user.WorkDetails)
    let formData= new FormData()
    formData.append("clientId",workdetailsData.clientid)
    formData.append("work",workdetailsData.work)
    formData.append("workdays",workdetailsData.workdays)
    formData.append("workplace",workdetailsData.workplace)
    let workdetailsget=()=>{
        axios.post('https://agaram.academy/api/crm/?request=work_details',formData)
        .then(response=>{
           console.log(response)})
    }
    return(
        <>
        {JSON.stringify(workdetailsData)}
        <h1>work</h1>
        <form class="form">
    <p class="title">Login </p>
    <p class="message">Signin now and get full access to our app. </p>
      
    <label>
        <input class="input" onChange={(e)=>dispatch(setWorkDetails({...workdetailsData,clientid:e.target.value}))} type="number" placeholder="" required=""/>
        <span>clientId</span>
    </label> 
    <label>
        <input class="input" onKeyUp={(e)=>dispatch(setWorkDetails({...workdetailsData,work:e.target.value}))} type="text" placeholder="" required=""/>
        <span>work</span>
    </label> 
        
    <label>
        <input class="input" onKeyUp={(e)=>dispatch(setWorkDetails({...workdetailsData,workdays:e.target.value}))} type="number" placeholder="" required=""/>
        <span>workdays</span>
    </label>
    <label>
        <input class="input" onKeyUp={(e)=>dispatch(setWorkDetails({...workdetailsData,workplace:e.target.value}))} type="text" placeholder="" required=""/>
        <span>workplace</span>
    </label>
  
    <button class="submit" type='button' onClick={()=>workdetailsget()}>Submit</button>
    <p class="signin">Don't have an acount ? <a href="#">Signup</a> </p>
</form>
        </>
    )
}

export default Workdetails;