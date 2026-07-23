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
│   ├── Counter-App/      # Interactive React Counter application using useState hooks & boundary validation
│   ├── bg-changer/       # Dynamic background changer utilizing useState and inline styles
│   ├── password-generator/# SecureKey: Password generator using hooks (useState, useCallback, useEffect, useRef) & glassmorphic CSS UI
│   └── reactprops/       # Reusable Card components utilizing React props and styled with Tailwind CSS v4
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
  - [ ] Context API (`useContext`) & `useReducer`
  - [ ] Routing with React Router
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

## 🛠️ Tech Stack & Tools

* **Frontend:** React, JavaScript (ES6+), HTML5, CSS3, Vite
* **Backend (Upcoming):** Node.js, Express.js
* **Database (Upcoming):** MongoDB, Mongoose
* **Version Control:** Git, GitHub

---

💻 *Maintained with dedication by [Harsh Pratap Singh Rathore](https://github.com/harsh-pratap-singh-rathore)*
