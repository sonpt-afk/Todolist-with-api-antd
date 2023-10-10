import React from 'react'
import ReactDOM from 'react-dom/client'
import Api from './component/Api.jsx'
import App from './component/App.jsx'
import Todolist from './component/Todolist.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Todolist></Todolist>
  </React.StrictMode>,
)
