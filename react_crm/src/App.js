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
import Divert from './Homepage/homepage'; 
import UserReg from './UserRegister';

function App() {
  const router = createBrowserRouter([
    {
      path: "/superadmin",
      element:<Submit/>,
    },
    {
      path: "/divert",
      element:<Divert/>,
    },
    {
      path: "/superadminlogin",
      element:<HomeAdmin/>,
    },
    {
      path: "/homeclient",
      element:<HomeClient/>,
    },
    {
      path: "/homeemployee",
      element:<HomeUser/>,
    },
    {
      path:"/clientregister",
      element:<ClientRegister />
    }
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
