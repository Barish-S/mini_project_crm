import logo from './logo.svg';
import HomeUser from './UserLogin/home';
import HomeClient from './ClientLogin/home';
import HomeAdmin from './SuperAdmin/home';
import { ClientRegister } from './ClientRegister/ClientRegister';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Submit from './login';
import Divert from './Homepage/homepage';
function App() {
  const router = createBrowserRouter([
    {
      path: "",
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
