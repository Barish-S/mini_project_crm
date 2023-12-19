import React from "react";
import { Helmet } from "react-helmet";
import './CSS/home.css'
import { useSelector } from "react-redux";

function Home() {
    let userStatus=useSelector((state)=>state.user.loggedStatus.user)
    console.log(userStatus)
    return (
        <>
            <Helmet>
                {userStatus=="Admin"?<title>Admin | Home</title>:null}
                {userStatus=="Employee"?<title>Employee | Home</title>:null}
                {userStatus=="Client"?<title>Client | Home</title>:null}

                <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
            </Helmet>
            <div class="header">
                <ul id="nav">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div class="side-nav">
                    <div class="user">
                        <img src={require("./images/user.png")} class="user-img" />
                        <div>
                            <h2>Barish</h2>
                            <p>barishs28@gmail.com</p>
                        </div>
                        <img src={require("./images/star.png")} class="star-img" />
                    </div>
                    <ul>
                        {userStatus=="Admin"?<li><img src={require("./images/dashboard.png")} /><p>Dashboard</p></li>:null}
                        <li><img src={require("./images/reports.png")} /><p>Reports</p></li>
                        {userStatus=="Admin"||userStatus=="Employee"?<li><img src={require("./images/projects.png")} /><p>Clients</p></li>:null}
                        {userStatus=="Admin"||userStatus=="Client"?<li><img src={require("./images/members.png")} /><p>Employees</p></li>:null}
                        {userStatus=="Admin"||userStatus=="Employee"?<li><img src={require("./images/rewards.png")} /><p>Works</p></li>:null}
                        {userStatus=="Admin"?<li><img src={require("./images/messages.png")} /><p>Messages</p></li>:null}
                        {userStatus=="Admin"?<li><img src={require("./images/setting.png")} /><p>Assign Users</p></li>:null}
                        {userStatus=="Employee"||userStatus=="Client"?<li><img src={require("./images/messages.png")} /><p>Notifications</p></li>:null}
                        {userStatus=="Employee"||userStatus=="Client"?<li><img src={require("./images/setting.png")}/><p>Contact With Admin</p></li>:null}
                    </ul>
                    <ul>
                        <li><img src={require("./images/logout.png")} /><p>Logout</p></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Home