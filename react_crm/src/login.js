import axios from 'axios';
import "./Homepage/home.css"
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
function Submit(){
  
  let navigate = useNavigate();
  let handleClick =()=> {
     
    navigate('/divert')
  };
  let homeadmin =()=> {
     
    navigate('/homeclient')
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
                <li><a href="#">Admin</a></li>
                <li><a href="#">client</a></li>
                <li><a href="#">Employees</a></li>
               
            </ul>
            
        </li>
        <li>
            <a href="#">SignUp ▾</a>
            <ul class="dropdown">
                <li><a onClick={()=>handleClick()}>Client</a></li>
                <li><a onClick={homeadmin}>user</a></li>
                
            </ul>
            
        </li>
        
        </ul>
    </nav>
   
  
    </>
)
}

export default Submit;