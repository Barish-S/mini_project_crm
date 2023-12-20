import logo from './logo.svg';
import HomeUser from './UserLogin/home';
import HomeClient from './ClientLogin/home';
import HomeAdmin from './SuperAdmin/home';
import Home from './Home_Page/home';
// import './App.css';
import { ClientRegister } from './ClientRegister/ClientRegister';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Submit from './login';
import Userlogin from './UserLogin/Userlogin';
import Divert from './Homepage/homepage';


import Divert from './Homepage/homepage';
import UserReg from './UserRegister';
import SuperAdminLog from './SuperAdmin/Submit';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Submit />,
    },
    {
      path: "/UserReg",
      element: <UserReg />,
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
      path: "/homeclient",
      element:<HomeClient/>,
    },
    {
      path: "/homeemployee",
      element:<HomeUser/>,
    },
    {
      path: "/adminhome",
      element: <Home />,
    }
  ]);



  return (
    <>
      <RouterProvider router={router} />
    </>


  );
}

export default App;
