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
import { setLoggedStatus, setLoggedData, setEmpData, setClientData, setLoggedUser } from "../reducer/userSlice";
import { GetAllClients } from "./ApiComponent";
function EmployeeHome() {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let userStatus = useSelector((state) => state.user.loggedStatus.user)
    let EmpId = useSelector((state) => state.user.loggedStatus.empData.id)
    let data = useSelector((state) => state.user.loggedStatus)

    useEffect(()=>{
        const headers={'Authorization': `Bearer ${localStorage.getItem('token')}`}
        axios.get("https://barish.pythonanywhere.com/allusers",{headers}).then(function(response){
            console.log(response)
        })
    },[])


    function GetWork() {
        axios.get(`https://agaram.academy/api/crm/?request=fetch_employee_work&emp_id=${EmpId}`).then(function (response) {
            console.log(response)
        })
    }

    function Logout() {
        dispatch(setLoggedUser(""))
        dispatch(setEmpData([]))
        dispatch(setClientData([]))
        dispatch(setLoggedStatus(""))
        navigate('/')
    }

    return (
        <>
            <Helmet>
                {userStatus == "Employee" ? <title>Employee | Home</title> : null}

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

                                    <NavDropdown.Item onClick={() => GetAllClients()}> <p>Clients</p></NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => GetWork()}><p>Works</p></NavDropdown.Item>
                                    <NavDropdown.Item><p>Contact With Admin</p></NavDropdown.Item>
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