import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import './CSS/home.css'
import './CSS/menu.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import moment from 'moment'
import { setLoggedStatus, setLoggedData, setEmpData, setClientData, setLoggedUser } from "../reducer/userSlice";

function Home() {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let globeStatus = useSelector((state) => state.user.loggedStatus.status)
    let userStatus = useSelector((state) => state.user.loggedStatus.user)
    let EmpId = useSelector((state) => state.user.loggedStatus.empData.id)
    let data = useSelector((state) => state.user.loggedStatus)

    let time = moment().diff('2000-10-28', 'years')


    function GetWork() {
        navigate('/Get-Work')
    }

    function navMainHome() {
        navigate('/')
    }

    function addWorkDetail() {
        navigate('/workdetails')
    }

    function navClientFeature() {
        navigate('/Client-List')
        // dispatch(setLoggedUser("Admin"))

    }

    function navEmployeeFeature() {
        // dispatch(setLoggedUser("Admin"))
        navigate('/Employee-List')
    }

    function Logout() {
        dispatch(setLoggedUser(""))
        dispatch(setEmpData([]))
        dispatch(setClientData([]))
        dispatch(setLoggedStatus(""))
        localStorage.removeItem("logStatus")
        // dispatch(setLoggedStatus(true))
        navigate('/')
    }

    useEffect(() => {
        if (localStorage.getItem("logStatus") == "Admin") {
            navigate('/adminhome')
        } else {
            navigate("/SuperAdminLog")
        }
        // if(userStatus!="Admin"){
        //     navigate('/')
        // }
        // if(globeStatus==false){
        //     dispatch(setLoggedUser("Admin"))
        //     navigate('/adminhome')
        // }

    }, [])

    return (
        <>
            <Helmet>
                <title>Admin | Home</title>


                <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
            </Helmet>
            <div class="header">
                <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary" style={{ height: "60px", width: "100%" }}>
                    <Container>
                        <Navbar.Brand><h2 style={{ fontSize: "12pt", marginTop: "10px" }}><img style={{ width: "40px", cursor: "pointer", marginRight: "10px" }} src={require("./images/user.png")} class="user-img" />Hi ! Admin</h2></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Features" id="basic-nav-dropdown">
                                    <NavDropdown.Item ><p >Dashboard</p></NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => navClientFeature()}> <p>Clients</p></NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => navEmployeeFeature()}> <p>Employees</p> </NavDropdown.Item>
                                    {/* <NavDropdown.Item> <p>Assign Users</p></NavDropdown.Item> */}
                                    {/* <NavDropdown.Item><p>Notifications</p> </NavDropdown.Item> */}
                                </NavDropdown>
                                <Nav.Link onClick={() => navMainHome()} id="nav">Home</Nav.Link>
                                <Nav.Link id="nav" href="mailto:barish28@gmail.com">Contact.Us</Nav.Link>
                                <Nav.Link onClick={() => Logout()} id="nav">SignOut</Nav.Link>


                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div id="data">
                        <nav class="blend">
                            <ul>
                                <li><a href="">Clients</a></li>
                                <li><a href="">Employees</a></li>
                            </ul>
                        </nav>
                </div>
            </div>

        </>
    );
}

export default Home