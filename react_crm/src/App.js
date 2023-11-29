import logo from './logo.svg';
import './App.css';
<<<<<<<<< Temporary merge branch 1
import Submit from './login';
import Divert from './Homepage/homepage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; <img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
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
<<<<<<<<< Temporary merge branch 1
      <RouterProvider router={router} />
=========
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <ClientRegister />
>>>>>>>>> Temporary merge branch 2

      </header>
    
    </div>
  );
  }

export default App;
