import React from "react";
import { Helmet } from "react-helmet";
import './CSS/home.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from "axios";
import { setLoggedStatus, setLoggedData } from "../reducer/userSlice";
import Table from 'react-bootstrap/Table';
import Example from "./pieChart";

function Home() {
    let userStatus = useSelector((state) => state.user.loggedStatus.user)
    console.log(userStatus)
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let globeData = useSelector((state) => state.user.loggedStatus.data)
    let globeStatus = useSelector((state) => state.user.loggedStatus.status)



    let table = <Table striped bordered hover>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>
            {/* {JSON.stringify(globeData)} */}
            {globeData.map((detail) => {
                return (
                    <tr>
                        <td>{detail.name}</td>
                        <td>{detail.email}</td>
                        <td>{detail.phone}</td>
                        <td>{detail.address}</td>
                    </tr>)
            })}
        </tbody>
    </Table>

    function getAllEmployees(){
        axios.get("http://agaram.academy/api/action.php?request=getAllMembers").then(function (response) {
            let datas = response.data.data
            console.log(datas)

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
    return (
        <>
            <Helmet>
                {userStatus == "Admin" ? <title>Admin | Home</title> : null}
                {userStatus == "Employee" ? <title>Employee | Home</title> : null}
                {userStatus == "Client" ? <title>Client | Home</title> : null}

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
                                    {userStatus == "Admin" || userStatus == "Employee" ? <NavDropdown.Item> <p>Clients</p></NavDropdown.Item> : null}
                                    {userStatus == "Admin" || userStatus == "Client" ? <NavDropdown.Item onClick={()=>getAllEmployees()}> <p>Employees</p> </NavDropdown.Item> : null}
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

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div id="data">
                    {globeStatus == "Dashboard" ? <Example/> : null}
                </div>
                {/* <div class="side-nav">
                    <div class="user">
                        <img src={require("./images/user.png")} class="user-img" />
                        <div>
                            <h2>Barish</h2>
                            <p>barishs28@gmail.com</p>
                        </div>
                        <img src={require("./images/star.png")} class="star-img" />
                    </div>
                    <ul>
                        {userStatus == "Admin" ? <li><img src={require("./images/dashboard.png")} /><p>Dashboard</p></li> : null}
                        <li><img src={require("./images/reports.png")} /><p>Reports</p></li>
                        {userStatus == "Admin" || userStatus == "Employee" ? <li><img src={require("./images/projects.png")} /><p>Clients</p></li> : null}
                        {userStatus == "Admin" || userStatus == "Client" ? <li><img src={require("./images/members.png")} /><p>Employees</p></li> : null}
                        {userStatus == "Admin" || userStatus == "Employee" ? <li><img src={require("./images/rewards.png")} /><p>Works</p></li> : null}
                        {userStatus == "Admin" ? <li><img src={require("./images/messages.png")} /><p>Messages</p></li> : null}
                        {userStatus == "Admin" ? <li><img src={require("./images/setting.png")} /><p>Assign Users</p></li> : null}
                        {userStatus == "Employee" || userStatus == "Client" ? <li><img src={require("./images/messages.png")} /><p>Notifications</p></li> : null}
                        {userStatus == "Employee" || userStatus == "Client" ? <li><img src={require("./images/setting.png")} /><p>Contact With Admin</p></li> : null}
                    </ul>
                    <ul>
                        <li><img src={require("./images/logout.png")} /><p>Logout</p></li>
                    </ul>
                </div> */}
            </div>
        </>
    );
}

export default Home