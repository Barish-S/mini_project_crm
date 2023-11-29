import './home.css';

function HomeAdmin() {
    return (
        <div className="header">
            <ul id="nav">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="side-nav">
                <div className="user">
                    <img src="images/user.png" className="user-img" />
                    <div>
                        <h2>Barish</h2>
                        <p>barishs28@gmail.com</p>
                    </div>
                    <img src="images/star.png" className="star-img" />
                </div>
                <ul>
                    <li><img src="images/dashboard.png" /><p>Dashboard</p></li>
                    <li><img src="images/reports.png" /><p>Reports</p></li>
                    <li><img src="images/projects.png" /><p>Clients</p></li>
                    <li><img src="images/members.png" /><p>Employees</p></li>
                    <li><img src="images/rewards.png" /><p>Works</p></li>
                    <li><img src="images/messages.png"/><p>Messages</p></li>
                    <li><img src="images/setting.png" /><p>Assign Users</p></li>
                </ul>
                <ul>
                    <li><img src="images/logout.png" /><p>Logout</p></li>
                </ul>
            </div>
        </div>
    )
}

export default HomeAdmin
