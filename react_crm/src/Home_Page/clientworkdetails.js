import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setWorkDetails } from '../reducer/userSlice';
import { WorkDetailsTable } from "./empTable";
import { useSelector } from "react-redux";


function ClientWorkDetails() {
    let { clientid } = useParams();
    let dispatch = useDispatch();
    let navigate = useNavigate()
    let userStatus = useSelector((state) => state.user.loggedStatus.user)


    useEffect(() => {

        if (localStorage.getItem("logStatus") == "Admin") {
            axios.post(`http://agaram.academy/api/crm/?request=client_work_list&clientid=${clientid}`).then(function (response) {
                console.log(response.data.data)
                dispatch(setWorkDetails(response.data.data))
            })
        } else {
            navigate('/')
        }

    }, [])

    return (
        <>

            <WorkDetailsTable />


        </>
    )
}

export default ClientWorkDetails;