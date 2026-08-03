import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Products from './Pages/Products.jsx'
const router = createBrowserRouter([
  {
    path :"/",
    element : <App />,
    children : [
      {
        path : "/home",
        element : <Home />
      },
      {
        path : "/about",
        element : <About />
      },
      {
        path : "/products",
        element : <Products />
      },
      {
        path : "/contact",
        element : <Contact />
      }
    ]
  }
]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
