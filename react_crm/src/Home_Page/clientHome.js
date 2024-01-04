import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import './CSS/home.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { setLoggedStatus,setEmpData, setClientData, setLoggedUser} from "../reducer/userSlice";
// import { GetAllEmployees } from "./ApiComponent";

function ClientHome() {

    useEffect(()=>{
        if(!localStorage.getItem("clienttoken")){
            navigate("/ClientLogin")
        }
   },[])  

    let navigate = useNavigate()
    let dispatch = useDispatch();
    let clientId = useSelector((state) => state.user.loggedStatus.clientData.id)
    let data=useSelector((state) => state.user.loggedStatus)
    console.log("name",data)

    function GetWork(){
        
        navigate("/getempswork")
        
        }
 
    function navMainHome() {
        navigate('/')
    }   

    function getallemps(){
        
        navigate("/getallemployees")
    }

    function Logout() {
        dispatch(setLoggedUser(""))
        dispatch(setEmpData([]))
        dispatch(setClientData([]))
        dispatch(setLoggedStatus(""))
        navigate('/')
        localStorage.removeItem("loggedstate")
        localStorage.removeItem("clienttoken")
    }
    
    function addWorkDetail(){
        navigate(`/${clientId}/Workdetails`)
    }

    return (
        <>
            <Helmet>
                <title>Client | Home</title>
                <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
            </Helmet>
            <div class="header">
                <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary" style={{ height: "60px", width: "100%" }}>
                    <Container>
                        <Navbar.Brand><h2 style={{ fontSize: "12pt", marginTop: "10px" }}><img style={{ width: "40px", cursor: "pointer", marginRight: "10px" }} src={require("./images/user.png")} class="user-img" />Hi ! {data.clientData.name}</h2></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Features" id="basic-nav-dropdown">
                                    
                                    <NavDropdown.Item onClick={()=>getallemps()}> <p>Employees</p> </NavDropdown.Item>
                                    <NavDropdown.Item onClick={()=>GetWork()}><p>Works</p></NavDropdown.Item>
                                    <NavDropdown.Item><p href="mailto:barish28@gmail.com">Contact With Admin</p></NavDropdown.Item>
                                </NavDropdown>
                                
                                <Nav.Link id="nav" href="mailto:barish28@gmail.com">Contact.Us</Nav.Link>
                                <Nav.Link onClick={() => Logout()} id="nav">SignOut</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div id="data">
                </div>
                <Button variant="outline-dark" onClick={()=>addWorkDetail()}>Request Work</Button>
            </div>
       
        </>
    );
}  

export default ClientHome