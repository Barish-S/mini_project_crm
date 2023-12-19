import React from "react";
import { Helmet } from "react-helmet";
import './CSS/home.css'

function Home() {
    return (
        <>
            <Helmet>
                <title>Admin | Home</title>
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
                        <li><img src={require("./images/dashboard.png")} /><p>Dashboard</p></li>
                        <li><img src={require("./images/reports.png")} /><p>Reports</p></li>
                        <li><img src={require("./images/projects.png")} /><p>Clients</p></li>
                        <li><img src={require("./images/members.png")} /><p>Employees</p></li>
                        <li><img src={require("./images/rewards.png")} /><p>Works</p></li>
                        <li><img src={require("./images/messages.png")} /><p>Messages</p></li>
                        <li><img src={require("./images/setting.png")} /><p>Assign Users</p></li>
                        <li><img src={require("./images/messages.png")} /><p>Notifications</p></li>
                        <li><img src={require("./images/setting.png")}/><p>Contact With Admin</p></li>
                        <li><img src={require("./images/rewards.png")} /><p>Work</p></li>
                        <li><img src={require("./images/projects.png")} /><p>Client</p></li>


                        

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