import axios from 'axios';
import { setClientLogin, setLoggedUser,setClientData,setLoggedClientData } from '../reducer/userSlice';
import { useSelector, useDispatch } from "react-redux"
import "../ClientLogin/clientLogin.css"
import { useNavigate } from 'react-router';
import NavBar from '../nav';
import { initializeApp } from "firebase/app";

function ClientLogin() {
    const firebaseConfig = {

        apiKey: "AIzaSyCyHb7gFP6fB9G__j-ZQ_o1RLI0CU0QFMI",
      
        authDomain: "loginform-f3c89.firebaseapp.com",
      
        databaseURL: "https://loginform-f3c89-default-rtdb.firebaseio.com",
      
        projectId: "loginform-f3c89",
      
        storageBucket: "loginform-f3c89.appspot.com",
      
        messagingSenderId: "881392344271",
      
        appId: "1:881392344271:web:7a663497aa05d95f2aabba"
      
      };
      
      
    const Navigate = useNavigate()
    const loginData = useSelector((state) => state.user.clientLogin)
    const dispatch = useDispatch()
    const app = initializeApp(firebaseConfig);
    const checkclientlogin = () => {

        let formData = new FormData()
        formData.append("email", loginData.email)
        formData.append("password", loginData.password)

        axios.post('https://agaram.academy/api/crm/?request=client_login', formData)
            .then(response => {
                console.log(response.data.data.id)
                let status = response.data.status
                let data = response.data.data
                if (status == "success") {
                    dispatch(setLoggedUser("Client"))
                    const list = collection(db, 'cities');
                    localStorage.setItem("clientid",response.data.data.id)
                    localStorage.setItem("loggedstate","client")
                    Navigate("/ClientHome")
                }
                else {
                    alert("failed") 
                }
            })
    }


    return (
        <>
            <NavBar/>
            {/* {JSON.stringify(loginData)} */}
            <div id='body'>

                <form class="form">
                    <p class="title">Login </p>
                    <p class="message">Signin now and get full access to our app. </p>

                    <label>
                        <input class="input" onKeyUp={(e) => dispatch(setClientLogin({ ...loginData, email: e.target.value }))} type="email" placeholder="" required="" />
                        <span>Email</span>
                    </label>

                    <label>
                        <input class="input" onKeyUp={(e) => dispatch(setClientLogin({ ...loginData, password: e.target.value }))} type="password" placeholder="" required="" />
                        <span>Password</span>
                    </label>

                    <button class="submit" type='button' onClick={() => checkclientlogin()}>Submit</button>
                    <p class="signin">Don't have an acount ? <a href="/ClientRegister">Signup</a> </p>
                </form>
            </div>
        </>
    )
}
export default ClientLogin; 