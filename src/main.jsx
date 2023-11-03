import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './component/Login.jsx'
import TaskList from './component/TaskList.jsx'
import './config/axios'
import AddTask from './component/AddTask.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PrivateRouter from './component/PrivateRouter.jsx'
import DetailTask from './component/DetailTask.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:
    <Login></Login>  
  },
   {path: "/tasks",
    element: <PrivateRouter>
    <TaskList/>

    </PrivateRouter>
  },
  {
    path: "/login",
    element: <Login/>,
    
  },
  {
    path:'/add',
    element: 
    <AddTask/>

  }
  ,  {
    path: "/tasks/:id",
    element: 
    <DetailTask/>
    
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />

  </React.StrictMode>,
)
