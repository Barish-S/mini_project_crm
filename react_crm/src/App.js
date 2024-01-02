
import { ClientRegister } from './ClientRegister/ClientRegister';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home_Page/home';
import Submit from './login';
import Userlogin from './UserLogin/Userlogin';
import ClientLogin from './ClientLogin/ClientLogin';
import UserReg from './UserRegister';
import SuperAdminLog from './SuperAdmin/Submit';
import Workdetails from './Home_Page/workdetails';
import ClientWorkDetails from './Home_Page/clientworkdetails';
import Assign from './Home_Page/assignUsers';
import GuestHome from './Home_Page/GuestHome';
import EmployeeHome from './Home_Page/employeeHome';
import ClientHome from './Home_Page/clientHome';
import ClientTable from './Home_Page/Features/getAllClients';
import EmpTable from './Home_Page/Features/getAllEmployees';
import WorkDetails from './Home_Page/Features/getWorkDetails';
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
    },
    {
      path:"/GuestHome",
      element:<GuestHome/>
    },
    {
      path:"/EmployeeHome",
      element:<EmployeeHome/>
    },
    {
      path:"/ClientHome",
      element:<ClientHome/>
    },
    {
      path:"/Client-List",
      element:<ClientTable/>
    },
    {
      path:"/Employee-List",
      element:<EmpTable />
    },
    {
      path:"/Get-Work",
      element:<WorkDetails />
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
