import * as ReactDOM from "react-dom/client";
import {useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import Submit from "../login";
import NavDropdown from 'react-bootstrap/NavDropdown';

 function Divert() {
    let navigate = useNavigate();
  
    let handleClick =()=> {
     
      navigate('/divert')
    };
  
    return (
      <div>
        <button onClick={()=>handleClick()} type="button">superadmin</button>
        <button type="button">client_register</button>
        <button type="button">user_register</button>
        
      </div>
    );
  
        
  
        
           
       
        
}



export default Divert;