import { useEffect } from "react";
import { ToAssignEmployees } from "./empTable"
import { useParams } from "react-router";
import { useNavigate } from "react-router";


function Assign() {
    let navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("logStatus") != "Admin") {
            navigate("/")
        }
    }, [])
    let { workid } = useParams();
    return (
        <>

            <ToAssignEmployees workids={workid} />

        </>
    )
}

export default Assign;