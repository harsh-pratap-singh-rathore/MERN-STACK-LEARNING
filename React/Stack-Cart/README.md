# 🛒 Stack-Cart — Major E-Commerce React Capstone Project

<div align="center">

  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="70" height="70"/>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" alt="Vite" width="70" height="70"/>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="70" height="70"/>

  <br/><br/>

  [![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
  [![React Router](https://img.shields.io/badge/React_Router_DOM-v6-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
  [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Status](https://img.shields.io/badge/Status-In_Active_Development-brightgreen?style=for-the-badge)]()

</div>

---

## 🌟 About Stack-Cart

**Stack-Cart** is my **Major Capstone Project** in my MERN Stack learning journey! 🚀  
It synthesizes and applies everything I have learned throughout my React modules — from foundational components, JSX, and reactive hooks (`useState`, `useEffect`) to complex navigation patterns with **React Router DOM**, layout composition (`<Outlet />`), and modular styling.

This project is built from scratch as a modern, high-performance E-Commerce frontend web application.

---

## 🚀 Current Milestone & Status

> ### 🟢 Stage 1: Client-Side Routing & Architecture (`COMPLETED` ✅)
> 
> * **Declarative Routing Engine:** Configured `createBrowserRouter` & `RouterProvider` for seamless single-page application (SPA) routing.
> * **Master Layout Pattern:** Built reusable `<Layout />` wrapper with persistent `<Header />` and `<Footer />` components utilizing `<Outlet />`.
> * **Active Navigation:** Integrated `<NavLink />` elements with dynamic active state highlighting across all primary application routes:
>   * `/` — Home Page
>   * `/about` — About Stack-Cart
>   * `/products` — Product Catalog
>   * `/contact` — Contact & Support

> ### 🟢 Stage 2: Global Cart Context & State Management (`COMPLETED` ✅)
> 
> * **Context API Infrastructure:** Designed `CartContext.js` using `createContext` and custom `useCart` hook for streamlined global state consumption.
> * **Layout Provider Wrapping:** Wrapped master `<Layout />` with `<CartProvider />`, exposing reactive `cartCount`, `addToCart`, and `removeFromCart` state methods.
> * **Header Counter Sync:** Linked `<Header />` component to dynamically render real-time cart counts `Cart({cartCount})`.
> * **Interactive Action Handlers:** Implemented `Add To Cart` and `Remove From Cart` action triggers within `<Products />` page.

---

## 🛣️ Roadmap & Feature Milestones

- [x] **Phase 1: Architecture & Routing** — `createBrowserRouter`, `<Layout />`, `<Outlet />`, `Header`, `Footer`, Multi-page structure.
- [x] **Phase 2: Global Cart State & Context API** — `createContext`, `CartProvider`, `useCart` hook, dynamic header counter & cart actions.
- [ ] **Phase 3: Dynamic Product Catalog Grid** — Product cards rendering, category filters, product search.
- [ ] **Phase 4: State Persistence & Advanced Cart** — Detailed cart drawer, item list management, LocalStorage backup.
- [ ] **Phase 5: User Auth & Checkout UI** — Interactive login/registration modals and checkout summary view.

---

## 🛠️ How to Run Locally

```bash
# Navigate to project directory
cd React/Stack-Cart

# Install dependencies
npm install

# Start local development server
npm run dev
```

---

💻 *Built with passion as part of the MERN Stack Learning Journey by [Harsh Pratap Singh Rathore](https://github.com/harsh-pratap-singh-rathore)*
