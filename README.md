

# 🚀 MERN Stack Learning Journey

<div align="center">

  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React Logo" width="80" height="80"/>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" alt="Vite Logo" width="80" height="80"/>

  <br/><br/>

  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
  [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![MERN Stack](https://img.shields.io/badge/MERN-Stack-green?style=for-the-badge)](https://github.com/harsh-pratap-singh-rathore/MERN-STACK-LEARNING)

</div>

---

Welcome to my **MERN Stack Learning Repository**! This repository tracks my daily progress, code snippets, projects, and hands-on experiments as I master Full-Stack Web Development using **MongoDB, Express.js, React, and Node.js**.

---

## 📌 Repository Structure

```
MERN/
├── React/
│   ├── Counter-App/        # Interactive React Counter application using useState hooks & boundary validation
│   ├── bg-changer/         # Dynamic background changer utilizing useState and inline styles
│   ├── context-api/        # Global state management using React Context API (`createContext`, `useContext`, Provider pattern)
│   ├── currency-converter/ # Currency Converter application fetching live rates from an API
│   ├── password-generator/ # SecureKey: Password generator using hooks (useState, useCallback, useEffect, useRef) & glassmorphic CSS UI
│   ├── reactprops/         # Reusable Card components utilizing React props and styled with Tailwind CSS v4
│   ├── Routers/            # React Router app featuring client-side routing, Layout pattern (<Outlet />), dynamic NavLinks, and pages
│   ├── theme-switcher/     # Dark/Light Theme Switcher using Context API (custom `useTheme` hook, `ThemeProvider`) & Tailwind CSS
│   └── todo-local-storage/ # Task Master: Todo application utilizing Context API, custom `useTodo` hook, and Local Storage persistence
├── .gitignore
└── README.md
```

---

## 🗺️ Learning Roadmap

- [x] **React Basics**
  - [x] Components & JSX syntax
  - [x] Managing state with `useState`
  - [x] Event Handling & Conditionals
  - [x] Component Reusability & Props
  - [x] Basic & Inline CSS styling
  - [x] Tailwind CSS v4 integration
- [x] **Hooks & Optimization**
  - [x] Side effects & dependency arrays (`useEffect`)
  - [x] DOM references (`useRef`)
  - [x] Callback memoization (`useCallback`)
- [ ] **Advanced React**
  - [x] Context API (`useContext`) & `useReducer`
  - [x] Context API with Local Storage persistence
  - [x] Routing with React Router (`createBrowserRouter`, `RouterProvider`, `Outlet`, `NavLink`)
  - [ ] State Management (Redux Toolkit / Zustand)
- [ ] **Node.js & Express.js**
  - [ ] RESTful APIs & Middleware
  - [ ] Authentication & JWT
- [ ] **MongoDB & Mongoose**
  - [ ] Schema design & CRUD operations
  - [ ] Aggregation frameworks
- [ ] **Full-Stack Projects**
  - [ ] End-to-end MERN Applications

---

## ⚡ Featured Projects

### 🧮 1. React Counter App (`React/Counter-App`)

<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="30" height="30"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" alt="Vite" width="30" height="30"/>
</p>

A lightweight interactive counter application built with **React 19** and **Vite**.

* **Key Concepts Covered:**
  * Functional components & JSX layout.
  * React `useState` hook for reactive state updates.
  * Input validation boundaries (Count limited between `0` and `20`).

#### 🛠️ How to run locally:

```bash
cd React/Counter-App
npm install
npm run dev
```

---

### 🎨 2. Background Changer App (`React/bg-changer`)

<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="30" height="30"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" alt="Vite" width="30" height="30"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" width="30" height="30"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" width="30" height="30"/>
</p>

A fully interactive background color switching web application. It showcases state management alongside basic inline CSS styling.

* **Key Concepts Covered:**
  * React state updates on user interaction (`useState`).
  * Inline styles in JSX (`style={{ backgroundColor: color }}`).
  * Event listener registration in React (`onClick`).

#### 🛠️ How to run locally:

```bash
cd React/bg-changer
npm install
npm run dev
```

---

### 🎴 3. Reusable Cards with Props (`React/reactprops`)

<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="30" height="30"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" alt="Vite" width="30" height="30"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" width="30" height="30"/>
</p>

A project that demonstrates component reusability. It passes distinct parameters (subject, description, rating) to a shared Card component using custom props. The UI is beautifully structured and styled with **Tailwind CSS v4**.

* **Key Concepts Covered:**
  * Designing custom reusable React components.
  * Reading and executing parameters using `props` in React functional components.
  * Configuring Tailwind CSS v4 with Vite integration (`@tailwindcss/vite`).

#### 🛠️ How to run locally:

```bash
cd React/reactprops
npm install
npm run dev
```

---

### 🔑 4. SecureKey Password Generator (`React/password-generator`)

<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="30" height="30"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" alt="Vite" width="30" height="30"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" width="30" height="30"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" width="30" height="30"/>
</p>

A simple and interactive random password generation utility built with React.

* **Key Concepts Covered:**
  * Auto-generation cycles with `useEffect`.
  * Optimizing render execution using the `useCallback` memoization hook.
  * Direct clipboard selection and copy using programmatic `useRef` nodes.

#### 🛠️ How to run locally:

```bash
cd React/password-generator
npm install
npm run dev
```

---

### 💱 5. Currency Converter App (`React/currency-converter`)

<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="30" height="30"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" alt="Vite" width="30" height="30"/>
</p>

A React-based currency converter application that retrieves real-time exchange rates from an external API.

* **Development Journey & Stages:**
  * **Stage 1 (Simple Fetch Call):** Firstly, made a simple fetch call (`test.js`) to request and verify latest exchange rates from the API (`ExchangeRate-API`) and inspect the returned data structure.
  * **Stage 2 (Inputs & Live Conversion):** Built the interactive component that takes 2 currency inputs (From and To currency options) and an amount input to perform live conversions using React state management and side effects.
  * **Stage 3 (Upcoming/Future Stage):** Further improvement will include refactoring the API logic using a custom hook (e.g., `useCurrencyInfo`) and significantly improving the UI styling.

#### 🛠️ How to run locally:

```bash
cd React/currency-converter
npm install
npm run dev
```

---

### 🧭 6. React Router App (`React/Routers`)

<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="30" height="30"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" alt="Vite" width="30" height="30"/>
</p>

A single-page React application implementing client-side routing using **React Router DOM**. It showcases clean layout architecture, nested routes, and dynamic navigation link styling.

* **Key Concepts Covered:**
  * Declarative route configuration with `createBrowserRouter` & `RouterProvider`.
  * Master layout pattern using `<Layout />` and `<Outlet />` for persistent Header & Footer wrappers.
  * Navigation active state styling using `<NavLink className={({ isActive }) => ...} />`.
  * Multi-page architecture including `Home`, `About`, and `Contact` page components.

#### 🛠️ How to run locally:

```bash
cd React/Routers
npm install
npm run dev
```

---

### ⚛️ 7. Context API App (`React/context-api`)

<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="30" height="30"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" alt="Vite" width="30" height="30"/>
</p>

A React application demonstrating global state management using the **Context API**.

* **Key Concepts Covered:**
  * Creating a custom Context object using `createContext()`.
  * Building a custom `ContextProvider` wrapper component to encapsulate shared state (`useState`).
  * Consuming context values across component trees with `useContext()`.
  * Passing values (`username`, `setusername`) seamlessly without prop drilling.

#### 🛠️ How to run locally:

```bash
cd React/context-api
npm install
npm run dev
```

---

### 🌓 8. Theme Switcher with Context API & Tailwind CSS (`React/theme-switcher`)

<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="30" height="30"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" alt="Vite" width="30" height="30"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" width="30" height="30"/>
</p>

A feature-complete Light/Dark Theme Switcher application built with **React 19**, **Tailwind CSS**, and an **improved, modern Context API pattern**.

* **Key Concepts & Modern Context API Pattern:**
  * **New Context Setup (`src/context/theme.js`):** Defines initial state schema directly in `createContext({ theme: "light", darkTheme: () => {}, lightTheme: () => {} })`.
  * **Exported Provider:** Exporting `ThemeContext.Provider` as `ThemeProvider` for cleaner context wrapper syntax.
  * **Custom Hook (`useTheme`):** Encapsulating `useContext(ThemeContext)` in a custom `useTheme()` hook for clean, single-import consumption across components.
  * **DOM Synchronization with `useEffect`:** React side-effect hook automatically syncs theme state (`"light"` / `"dark"`) with the root `<html>` element's class list to trigger Tailwind's `dark:...` utility classes seamlessly.
  * **Beginner-Friendly React Code:** `useState` hook manages theme state, and `toggleTheme` click handler drives smooth UI transitions.

#### 🛠️ How to run locally:

```bash
cd React/theme-switcher
npm install
npm run dev
```

---

### 📝 9. Task Master: Todo App with Context API & Local Storage (`React/todo-local-storage`)

<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="30" height="30"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" alt="Vite" width="30" height="30"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" width="30" height="30"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" width="30" height="30"/>
</p>

A full-featured task management web application built with **React 19**, **Context API**, and **Browser LocalStorage Persistence**.

* **Key Concepts & Features:**
  * **LocalStorage Synchronization:** Initial state loading from `localStorage` and side-effect syncing via `useEffect` whenever state updates.
  * **Full CRUD Operations:** `addtodo`, `updatetodo`, `deletetodo`, and `toogletodo` methods supplied via custom Context (`useTodo`).
  * **Inline Editing & Toggle:** Editable inputs toggleable per todo item with save/lock controls and completion checkboxes.
  * **Task Filtering & Counter:** Filter tasks by **All**, **Active**, or **Completed** statuses with dynamic count badges and empty states.
  * **Modern UI:** Built with custom glassmorphism design system, dark mode palette, and smooth micro-animations.

#### 🛠️ How to run locally:

```bash
cd React/todo-local-storage
npm install
npm run dev
```

---

## 🛠️ Tech Stack & Tools

* **Frontend:** React, React Router DOM, JavaScript (ES6+), HTML5, CSS3, Vite, Tailwind CSS
* **Backend (Upcoming):** Node.js, Express.js
* **Database (Upcoming):** MongoDB, Mongoose
* **Version Control:** Git, GitHub

---

💻 *Maintained with dedication by [Harsh Pratap Singh Rathore](https://github.com/harsh-pratap-singh-rathore)*
