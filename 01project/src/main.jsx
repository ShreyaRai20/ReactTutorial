import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import PasswordGenerator from './components/Projects/password-generator/PasswordGenerator.jsx'
import Contact from './components/Contact.jsx'
import ContextPage from './components/Projects/ContextProject/ContextPage.jsx'
import ThemeChanger from './components/Projects/theme-switcher/ThemeChanger.jsx'
import ProjectPage from './components/Projects/ProjectPage.jsx'
import ProjectPageLayout from './components/Projects/ProjectPageLayout.jsx'
import FormPage from './components/Projects/form-project/FormPage.jsx'
import TodoPage from './components/Projects/Todo/TodoPage.jsx'
import UIPage from './components/Projects/ui-projects/UIPage.jsx'

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
          path:'contact',
          element: <Contact/>
      },
        {
          path:'theme-changer',
          element: <ThemeChanger/>
      },
        {
          path:'/projects',
          element: <ProjectPageLayout/>,
          children:[
            {
        path:'',
        element: <ProjectPage/>,
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
          path:'theme-changer',
          element: <ThemeChanger/>
      },
      {
        path:"form",
        element: <FormPage/>
      },
      {
        path:"todo",
        element: <TodoPage/>
      },
            {
        path:"uiprojects",
        element: <UIPage/>
      },


          ]
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
