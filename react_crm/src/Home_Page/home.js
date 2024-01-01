import React from "react";
import { Helmet } from "react-helmet";
import './CSS/home.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import moment from 'moment'
import axios from "axios";
import { setLoggedStatus, setLoggedData, setEmpData, setClientData, setLoggedUser } from "../reducer/userSlice";
import Example from "./pieChart";
import {EmpTable,ClientTable} from "./empTable";
import Workdetails from "./workdetails";

function Home() {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let globeStatus = useSelector((state) => state.user.loggedStatus.status)
    let userStatus = useSelector((state) => state.user.loggedStatus.user)

    let time = moment().diff('2000-10-28', 'years')




    function getAllEmployees() {
        axios.get("https://agaram.academy/api/crm/?request=all_employees").then(function (response) {
            let datas = response.data.data
            dispatch(setLoggedStatus("Employees"))
            dispatch(setEmpData(datas))

        })
    }
    function getAllClients() {
        axios.get("https://agaram.academy/api/crm/?request=all_clients").then(function (response) {
            let datas = response.data.data
            dispatch(setLoggedStatus("Client"))
            dispatch(setClientData(datas))
            
        })
    }

    function ApiReturn() {
        axios.get("http://agaram.academy/api/action.php?request=getAllMembers").then(function (response) {
            let datas = response.data.data
            console.log(datas)
            dispatch(setLoggedStatus("Dashboard"))
            dispatch(setLoggedData(datas))
        })
    }


    function navMainHome() {
        navigate('/')
    }

    function addWorkDetail(){
        navigate("/Workdetails")
    }
    function Logout(){
        dispatch(setLoggedUser(""))
        navigate("/")
    }

    return (
        <>
            <Helmet>
                {userStatus == "Admin" ? <title>Admin | Home</title> : null}
                {userStatus == "Employee" ? <title>Employee | Home</title> : null}
                {userStatus == "Client" ? <title>Client | Home</title> : null}
                {userStatus == "Guest" ? <title>Guest | Home</title> : null}


                <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
            </Helmet>
            <div class="header">
                <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary" style={{ height: "60px", width: "100%" }}>
                    <Container>
                        <Navbar.Brand><h2 style={{ fontSize: "12pt", marginTop: "10px" }}><img style={{ width: "40px", cursor: "pointer", marginRight: "10px" }} src={require("./images/user.png")} class="user-img" />Hi ! Barish</h2></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Features" id="basic-nav-dropdown">
                                    {userStatus == "Admin" ? <NavDropdown.Item ><p onClick={() => ApiReturn()}>Dashboard</p></NavDropdown.Item> : null}
                                    <NavDropdown.Item >
                                        <p>Reports</p>
                                    </NavDropdown.Item>
                                    {userStatus == "Admin" || userStatus == "Employee" ? <NavDropdown.Item onClick={() => getAllClients()}> <p>Clients</p></NavDropdown.Item> : null}
                                    {userStatus == "Admin" || userStatus == "Client" ? <NavDropdown.Item onClick={() => getAllEmployees()}> <p>Employees</p> </NavDropdown.Item> : null}
                                    {userStatus == "Admin" || userStatus == "Employee" ? <NavDropdown.Item><p>Works</p></NavDropdown.Item> : null}
                                    {userStatus == "Admin" ? <NavDropdown.Item><p>Messages</p> </NavDropdown.Item> : null}
                                    {userStatus == "Admin" ? <NavDropdown.Item> <p>Assign Users</p></NavDropdown.Item> : null}
                                    {userStatus == "Employee" || userStatus == "Client" ? <NavDropdown.Item><p>Notifications</p> </NavDropdown.Item> : null}
                                    {userStatus == "Employee" || userStatus == "Client" ? <NavDropdown.Item><p>Contact With Admin</p></NavDropdown.Item> : null}
                                    {userStatus == "Guest" ? <NavDropdown.Divider /> : null}
                                    {userStatus == "Guest" ? <NavDropdown.Item >Please Register</NavDropdown.Item> : null}
                                </NavDropdown>
                                <Nav.Link onClick={() => navMainHome()} id="nav">Home</Nav.Link>
                                <Nav.Link id="nav" href="mailto:barish28@gmail.com">Contact.Us</Nav.Link>
                                <Nav.Link onClick={() => Logout()} id="nav">SignOut</Nav.Link>


                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div id="data">
                    {globeStatus == "Dashboard" ? <Example /> : null}
                    {globeStatus == "Employees" ? <EmpTable /> : null}
                    {globeStatus == "Client" ? <ClientTable /> : null}



                </div>
                <button type="button" onClick={()=>addWorkDetail()}>Request Work</button>
            </div>
           
        </>
    );
}

export default Home