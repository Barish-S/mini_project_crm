import "../src/login.css"
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setLoggedUser } from './reducer/userSlice';


function NavBar(){
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let Clientlog = () => {

        navigate('/ClientLogin')
    
      };
      let Employeelog = () => {
    
        navigate('/Userlogin')
      };
      let Adminlog = () => {
    
        navigate('/SuperAdminLog')
      };
      let Clientreg = () => {
    
        navigate('/ClientRegister')
      };
      let Userreg = () => {
    
        navigate('/UserReg')
      };
    
      let setUser = () => {
        dispatch(setLoggedUser("Guest"))
        navigate("/adminhome")
      }
    return(
        <>
        <Nav className="justify-content-end" activeKey="/home" style={{ border: "0px solid black", backgroundColor: "rgba(4, 193, 250, 0.732)" }}>
        <Nav.Item>
          <Nav.Link href='/adminhome'>GuestUser</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">contact Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
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
        </>
    )
}

export default NavBar