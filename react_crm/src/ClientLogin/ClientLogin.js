import axios from 'axios';
import { setClientLogin, setLoggedUser } from '../reducer/userSlice';
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

        axios.post('https://agaram.academy/api/crm/?request=client_login', formData)
            .then(response => {
                console.log(response.data.data.id)
                let status = response.data.status
                if (status == "success") {
                    dispatch(setLoggedUser("Client"))
                    localStorage.setItem("clientid",response.data.data.id)
                    Navigate("/adminhome")
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