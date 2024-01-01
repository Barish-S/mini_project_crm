import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import './CSS/home.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setLoggedStatus, setEmpData, setClientData, setLoggedUser } from "../reducer/userSlice";
function GuestHome() {
    let navigate = useNavigate();
    let dispatch = useDispatch();

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

                <title>Guest | Home</title>


                <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
            </Helmet>
            <div class="header">
                <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary" style={{ height: "60px", width: "100%" }}>
                    <Container>
                        <Navbar.Brand><h2 style={{ fontSize: "12pt", marginTop: "10px" }}><img style={{ width: "40px", cursor: "pointer", marginRight: "10px" }} src={require("./images/user.png")} class="user-img" />Hi ! Guest</h2></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link id="nav" href="mailto:barish28@gmail.com">Contact.Us</Nav.Link>
                                <Nav.Link onClick={() => Logout()} id="nav">Home</Nav.Link>
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

export default GuestHome