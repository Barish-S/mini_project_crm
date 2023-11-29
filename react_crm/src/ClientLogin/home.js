import './home.css';

function homeClient(){
    return(
        <>
        <div class="header">
            <ul id="nav">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div class="side-nav">
                <div class="user">
                    <img src="images/user.png" class="user-img"/>
                    <div>
                        <h2>Arun</h2>
                        <p>arun@gmail.com</p>
                    </div>
                    <img src="images/star.png" class="star-img"/>
                </div>
                <ul>
                    <li><img src="images/reports.png"/><p>Reports</p></li>
                    <li><img src="images/members.png"/><p>Employees</p></li>
                    <li><img src="images/messages.png"/><p>Messages</p></li>
                    <li><img src="images/setting.png"/><p>Contact With Admin</p></li>
                </ul>
                <ul>
                    <li><img src="images/logout.png"/><p>Logout</p></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default homeClient

