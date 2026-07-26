# 🚀 React Router Project

Welcome to the **React Router Practice Application**! This project demonstrates modern client-side routing in a React application using `react-router-dom`, structured with clean layout architecture, nested routes, and active page styling.

---

## 🌟 Key Features

- 🌐 **Client-Side Routing**: Fast, seamless page navigation without full page reloads.
- 📐 **Layout Pattern (`<Outlet />`)**: Persistent Header and Footer surrounding dynamic nested page content.
- 🎯 **Active Navigation (`<NavLink>`)**: Dynamic conditional styling to highlight the active route.
- 📄 **Multi-Page Setup**: Distinct skeleton views for **Home**, **About**, and **Contact**.
- ⚡ **Vite-Powered**: Blazing-fast development server with Hot Module Replacement (HMR).

---

## 🏗️ Project Structure

```text
src/
├── Components/
│   ├── Header.jsx    # Navigation header with active link styling
│   └── Footer.jsx    # Application footer
├── Pages/
│   ├── Home.jsx      # Home page component
│   ├── About.jsx     # About page component
│   └── Contact.jsx   # Contact page component
├── Layout.jsx        # Root layout wrapper utilizing <Outlet />
├── main.jsx          # Router initialization with createBrowserRouter
└── App.jsx           # Application entry component
```

---

## 🧠 Routing Architecture

This project uses `createBrowserRouter` and `<RouterProvider />` for declarative, nested route configuration:

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

---

## 🧰 Tech Stack

- **React** 
- **React Router DOM**
- **Vite**
- **JavaScript (ES6+)**
