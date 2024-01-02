import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux'
import { updateUserLoginSuccess,setLoggedUser,setEmpData ,EmployeeRegisterDetails} from '../reducer/userSlice';
import "../UserLogin/Userlogin.css"
import NavBar from '../nav';
import { Navigate, useNavigate } from 'react-router';


function Userlogin(){

    const userLoginData = useSelector((state)=>state.user.userloginsuccess)
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const checkuserlogin = () =>{
        let formData = new FormData()
        formData.append("email",userLoginData.email)
        formData.append("password",userLoginData.password)

        axios.post("https://agaram.academy/api/crm/?request=employee_login",formData)
        .then(response=>{
            let logindata = response.data
            let employeeData = response.data.data
            console.log(employeeData)
            dispatch(updateUserLoginSuccess(employeeData))
            if(logindata.status=="success"){
                dispatch(setLoggedUser("Employee"))
<<<<<<< HEAD
                dispatch(setEmpData(employeeData.data))
                // alert("success")
=======
                dispatch(setEmpData(employeeData))
                // alert("success")
                localStorage.setItem("loggedstate","Employee")
>>>>>>> 1f281ede0fc9a83c2b19942d6c075f9094b11056
                navigate('/EmployeeHome')
            }else{
                // alert("failed")
                navigate("/Userlogin")
            }
        
    });
        }
    return(
        <>
        <NavBar/>
        {/* {JSON.stringify(userLoginData)} */}
        
        <form class="form">
            <p class="title">Login </p>
            <p class="message">Signin now and get full access to our app. </p>
        
            <label>
                <input class="input" type="email" placeholder="" required="" onKeyUp={(e)=>dispatch(updateUserLoginSuccess({...userLoginData,email:e.target.value}))}></input>
                <span>Email</span>
            </label> 
        
            <label>
                <input class="input" type="password" placeholder="" required="" onKeyUp={(e)=>dispatch(updateUserLoginSuccess({...userLoginData,password:e.target.value}))}></input>
                <span>Password</span>
            </label>
    
            <button class="submit" type="button" onClick={()=>checkuserlogin()}>Submit</button>
            <p class="signin">Don't have an acount ? <a href="/UserReg">Signup</a> </p>
        </form>
        
        </>
    )
}
export default Userlogin;