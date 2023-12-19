import axios from 'axios';
import "./Homepage/home.css"
import {Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';

function Sub(){
  
  let navigate = useNavigate();
  let Clientlog =()=> {
     
    navigate('/ClientLogin')
    
  };
  let Employeelog =()=> {
     
    navigate('/Userlogin')
  };
  let Adminlog =()=> {
     
    navigate('/SuperAdminLog')
  };
  let Clientreg =()=> {
     
    navigate('/ClientRegister')
  };
  let Userreg =()=> {
     
    navigate('/UserReg')
  };


let logincheck=()=>{ 
   
    axios({
      method: 'post',
      url: 'https://346ecf18-5094-4743-aa32-8c7c55e73246.mock.pstmn.io/newUsers',
      Data :{

        request:"Add New Users",
        name:"beni",
        email:"beni@gmail.com"

      
    }}).then(function(response){
      console.log(response);
      })};

return(
    <>
    <h1>welcome</h1>
  

  <nav>
        <ul>

        <li>
            <a href="#">SignIn ▾</a>
            <ul class="dropdown">
                <li><a onClick={Clientlog}>clientlogin</a></li>
                <li><a onClick={Employeelog}>Employees</a></li>
                <li><a onClick={Adminlog}>Admin</a></li>
                
            </ul>
            
        </li>
        <li>
            <a href="#">SignUp ▾</a>
            <ul class="dropdown">
               
                 <li><a onClick={Clientreg}>client</a></li>
                <li><a onClick={Userreg}>Employees</a></li>
               
            </ul>
            
        </li>
        
        </ul>
    </nav>
   
  
    </>
)
}

export default Sub;