import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import './CSS/home.css'
import './CSS/menu.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from 'moment'
import Chart from './piechart'
import { setLoggedStatus,setEmpData, setClientData, setLoggedUser } from "../reducer/userSlice";


function Home() {
    let navigate = useNavigate();
    let dispatch = useDispatch();
   

    function navMainHome() {
        navigate('/')
    }

   
    function navClientFeature() {
        navigate('/Client-List')
        // dispatch(setLoggedUser("Admin"))

    }

    function Piechart(){
        navigate('/Chart')
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
        localStorage.removeItem("Token")
        // dispatch(setLoggedStatus(true))
        navigate('/')
    }

    useEffect(() => {
        if (localStorage.getItem("logStatus") == "Admin") {
            navigate('/adminhome')
        } else {
            navigate("/SuperAdminLog")
        }
      

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
                             
                                <Nav.Link onClick={() => navMainHome()} id="nav">Home</Nav.Link>
                                <Nav.Link onClick={() => Piechart()}  id="nav">Dashboard</Nav.Link>
                                <Nav.Link id="nav" href="mailto:barish28@gmail.com">Contact.Us</Nav.Link>
                                <Nav.Link onClick={() => Logout()} id="nav">SignOut</Nav.Link>


                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div id="data">
                        <nav class="blend">
                            <h1>DATAS</h1>
                            <ul>
                                <li onClick={()=>navClientFeature()}><a href="">Clients</a></li>
                                <li onClick={()=>navEmployeeFeature()}><a href="">Employees</a></li>
                            </ul>
                        </nav>
                </div>
            </div>

        </>
    );
}

export default Home