
// import './App.css';
import { ClientRegister } from './ClientRegister/ClientRegister';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home_Page/home';
import Submit from './login';
import Userlogin from './UserLogin/Userlogin';
// import Divert from './Homepage/homepage';
// import ClientLogin from './ClientLogin/ClientLogin';

// import Divert from './Homepage/homepage'; 
import ClientLogin from './ClientLogin/ClientLogin';
import UserReg from './UserRegister';
import SuperAdminLog from './SuperAdmin/Submit';
import Workdetails from './Home_Page/workdetails';
import ClientWorkDetails from './Home_Page/clientworkdetails';
import Assign from './Home_Page/assignUsers';

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
      path: "/clientRegister",
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
    {
      path: "/adminhome",
      element:<Home/>,
    },
    {
      path:"/Workdetails",
      element:<Workdetails/>
    },
    {
      path:"/clientWorkdetails/:clientid",
      element:<ClientWorkDetails/>
    },
    {
      path:"/AssignEmployees",
      element:<Assign/>
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
