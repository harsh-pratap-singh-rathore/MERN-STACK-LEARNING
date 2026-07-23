# 🔑 SecureKey — Modern Password Generator

An interactive, premium password generation web application built with **React** and **Vite**, featuring a glassmorphism design, real-time strength validation, custom length controllers, and stateful clipboard actions.

---

## ✨ Features

- **🛡️ Custom Parameter Rules:** Customize passwords with numbers and special symbols on-the-fly.
- **📊 Real-time Strength Metrics:** Auto-evaluates complexity (Weak, Medium, Strong, Very Secure) using color-coded visual indicator bars.
- **✨ Premium UI/UX:** Styled using pure Vanilla CSS featuring glassmorphism backdrops, glowing shadows, hover scaling, and transition keyframes.
- **📋 Direct Clipboard Copy:** Instant one-click copy with state-changing SVG checkmark feedback and slide-in toast notifications.

---

## 🏗️ Core React Concepts Applied

1. **`useState` Hook:** For reactive handling of length range, character options, output display, copying states, and toast presentation.
2. **`useCallback` Hook:** Memoizes generation and copy algorithms to optimize performance and prevent redundant re-renders.
3. **`useEffect` Hook:** Triggers key generation cycles automatically whenever options change.
4. **`useRef` Hook:** Reference container to handle DOM interaction for selecting generated text programmatically.

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

4. **Compile production build:**
   ```bash
   npm run build
   ```
