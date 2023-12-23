import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux'
import { updateUserLoginSuccess } from '../reducer/userSlice';
// import "../UserLogin/Userlogin.css"

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
            // for(let i=0;i<userdata.length;i++){
            //     if(userdata[i].email==userLoginData.email && userdata[i].password==userLoginData.password){
            //         alert("login success")
            //         {break;}
            //     }
            //     else{
            //         alert("invalid")
            //     }
            // }

            let filterValue = userdata.filter((u)=>u.email==userLoginData.email && u.password==userLoginData.password)
            // alert("login success")
            
            console.log(filterValue)  

            
    });
        }

    return(
        <>
        {JSON.stringify(userLoginData)}
        
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
            <p class="signin">Don't have an acount ? <a href="#">Signup</a> </p>
        </form>
        </>
    )
}
export default Userlogin;