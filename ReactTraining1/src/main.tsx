import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import About from './Pages/About.tsx'
import Contact from './Pages/Contact.tsx'
import Services from './Pages/Services.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "Contact",
    element: <Contact />,
  },
  {
    path: "services",
    element: <Services />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
