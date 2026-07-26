import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Layout from './Layout.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
    path:"/about",
    element:<About />,
      },
      {
    path:"/contact",
    element:<Contact />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
