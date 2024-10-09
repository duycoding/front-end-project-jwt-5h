import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style/global.css'
import Register from './pages/register.jsx'
import Home from './pages/home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import User from './pages/user.jsx'
import Login from './pages/login.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
          index: true,
          element: <Home />
      },
      {
          path: 'user',
          element: <User />
      }
    ]
  },
  {
    path: 'register',
    element: <Register />
  }, 
  {
    path: 'home',
    element: <Home />
  },
  {
    path: 'login', 
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
