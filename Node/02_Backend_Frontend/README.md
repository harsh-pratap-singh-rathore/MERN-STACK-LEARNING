# 🔗 Full-Stack Connection: Frontend & Backend (`Node/02_Backend_Frontend`)

<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="35" height="35"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" alt="Express" width="35" height="35"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" alt="Vite" width="35" height="35"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" width="35" height="35"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="35" height="35"/>
</p>

A full-stack demonstration project built to master **connecting a React frontend with an Express backend**, understanding **CORS (Cross-Origin Resource Sharing)**, configuring **Vite Dev Server Proxy**, and making HTTP requests using **Axios**.

---

## 💡 Key Concepts & Learning Highlights

### 1. 🌐 Connecting Frontend with Backend
* Built a lightweight **Express backend server** running on `http://localhost:4000` supplying a JSON API endpoint (`/api/jokes`).
* Built a **Vite + React frontend app** running on `http://localhost:5173` that consumes the API data asynchronously and renders it dynamically on the UI.

### 2. 🛡️ Understanding CORS (Cross-Origin Resource Sharing)
* **The Problem:** Browsers enforce the Same-Origin Policy (SOP). When a web app at `http://localhost:5173` (Origin A) tries to fetch data from `http://localhost:4000` (Origin B) via direct URL, the browser blocks the request with a CORS error unless explicit CORS headers are enabled on the backend server.
* **The Solution (Proxying):** Instead of exposing backend endpoints or hardcoding server origins in frontend code, we use Vite's development proxy. The browser sends requests to `http://localhost:5173/api/...` (same origin), and the Vite development server forwards the request to `http://localhost:4000/api/...` behind the scenes (server-to-server calls do not suffer from browser CORS restrictions).

### 3. ⚙️ Vite Proxy Configuration (`vite.config.js`)
Configured the `proxy` property inside `server` object in `vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:4000'
    }
  },
  plugins: [react()],
})
```

### 4. 📡 Data Fetching with Axios (`App.jsx`)
Used **Axios** to fetch data inside React's `useEffect` hook:
* **Dependency Array `[]`:** Ensured the effect runs only **once** on component mount to prevent infinite render loops.
* **Response & Error Handling:** Captured response payload (`response.data`) and stored it in React state (`setjokes`), with proper `.catch()` logging.
* **Safe Rendering:** Dynamically iterated through `jokes` array using `.map()` with unique `key` props.

```javascript
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [jokes, setjokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setjokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <h1>Jokes count : {jokes.length}</h1>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  )
}

export default App
```

---

## 🛠️ How to Run Locally

### 1. Start Backend Server
```bash
cd backend
npm install
npm start
```
*Backend runs on `http://localhost:4000`*

### 2. Start Frontend Dev Server
```bash
cd frontend/vite-project
npm install
npm run dev
```
*Frontend runs on `http://localhost:5173` (or `5174` if 5173 is occupied)*
