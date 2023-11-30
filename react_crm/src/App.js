import logo from './logo.svg';
import HomeUser from './UserLogin/home';
import HomeClient from './ClientLogin/home';
import HomeAdmin from './SuperAdmin/home';
import './App.css';
import { ClientRegister } from './ClientRegister/ClientRegister';
import Submit from './SuperAdmin/Submit';
import ClientLogin from './ClientLogin/ClientLogin';
import Userlogin from './UserLogin/Userlogin';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Sub from './login';
import Divert from './Homepage/homepage';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Submit/>,
    },
    
    
    {
      path: "/divert",
      element:<Divert/>,
    },
    {
      path: "/homeadmin",
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
  ]);
 
     

  
  return ( 
    <div className="App">
    <RouterProvider router={router}/>
    </div>
  );
  }

export default App;
