import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { RegisterClient } from '../reducer/userSlice';
import '../ClientRegister/ClientRegister.css'




export function ClientRegister() {

    let dispatch = useDispatch();

    let navigate=useNavigate();

    let ClientDetail = useSelector((state) => state.user.ClientDetails)
    console.log(ClientDetail)

    const RegData = () => {



        let formData = new FormData()
        formData.append("name", ClientDetail.name)
        formData.append("email", ClientDetail.email)
        formData.append("password", ClientDetail.password)
        formData.append("phone", ClientDetail.phone)
        formData.append("gender", ClientDetail.gender)
        formData.append("dob", ClientDetail.dob)
        formData.append("address", ClientDetail.address)
        formData.append("district", ClientDetail.district)
        formData.append("state", ClientDetail.state)
        formData.append("pincode", ClientDetail.pincode)

        let error=false
       { Object.entries(ClientDetail).map(([key,value]) => {
            if(value==""||value=="  "||value=="   "||value=="     "){
                console.log("enter value of: ",key)
                error=true
            }
        }  
        )}
        if (error==false){
        axios.post("https://agaram.academy/api/crm/index.php?request=client_register", formData).then(function (success) {
            console.log(success)
            navigate('/ClientLogin')

        
        })
    }
    }


    return (
        <>

            <form class="form" >
                <p class="title" >Register here.....!</p>
                <p class="message">Signup now and get full access to our app. </p>

                <label>
                    <input class="input" type="text" placeholder="" required="" onKeyUp={(e) => dispatch(RegisterClient({ ...ClientDetail, name: e.target.value }))} />
                    <span>Name</span>
                </label>
                <div class="flex">
                    <label>
                        <input class="input" type="email" placeholder="" required="" onKeyUp={(e) => dispatch(RegisterClient({ ...ClientDetail, email: e.target.value }))} />
                        <span>Email</span>
                    </label>
                    <label>
                        <input class="input" type="password" placeholder="" required="" onKeyUp={(e) => dispatch(RegisterClient({ ...ClientDetail, password: e.target.value }))} />
                        <span>Password</span>
                    </label>
                </div>
                <label>
                    <input class="input" type="text" placeholder="" required="" onKeyUp={(e) => dispatch(RegisterClient({ ...ClientDetail, phone: e.target.value }))} />
                    <span>Mobile no</span>
                </label>
                <div class="flex">
                    <label>
                        <input class="input" type="date" placeholder="" required="" onKeyUp={(e) => dispatch(RegisterClient({ ...ClientDetail, dob: e.target.value }))} />
                        <span>Date of Birth</span>
                    </label>
                    <label>
                        <input class="input" type="text" placeholder="" required="" onKeyUp={(e) => dispatch(RegisterClient({ ...ClientDetail, gender: e.target.value }))} />
                        <span>Gender</span>
                    </label>
                </div>
                <label>
                    <input class="input" type="text" placeholder="" required="" onKeyUp={(e) => dispatch(RegisterClient({ ...ClientDetail, address: e.target.value }))} />
                    <span>Address</span>
                </label>
                <label>
                    <input class="input" type="text" placeholder="" required="" onKeyUp={(e) => dispatch(RegisterClient({ ...ClientDetail, pincode: e.target.value }))} />
                    <span>Pincode</span>
                </label>
                <div class="flex">
                    <label>
                        <input class="input" type="text" placeholder="" required="" onKeyUp={(e) => dispatch(RegisterClient({ ...ClientDetail, district: e.target.value }))} />
                        <span>District</span>
                    </label>
                    <label>
                        <input class="input" type="text" placeholder="" required="" onKeyUp={(e) => dispatch(RegisterClient({ ...ClientDetail, state: e.target.value }))} />
                        <span>State</span>
                    </label>
                </div>
                <button class="submit" type='button' onClick={() => RegData()}>Submit</button>
                <p class="signin">Already have an acount ? <a href="ClientLogin">Signin</a> </p>
            </form>

        </>

    )
}

