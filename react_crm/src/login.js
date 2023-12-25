import axios from 'axios';
import "../src/login.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import NavBar from './nav';

function Sub() {
  let divBackgroundImage = require("../src/divback.jpg")

 


  let logincheck = () => {

    axios({
      method: 'post',
      url: 'https://346ecf18-5094-4743-aa32-8c7c55e73246.mock.pstmn.io/newUsers',
      Data: {

        request: "Add New Users",
        name: "beni",
        email: "beni@gmail.com"

      }
    }).then(function (response) {
      console.log(response);
    })
  };

  return (
    <>
      <NavBar/>
      <div class="firstdiv" style={{ border: "0px solid black", height: "590px", backgroundImage: "../src/divback.jpg", }}>
        <div class="firstdivHalf" style={{ border: "0px 0px 0px 0px solid black", width: "40%" }}>
          <h1 class="text" style={{ marginRight: "10%", marginTop: "5%", padding: "10%", color: "black" }}>GROW YOUR<br></br>

            BRAND WITH<br></br>
            OUR FEATURES</h1>
        </div>
        <div class="firstdivsecondHalf" style={{ border: "0px solid black", width: "40%" }}>

          <div class="parent">
            <div class="card">
              <div class="content-box">
                <span class="card-title">3D Card</span>
                <p class="card-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <span class="see-more">See More</span>
              </div>
              <div class="date-box">
                <span class="month">DEC</span>
                <span class="date">20</span>
              </div>
            </div>
          </div>
          <div class="parent">
            <div class="card">
              <div class="content-box">
                <span class="card-title">3D Card</span>
                <p class="card-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <span class="see-more">See More</span>
              </div>
              <div class="date-box">
                <span class="month">DEC</span>
                <span class="date">20</span>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div id="about" class="seconddiv" style={{ border: "0px solid black", height: "1000.5px" }}>

        <div class="imgs" style={{ border: "0px solid black", height: "50%", width: "50%" }}>
          <h1 style={{ color: "black" }}></h1>
        </div>
        <div class="imgs" style={{ border: "0px solid black", height: "50%", width: "50%" }}>

        </div>
        {/* <img src={require('../src/crmfeature.jpg')}/> */}

      </div>




    </>
  )
}

export default Sub;