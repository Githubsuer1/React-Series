import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Home from './Components/Home.jsx'
import Work from './Components/Work.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
        {
          path:'',
          element:<Home />
        },
      
      {
        path:'/contact',
        element:<Contact />
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/work',
        element:<Work />
      }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
