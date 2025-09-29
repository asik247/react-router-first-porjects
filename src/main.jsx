import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import About from './components/About/About.jsx'
import Laptop from './components/Laptop/Laptop.jsx'
import Tablate from './components/Tablate/Tablate.jsx'
import Users from './components/Users/Users.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
      {index:true, Component:About},
      {path:'laptop',Component:Laptop},
      {path:'t',Component:Tablate},
      
      {path:'users',

        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
        Component:Users


      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}></RouterProvider>

  </StrictMode>
)
