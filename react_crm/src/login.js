import axios from 'axios';
import "./Homepage/home.css"
import "../src/login.css"
import {Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Sub(){
  let divBackgroundImage=require("../src/divback.jpg")
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

<Nav className="justify-content-end" activeKey="/home" style={{border:"0px solid black",backgroundColor:"rgba(4, 193, 250, 0.732)"}}>
        <Nav.Item>
          <Nav.Link href="/home">GuestUser</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">contact Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          {/* <Nav.Link eventKey="link-2">Enquery</Nav.Link> */}
        </Nav.Item>
        <NavDropdown title="SignIn" id="nav-dropdown">
        <NavDropdown.Item onClick={Adminlog}>Admin</NavDropdown.Item>
        <NavDropdown.Item onClick={Clientlog}>clientlogin</NavDropdown.Item>
        <NavDropdown.Item onClick={Employeelog}>Employees</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="SignUp" id="nav-dropdown">
        <NavDropdown.Item onClick={Clientreg}>client Register</NavDropdown.Item>
        <NavDropdown.Item onClick={Userreg}>Employees Register</NavDropdown.Item>
        </NavDropdown>
</Nav>
<div class="firstdiv" style={{border:"0px solid black",height:"590px",backgroundImage:"../src/divback.jpg",}}>
    <div class="firstdivHalf" style={{border:"0px 0px 0px 0px solid black",width:"40%"}}>
        <h1 class="text" style={{marginRight:"10%",marginTop:"5%",padding:"10%",color:"black"}}>GROW YOUR<br></br>
        
        BRAND WITH<br></br>
        OUR FEATURES</h1>
    </div>
    <div class="firstdivsecondHalf" style={{border:"0px solid black" ,width:"40%"}}>
      {/* <div class="firstOfLeftDiv" style={{border:"1px solid black"}}> */}
     
  <div class="parent">
  <div class="card">
      <div class="content-box">
          <span class="card-title">3D Card</span>
          <p class="card-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          </p>
          <span class="see-more">See More</span>
      </div>
      <div class="date-box">
          <span class="month">DEC</span>
          <span class="date">20</span>
      </div>
  </div>
</div>
<div class="parent">
  <div class="card">
      <div class="content-box">
          <span class="card-title">3D Card</span>
          <p class="card-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          </p>
          <span class="see-more">See More</span>
      </div>
      <div class="date-box">
          <span class="month">DEC</span>
          <span class="date">20</span>
      </div>
  </div>
</div>
      
</div>
</div>
   
<div  class="seconddiv" style={{border:"0px solid black",height:"630.5px",width:"100%"}}>
  <img src={require('../src/crmfeature.jpg')}/>
  <div class="img" style={{}}>
   
  
  </div>

</div>
    </>
)
}

export default Sub;