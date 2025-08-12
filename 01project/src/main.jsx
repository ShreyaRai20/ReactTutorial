import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import PasswordGenerator from './components/PasswordGenerator.jsx'
import Contact from './components/Contact.jsx'
import UserContextProvider from './context/UserContext.jsx'
import Login from './components/ContextProject/Login.jsx'
import ContextPage from './components/ContextProject/ContextPage.jsx'

const routes = [
  {
    path:'/',
    element: <Layout/>,
    children: [
      {
        path:'',
        element: <Home/>,
      },
      {
        path:'password-generator',
        element: <PasswordGenerator/>,
      },
      {
        path:'context-page',
        element: <ContextPage/>,
      },
        {
          path:'contact',
          element: <Contact/>
      }
    ], 
  },
]

const router= createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
