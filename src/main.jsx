import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import AboutMe from './pages/aboutMe.jsx';
import Portfolio from './pages/porfolio.jsx';
import Contact from './pages/contact.jsx';
import Resume from './pages/resume.jsx';
import Error from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element:<App/>,
    errorElement: <Error/>,
    children:[
      {
        index: true,
        element: <AboutMe/>
      },
      {
        path:'/portfolio',
        element: <Portfolio/>
      },
      {
        path: '/contact',
        element:<Contact/>
      },
      {
        path: '/resume',
        element:<Resume/>
      }
    ]
  }
]);  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {router}/>
  </StrictMode>,
)
