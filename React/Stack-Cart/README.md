# 🛒 Stack-Cart — Major E-Commerce React Capstone Project

<div align="center">

  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="70" height="70"/>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" width="70" height="70"/>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" alt="Vite" width="70" height="70"/>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="70" height="70"/>

  <br/><br/>

  [![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![React Router](https://img.shields.io/badge/React_Router_DOM-v7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
  [![Vite](https://img.shields.io/badge/Vite-v8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Nano ID](https://img.shields.io/badge/Nano_ID-v6-000000?style=for-the-badge&logo=npm&logoColor=white)](https://github.com/ai/nanoid)
  [![Status](https://img.shields.io/badge/Status-In_Active_Development-brightgreen?style=for-the-badge)]()

</div>

---

## 🌟 About Stack-Cart

**Stack-Cart** is my **Major Capstone Project** in my MERN Stack learning journey! 🚀  
It synthesizes and applies everything I have learned throughout my React modules — from foundational components, JSX, and reactive hooks (`useState`, `useEffect`) to complex navigation patterns with **React Router DOM**, layout composition (`<Outlet />`), **Tailwind CSS v4** styling, **Nano ID** state tracking, and modular architecture.

This project is built from scratch as a modern, high-performance E-Commerce frontend web application.

---

## 🚀 Current Milestone & Status

> ### 🟢 Stage 1: Client-Side Routing & Architecture (`COMPLETED` ✅)
> 
> * **Declarative Routing Engine:** Configured `createBrowserRouter` & `RouterProvider` for seamless single-page application (SPA) routing.
> * **Master Layout Pattern:** Built reusable `<Layout />` wrapper with persistent `<Header />` and `<Footer />` components utilizing `<Outlet />`.
> * **Active Navigation:** Integrated `<NavLink />` elements with dynamic active state highlighting across all primary application routes:
>   * `/home` — Home Page
>   * `/about` — About Stack-Cart
>   * `/products` — Product Catalog
>   * `/contact` — Contact & Support

> ### 🟢 Stage 2: Global Cart Context & State Management (`COMPLETED` ✅)
> 
> * **Context API Infrastructure:** Designed `CartContext.js` using `createContext` and custom `useCart` hook for streamlined global state consumption.
> * **Layout Provider Wrapping:** Wrapped master `<Layout />` with `<CartProvider />`, exposing reactive `cart`, `addtocart`, and `removefromcart` state methods.
> * **Header Counter Sync:** Linked `<Header />` component to dynamically render real-time cart counts `Cart({cartCount})`.
> * **Interactive Action Handlers:** Implemented `Add To Cart` and `Remove From Cart` action triggers within `<ProductCard />` components.

> ### 🟢 Stage 3: Tailwind CSS v4 Integration & Reusable Component System (`COMPLETED` ✅)
> 
> * **Tailwind CSS v4 Integration:** Installed and configured `@tailwindcss/vite` plugin with `@import "tailwindcss";` design engine.
> * **Fixed Header & Spacing Fix:** Resolved outlet content overlap by structuring `<Layout />` with `min-h-screen flex flex-col` and `<main className="flex-1 max-w-screen-xl w-full mx-auto p-4 pt-20">`.
> * **Glassmorphism Header Navigation:** Added backdrop blur (`bg-white/90 backdrop-blur-md`) and active route indicator badges.
> * **Inline Product Card Grid:** Designed reusable `<ProductCard imgsrc="..." />` components positioned side-by-side using responsive flex containers (`flex flex-wrap gap-6`).

> ### 🟢 Stage 4: Nano ID Unique Identifier & Granular Cart Management (`COMPLETED` ✅)
> 
> * **Nano ID Integration:** Integrated `nanoid` library to assign unique string IDs (`id: nanoid()`) to each product item added to cart.
> * **Granular Item Removal:** Upgraded `removefromcart(id)` function to filter cart items by unique ID (`cart.filter(item => item.id !== id)`), allowing accurate removal of specific items.
> * **Active Cart View:** Added cart management view in `Products.jsx` displaying added products, their prices, unique Nano ID badges, and dedicated remove actions.

---

## 🛣️ Roadmap & Feature Milestones

- [x] **Phase 1: Architecture & Routing** — `createBrowserRouter`, `<Layout />`, `<Outlet />`, `Header`, `Footer`, Multi-page structure.
- [x] **Phase 2: Global Cart State & Context API** — `createContext`, `CartProvider`, `useCart` hook, dynamic header counter & cart actions.
- [x] **Phase 3: Tailwind CSS v4 & Reusable Component System** — `@tailwindcss/vite`, glassmorphism nav, inline `<ProductCard />` grid layout.
- [x] **Phase 4: Nano ID Unique Identifiers & Specific Item Removal** — `nanoid` unique ID generation, specific item removal by ID, interactive cart list.
- [ ] **Phase 5: State Persistence & Advanced Cart Drawer** — Detailed cart sliding drawer, item list management, LocalStorage backup.
- [ ] **Phase 6: User Auth & Checkout UI** — Interactive login/registration modals and checkout summary view.

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
