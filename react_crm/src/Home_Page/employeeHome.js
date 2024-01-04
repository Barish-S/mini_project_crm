import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import './CSS/home.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';  
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from "axios";
import { setLoggedStatus,setEmpData, setClientData, setLoggedUser } from "../reducer/userSlice";

function EmployeeHome() {

    let navigate = useNavigate();
    let dispatch = useDispatch();
    let userStatus = useSelector((state) => state.user.loggedStatus.user)
    let EmpId = useSelector((state) => state.user.loggedStatus.empData.id)
    let data = useSelector((state) => state.user.loggedStatus)

    useEffect(()=>{

        let token = localStorage.getItem("employeetoken")

        if(localStorage.getItem("employeetoken")){
            axios.post(`https://agaram.academy/api/crm/?request=getEmployeeByToken&token=${token}`)
            .then(response=>{
                console.log(response.data.data.id)
                dispatch(setEmpData(response.data.data))
            })
        }
        else{
            navigate("/Userlogin")
        }

    },[])

    function GetWork() {
        navigate("/EmployeeWorkDetail")   
    }

    function Clients(){
        navigate("/assignedclientsforEmp")
    }

    function Logout() {
        dispatch(setLoggedUser(""))
        dispatch(setEmpData([]))
        dispatch(setClientData([]))
        dispatch(setLoggedStatus(""))
        localStorage.removeItem("employeetoken")
        navigate('/')
    }

    return (
        <>
            <Helmet>
            <title>Employee | Home</title>

                <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
            </Helmet>
            <div class="header">
                <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary" style={{ height: "60px", width: "100%" }}>
                    <Container>
                        <Navbar.Brand><h2 style={{ fontSize: "12pt", marginTop: "10px" }}><img style={{ width: "40px", cursor: "pointer", marginRight: "10px" }} src={require("./images/user.png")} class="user-img" />Hi ! {data.empData.name}</h2></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Features" id="basic-nav-dropdown">

                                    <NavDropdown.Item onClick={() => Clients()}> <p>Clients</p></NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => GetWork()}><p>Works</p></NavDropdown.Item>
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
            </div>

        </>
    );
}

export default EmployeeHome