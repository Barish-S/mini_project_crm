import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import './CSS/home.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setLoggedStatus, setEmpData, setClientData, setLoggedUser } from "../reducer/userSlice";
import { GetAllEmployees } from "./ApiComponent";
import { EmpTable } from "./empTable";

function GuestHome() {
    let navigate = useNavigate();
    let dispatch = useDispatch();


    let empsData = useSelector((state) => state.user.loggedStatus.empData)
    console.log("global",empsData)

    function Logout() {
        dispatch(setLoggedUser(""))
        dispatch(setEmpData([]))
        dispatch(setClientData([]))
        dispatch(setLoggedStatus(""))
        navigate('/')
    }

    // const GuestShow =()=>{
    // let empsData = useSelector((state) => state.user.loggedStatus.empData)
    // console.log(empsData)}


    // useEffect(()=>{
    //     GetAllEmployees()
    // },[])

    useEffect(()=>{
        axios.get("https://agaram.academy/api/crm/?request=all_employees").then(function (response) {
            let datas = response.data.data
            console.log(datas)
            dispatch(setEmpData(datas))
    })
    },[])


   
    
    



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
                                <Nav.Link id="nav" href="#table">Employees</Nav.Link>
                                <Nav.Link onClick={() => Logout()} id="nav">Home</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div id="data">
                
                </div>
            </div>
            
        <div id="table">
        <Container>
            <h1>Employees Details</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Work Base</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {/* {JSON.stringify(empData)} */}
                    {empsData.map((detail) => {
                        return (
                            <tr>
                                <td>{detail.name}</td> 
                                <td>{detail.workbase}</td>
                                 
                            </tr>)
                    })}
                </tbody>
            </Table>
        </Container>
        </div>
        </>
    );
}


export default GuestHome