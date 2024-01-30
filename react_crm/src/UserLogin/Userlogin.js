import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux'
import { updateUserLoginSuccess,setLoggedUser,setEmpData } from '../reducer/userSlice';
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
        formData.append("request","user_login")


        axios.post("https://barish.pythonanywhere.com/Employee_Login",formData)
        .then(response=>{
            console.log(response)
            let token=response.data.data.auth_token
            localStorage.setItem("token",token)
            let employeeData = response.data
            console.log(employeeData)
            if(employeeData.status=="success"){
                dispatch(setLoggedUser("Employee"))
                dispatch(setEmpData(employeeData.data))
                alert("success")
                navigate('/EmployeeHome')
            }else{
                alert("failed")
            }
        
    });
        }
    return(
        <>
        <NavBar/>
        <div id='body'>
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
        </div>
        </>
    )
}
export default Userlogin;