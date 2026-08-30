# 🧭 React Router DOM Architecture (`React/Routers`)

<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="35" height="35"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" alt="Vite" width="35" height="35"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="35" height="35"/>
</p>

A single-page application demonstrating modern client-side routing using **React Router DOM v6+**, featuring declarative route creation, nested layout composition with `<Outlet />`, and dynamic navigation active states with `<NavLink />`.

---

## 📁 Directory Structure

```
React/Routers/
├── public/
├── src/
│   ├── assets/
│   ├── Components/
│   │   ├── Header.jsx         # Persistent navigation bar with dynamic active links
│   │   └── Footer.jsx         # Persistent application footer
│   ├── Pages/
│   │   ├── Home.jsx           # Landing / home route view
│   │   ├── About.jsx          # About page view
│   │   └── Contact.jsx        # Contact form / view
│   ├── App.jsx
│   ├── Layout.jsx             # Master layout wrapper with <Outlet />
│   └── main.jsx               # createBrowserRouter & RouterProvider setup
├── package.json
└── README.md
```

---

## 💡 Key Routing Concepts Covered

### 1. 🗺️ Declarative Route Hierarchy (`src/main.jsx`)
Configured modern data router using `createBrowserRouter` and mounted it with `<RouterProvider />`:

```javascript
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
```

### 2. 🖼️ Master Layout Composition (`src/Layout.jsx`)
Employed the `<Layout />` wrapper pattern with `<Outlet />` so the `<Header />` and `<Footer />` remain persistently mounted while child page components swap dynamically based on the active URL path:

```javascript
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
```

### 3. 🎯 Dynamic Navigation Links (`<NavLink />`)
Used `<NavLink />` inside the Header component to automatically apply active styling whenever the current URL matches the route destination without triggering full page reloads.

---

## 🛠️ How to Run Locally

```bash
# Navigate to project
cd React/Routers

# Install dependencies
npm install

# Start Vite dev server
npm run dev
```
