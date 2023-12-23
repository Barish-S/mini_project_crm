import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux'
import updateUserLoginSuccess from '../reducer/userSlice';

function Userlogin(){

    const userLoginData = useSelector((state)=>state.user.userloginsuccess)
    const dispatch = useDispatch()

    const checkuserlogin = () =>{
        axios({
            method : 'get',
            url : 'https://346ecf18-5094-4743-aa32-8c7c55e73246.mock.pstmn.io/GetEmployees',
            Data : {
                request : "Get_All_Employee"
            }
        }).then(function(response){
            
            let userdata = response.data
            console.log(userdata)

            let filterValue = userdata.filter((u)=>u.email==userLoginData.email && u.password==userLoginData.password)
            alert("login success")
            console.log(filterValue)

    });
    }

    return(
        <>
        <h2>Login</h2>
        <label>Email</label>
        <input type="email" onKeyUp={(e)=>dispatch(updateUserLoginSuccess({...userLoginData,email:e.target.value}))}></input>

        <label>Password</label>
        <input type="password" onKeyUp={(e)=>dispatch(updateUserLoginSuccess({...userLoginData,password:e.target.value}))}></input>

        <button type="button" onClick={()=>checkuserlogin()}>Submit</button>
        </>
    )
}
export default Userlogin;