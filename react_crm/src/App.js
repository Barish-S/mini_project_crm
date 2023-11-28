import logo from './logo.svg';
import './App.css';
import Submit from './login';
import Divert from './Homepage/homepage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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

      </header>
    </div>
  );
  }

export default App;
