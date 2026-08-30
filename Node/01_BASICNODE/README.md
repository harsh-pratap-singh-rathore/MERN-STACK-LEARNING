# 🟢 Basic Express.js Server (`Node/01_BASICNODE`)

<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" width="35" height="35"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" alt="Express" width="35" height="35"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="35" height="35"/>
</p>

A foundational backend server demonstrating core **Node.js** and **Express.js** concepts, environment variable integration with **dotenv**, and modern **ES Module** (`"type": "module"`) syntax.

---

## 💡 Key Concepts & Learning Highlights

### 1. ⚙️ ES Modules in Node.js
Configured `"type": "module"` in `package.json` to utilize modern JavaScript `import` / `export` syntax instead of CommonJS `require()`:
```json
{
  "name": "01_basicnode",
  "version": "1.0.0",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  }
}
```

### 2. 🔐 Environment Variables with `dotenv`
* Used `import 'dotenv/config'` to automatically preload environment variables from `.env` on server startup.
* Accessed dynamically via `process.env.PORT` to avoid hardcoding production configurations.

### 3. 🌐 Express Server & Route Handlers (`index.js`)
* Initialized Express instance with `const app = express()`.
* Defined HTTP GET endpoints:
  * `/`: Returns a plain text response `"Hello World"`.
  * `/login`: Returns an HTML response `<h1>This is Login Page</h1>`.
* Started HTTP server listener with `app.listen(process.env.PORT, () => ...)`.

```javascript
import 'dotenv/config'
import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/login', (req, res) => {
    res.send('<h1>This is Login Page</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})
```

---

## 🛠️ How to Run Locally

### 1. Create `.env` file
```env
PORT=4000
```

### 2. Install & Start Server
```bash
# Navigate to directory
cd Node/01_BASICNODE

# Install dependencies
npm install

# Start server
npm start
```

*Server will run on `http://localhost:4000`*
