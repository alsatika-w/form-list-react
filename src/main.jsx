import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login.jsx';
import Form from './Form.jsx';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Login/>
  },
  {
    path:'/Form',
    element:<Form/>
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
