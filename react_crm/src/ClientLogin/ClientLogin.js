import axios from 'axios';
import { setClientLogin, setLoggedUser,setClientData,setLoggedClientData } from '../reducer/userSlice';
import { useSelector, useDispatch } from "react-redux"
import "../ClientLogin/clientLogin.css"
import { useNavigate } from 'react-router';
import NavBar from '../nav';

function ClientLogin() {
   
    const Navigate = useNavigate()
    const loginData = useSelector((state) => state.user.clientLogin)
    const dispatch = useDispatch()
    const checkclientlogin = () => {

        let formData = new FormData()
        formData.append("email", loginData.email)
        formData.append("password", loginData.password)
        formData.append("request", "client_login")


        axios.post('https://barish.pythonanywhere.com/Client_Login', formData)
            .then(response => {
                console.log(response)
                let status = response.data.status
                let data = response.data.data
                if (status == "success") {
                    dispatch(setLoggedUser("Client"))
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