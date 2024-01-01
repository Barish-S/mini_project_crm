import axios from 'axios';
import "../src/login.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import NavBar from './nav';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
function Sub() {
  let divBackgroundImage = require("../src/divback.jpg")
let navigate=useNavigate()
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


  let logincheck = () => {
   
    axios({
      method: 'post',
      url: 'https://346ecf18-5094-4743-aa32-8c7c55e73246.mock.pstmn.io/newUsers',
      Data: {

        request: "Add New Users",
        name: "beni",
        email: "beni@gmail.com"

      }
    }).then(function (response) {
      console.log(response);
      })};

return(
    <>

<Nav className="justify-content-end" activeKey="/home" style={{border:"0px solid black",backgroundColor:"rgba(4, 193, 250, 0.732)"}}>
        <Nav.Item>
          <Nav.Link href="/adminhome">GuestUser</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#contact">contact Us</Nav.Link>
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
          <span class="card-title">MISSION</span>
          <p class="card-content">
          To utilize our people and innovative technology to provide our clients with field marketing services to drive sales and profits.
          </p>
          <span class="see-more">See More</span>
      </div>
      <div class="date-box">
          <span class="month">SINCE</span>
          <span class="date">1991</span>
      </div>
  </div>
</div>
<div class="parent">
  <div class="card">
      <div class="content-box">
          <span class="card-title">VISION</span>
          <p class="card-content">
          Increasing customer satisfaction, higher productivity and efficiency,and decreasing customer churn rates
          </p>
          <span class="see-more">See More</span>
      </div>
      <div class="date-box">
          <span class="month">SINCE</span>
          <span class="date">1991</span>
      </div>
  </div>
</div>
      
</div>
</div>

   
<div id="about"  class="seconddiv" style={{border:"0px solid black",height:"1000.5px"}}>
 
  <div class="imgs" style={{border:"0px solid black", height:"50%",width:"50%"}}>
 <h1 style={{color:"black"}}></h1>
  </div>
  <div class="imgs" style={{border:"0px solid black", height:"50%",width:"50%"}}>
 
  </div>
  
  {/* <img src={require('../src/crmfeature.jpg')}/> */}
</div>
{/* {thirddiv} */}
<div id="contact"  class="thirddiv" style={{border:"0px solid black",height:"1000.5px"}}>
 
  <div class="imgs" style={{border:"0px solid black", height:"50%",width:"50%"}}>
 <h1 style={{color:"black"}}></h1>
 
 <div class="cards">
    <div class="card red">
        <p class="tip">E-mail</p>
        <p class="second-text">customeresupport@gmil.com</p>
    </div>
    <div class="card blue">
        <p class="tip">Phone</p>
        <p class="second-text">+91 9360588419</p>
    </div>
    <div class="card green">
        <p class="tip">Support</p>
        <p class="second-text"></p>
    </div>
</div>

  </div>
  <div class="imgs" style={{border:"0px solid black", height:"50%",width:"50%"}}>
 
  </div>
  
  {/* <img src={require('../src/crmfeature.jpg')}/> */}
</div>
<div class="fourthdiv">
  <h1>CONTACT US</h1><br></br>
  <span>CRM (Customer Relationship Management) Software helps improve customer satisfaction, develops loyalty, and increases sales.<br></br> By fostering better internal coordination and understanding of customer needs, CRM systems empower businesses to build and nurture lasting relationships that contribute to long-term success.<br></br>

Zoho CRM has become an integral tool for businesses across all industry segments seeking to enhance their customer interactions and streamline operations.<br></br> Its centralized database consolidates customer information and conversations in a unified platform.....</span>
</div>







    </>
  )
}

export default Sub;