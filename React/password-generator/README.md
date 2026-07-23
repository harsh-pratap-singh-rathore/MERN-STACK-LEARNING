# 🔑 React Password Generator

A clean and interactive random password generation web application built with **React** and **Vite**, utilizing standard React hooks for reactivity and state management.

---

## ✨ Features

- **⚙️ Custom Parameters:** Adjust password length (between 8 and 20) and toggle numbers and special characters.
- **📋 Clipboard Copy:** Select and copy generated passwords directly to the clipboard.
- **⚡ Real-time Updates:** Generates a new password instantly when parameters are updated.

---

## 🏗️ Core React Concepts Applied

1. **`useState` Hook:** Manages states for password length, number toggling, character toggling, and output value.
2. **`useCallback` Hook:** Memoizes generation and clipboard copy operations to optimize performance and prevent redundant recreation.
3. **`useEffect` Hook:** Automatically triggers the password generation function whenever dependencies (length, numbers, special characters) update.
4. **`useRef` Hook:** Accesses and selects the input value DOM node programmatically during copying.

---

## 🚀 How to Run Locally

1. **Navigate to the directory:**
   ```bash
   cd React/password-generator
   ```

2. **Install node modules:**
   ```bash
   npm install
   ```

3. **Launch the development server:**
   ```bash
   npm run dev
   ```
