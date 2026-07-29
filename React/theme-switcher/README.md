# 🌓 React + Tailwind CSS Theme Switcher (Context API)

A sleek, modern React application demonstrating Theme Switching (Light Mode & Dark Mode) using **Tailwind CSS** and **React Context API** with `useState` and `useEffect`.

---

## ✨ Features

- 🌙 **Dark Mode & Light Mode Toggle**: Smooth transition between light and dark themes.
- 🎨 **Tailwind CSS Styling**: Modern glassmorphism card design with badges, rating, product details, and custom action buttons.
- ⚛️ **Modern Context API Pattern**: Uses `createContext`, `ThemeProvider`, and custom `useTheme()` hook for global theme access.
- 🔄 **Automatic DOM Synchronization**: `useEffect` dynamically toggles the `dark` class on the root `<html>` tag to trigger Tailwind's `dark:...` utility classes.

---

## 📁 Project Structure

```
theme-switcher/
├── src/
│   ├── context/
│   │   └── theme.js       # React Context API setup (ThemeContext, ThemeProvider, useTheme)
│   ├── App.jsx            # Main App component with UI Card & Theme Toggle
│   ├── index.css          # Tailwind CSS styles & transitions
│   └── main.jsx           # App entry point
├── index.html             # HTML entry with Tailwind configuration
├── package.json           # Dependencies
└── README.md              # Project documentation
```

---

## 💡 How Context API & Theme Switching Works

### 1. Context Creation (`src/context/theme.js`)
```javascript
import { useContext, createContext } from "react";

export const ThemeContext = createContext({
    theme: "light",
    darkTheme: () => {},
    lightTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => {
    return useContext(ThemeContext);
};
```

### 2. State & DOM Update (`src/App.jsx`)
```javascript
const [theme, setTheme] = useState("light");

const toggleTheme = () => {
  setTheme(theme === "light" ? "dark" : "light");
};

useEffect(() => {
  const htmlElement = document.querySelector("html");
  htmlElement.classList.remove("light", "dark");
  htmlElement.classList.add(theme);
}, [theme]);
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---

## 🚀 Tech Stack

- **React 19**
- **Vite**
- **Tailwind CSS**
- **JavaScript (ES6+)**
