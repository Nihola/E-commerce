import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from "react-router-dom" //add*
import './index.css'
import App from './App.jsx'
import { Router } from './routers/Router.jsx'//add*
import { RouterProvider } from 'react-router-dom'
import { Router } from './routers/Router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
)
