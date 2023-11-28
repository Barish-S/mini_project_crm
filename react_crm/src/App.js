import logo from './logo.svg';
import './App.css';
import Submit from './login';
import Homepage from './Homepage/homepage';
import Divert from './Homepage/homepage';
import {BrowserRouter as Router} from 'react-router-dom';
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
      {/* <Homepage/> */}
      {/* <Submit/>   */}
     
      <RouterProvider router={router}/>
     
        {/* <Divert/>
      */}
      </header> 
    </div>
  );
  }

export default App;
