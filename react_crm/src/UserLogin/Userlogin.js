import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux'
import updateUserLoginSuccess from '../reducer/userSlice';
// import { updateUserLoginSuccess } from '../reducer/userSlice';
// import "../UserLogin/Userlogin.css"

function Userlogin(){

    const userLoginData = useSelector((state)=>state.user.userloginsuccess)
    const dispatch = useDispatch()

    const checkuserlogin = () =>{
        let formData= new FormData()
        formData.append("email",userLoginData.email)
        formData.append("password",userLoginData.password)
        axios({
            method : 'post',
            url : 'https://agaram.academy/api/crm/?request=employee_login',formData,
           
        }).then(function(response){
            
            let userdata = response
            console.log(userdata)
            // for(let i=0;i<userdata.length;i++){
            //     if(userdata[i].email==userLoginData.email && userdata[i].password==userLoginData.password){
            //         alert("login success")
            //         {break;}\
            //     }
            //     else{
            //         alert("invalid")
            //     }
            // }

            // let filterValue = userdata.filter((u)=>u.email==userLoginData.email && u.password==userLoginData.password)
        
            // console.log(filterValue)  

            
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