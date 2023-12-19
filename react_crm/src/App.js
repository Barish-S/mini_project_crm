import logo from './logo.svg';
import HomeUser from './UserLogin/home';
import HomeClient from './ClientLogin/home';
import HomeAdmin from './SuperAdmin/home';

import './App.css';
import { ClientRegister } from './ClientRegister/ClientRegister';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 

import Submit from './login';
import Userlogin from './UserLogin/Userlogin';
import ClientLogin from './ClientLogin/ClientLogin';
import Divert from './Homepage/homepage'; 
import UserReg from './UserRegister';
import SuperAdminLog from './SuperAdmin/Submit';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Submit/>,
    },
    {
      path: "/UserReg",
      element:<UserReg/>,
    },
    {
      path: "/ClientRegister",
      element:<ClientRegister/>,
    },
    {
      path: "/Userlogin",
      element:<Userlogin/>,
    },
    {
      path: "/ClientLogin",
      element:<ClientLogin/>,
    },
    {
      path: "/SuperAdminLog",
      element:<SuperAdminLog/>,
    },
  ]);
 

  
  return ( 
    <div className="App">
      <header className="App-header">
      <RouterProvider router={router} />
       

       


      </header>
    
    </div>

    
  );
  }

export default App;
