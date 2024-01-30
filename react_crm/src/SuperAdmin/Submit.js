import axios from 'axios';
import { setSuperAdminLogin,setLoggedUser, setLoggedData } from "../reducer/userSlice";
import { useSelector, useDispatch } from "react-redux";
import '../SuperAdmin/superLogin.css'
import { useNavigate } from 'react-router';
import NavBar from '../nav';
import { useEffect } from 'react';

function SuperLogin() {

  let navigate = useNavigate();
  const loginData = useSelector((state) => state.user.superAdminLogin)
  let userStatus = useSelector((state) => state.user.loggedStatus.user)
  const dispatch = useDispatch();

  useEffect(()=>{
    if(localStorage.getItem("logStatus")){
      navigate('/adminhome')
    }
  },[])


  const checkLogin = () => {

    let formData = new FormData()
    formData.append("email", loginData.email)
    formData.append("password", loginData.password)
    formData.append("request", "admin_login")


    axios.post('https://barish.pythonanywhere.com/admin_login', formData)
      .then(response => {
        let status = response.data.status
        if (status == "success") {
          dispatch(setLoggedUser("Admin"))
          dispatch(setLoggedData(response.data.data))
          localStorage.setItem("Token",response.data.token)
          localStorage.setItem("logStatus","Admin")

          navigate("/adminhome")
        }
        else {
          alert("Wrong Details")
        }
      })
  };

  return (
    <>
    <NavBar/>
      <div id='body'>

        <form class="form">
          <p class="title">Login </p>
          <p class="message">Signin now and get full access to our app. </p>

          <label>
            <input class="input" onKeyUp={(e) => dispatch(setSuperAdminLogin({ ...loginData, email: e.target.value }))} type="email" placeholder="" required="" />
            <span>Email</span>
          </label>

          <label>
            <input class="input" onKeyUp={(e) => dispatch(setSuperAdminLogin({ ...loginData, password: e.target.value }))} type="password" placeholder="" required="" />
            <span>Password</span>
          </label>

          <button class="submit" type='button' onClick={() => checkLogin()}>Submit</button>
        </form>
      </div>

    </>
  )
}
export default SuperLogin;    