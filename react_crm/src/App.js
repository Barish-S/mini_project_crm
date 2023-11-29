import logo from './logo.svg';
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
      element:<Divert/>,
    },
  ]);
 
     

  
  return ( 
    <div className="App">
      <header className="App-header">
      <RouterProvider router={router} />
       

        <ClientRegister />


      </header>
    
    </div>
  );
  }

export default App;
