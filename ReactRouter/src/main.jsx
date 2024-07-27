import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
// import Home from './Components/Home.jsx'
import Work from './Components/Work.jsx'
import Skills from './Components/Skills.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
        {
          path:'',
          element:<About />
        },
      
      {
        path:'/contact',
        element:<Contact />
      },
      {
        path:'/work',
        element:<Work />
      },
      {
        path:'/skills',
        element:<Skills />
      }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
