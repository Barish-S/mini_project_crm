import logo from './logo.svg';
import HomeUser from './UserLogin/home';
import HomeClient from './ClientLogin/home';
import HomeAdmin from './SuperAdmin/home';
import Userlogin from './UserLogin/Userlogin';
import './App.css';
import { ClientRegister } from './ClientRegister/ClientRegister';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Submit from './login';
import Divert from './Homepage/homepage';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Submit/>,
    },
    
    
    {
      path: "/divert",
      element:<Userlogin/>,
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
