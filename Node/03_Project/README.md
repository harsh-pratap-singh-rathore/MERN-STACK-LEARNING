# 🚀 Production Backend Architecture & Media Management (`Node/03_Project`)

<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" width="35" height="35"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" alt="Express" width="35" height="35"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB" width="35" height="35"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="35" height="35"/>
  &nbsp;
  <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" alt="JWT" height="35"/>
  &nbsp;
  <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" alt="Cloudinary" height="35"/>
</p>

A production-grade backend engine engineered using **Node.js**, **Express.js**, **MongoDB Atlas**, **Mongoose**, **JWT**, **Bcrypt**, **Multer**, and **Cloudinary**. This project establishes an industry-standard backend foundation featuring modular database connectivity, strict data schemas, cryptographic password hashing, access/refresh token workflows, centralized error handling, standardized API responses, and a robust two-tier file upload pipeline.

---

## 🏗️ Project Architecture & Directory Structure

```text
Node/03_Project/
├── public/
│   └── temp/                  # Temporary staging directory for incoming file uploads (.gitkeep)
├── src/
│   ├── Controllers/
│   │   └── User.controller.js # User registration, login, logout & token refresh logic
│   ├── db/
│   │   └── index.js           # Modular MongoDB connection with connection instance logging
│   ├── Middlewares/
│   │   ├── auth.middleware.js # JWT verification middleware protecting private endpoints
│   │   └── multer.js          # Multer diskStorage middleware for local multipart handling
│   ├── Models/
│   │   ├── user.model.js      # User schema, bcrypt hooks, JWT generators & methods
│   │   └── video.model.js     # Video schema with mongoose-aggregate-paginate-v2
│   ├── Routes/
│   │   └── User.routes.js     # User routing declarations (/register, /login, /logout, etc.)
│   ├── utils/
│   │   ├── ApiError.js        # Standardized custom error class extending Error
│   │   ├── ApiResponse.js      # Uniform API response structure class
│   │   ├── asyncHandler.js    # Higher-Order async wrapper for route controllers
│   │   └── cloudinary.js      # Cloudinary SDK wrapper with local file cleanup
│   ├── app.js                 # Express application configuration & global middlewares
│   ├── constants.js           # Application constants (e.g., DB_NAME)
│   └── index.js               # Application entry point & server bootstrap
├── .env                       # Environment variables (Ignored in VCS)
├── .env.sample                # Sample environment template
├── .gitignore                 # Git ignore rules
├── package.json               # Project manifest and scripts
└── README.md                  # Project documentation
```

---

## ⚡ Key Modules & Architectural Highlights

### 1. 🗄️ Modular Database Connection (`src/db/index.js`)
* **Async Connection:** Encapsulated MongoDB connection inside an isolated `connectDB` asynchronous function.
* **Connection Host Logging:** Extracts `connectionInstance.connection.host` upon successful connection to verify the active cluster target.
* **DNS Resolution Fix:** Solves common Windows / ISP `querySrv ECONNREFUSED` issues with MongoDB Atlas `mongodb+srv://` connection strings by programmatically configuring public DNS servers (`8.8.8.8`, `8.8.4.4`) via Node's native `node:dns` module in `src/index.js`.
* **Fail-Fast Process Termination:** Catches connection errors and exits the process immediately with `process.exit(1)` to prevent running a broken server.

```javascript
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Connection Successful on HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("ERROR IS :", error);
        process.exit(1);
    }
};

export default connectDB;
```

---

### 2. 🛡️ Express Middleware Pipeline (`src/app.js`)
Configured industry-standard middlewares to ensure data sanitization, size throttling, and cross-origin security:
* **`cors`**: Secure cross-origin resource sharing configured with `process.env.CORS_ORIGIN` and `credentials: true`.
* **`express.json({ limit: "16kb" })`**: Limits incoming JSON request payload sizes to defend against Denial-of-Service (DoS) attacks.
* **`express.urlencoded({ extended: true, limit: "16kb" })`**: Parses complex URL-encoded data including nested objects.
* **`express.static("public")`**: Serves static assets such as images and temp uploads.
* **`cookie-parser`**: Enables reading and writing secure HTTP-only cookies from user requests (`req.cookies`).
* **Global Error Middleware**: Intercepts unhandled operational errors and formats `ApiError` instances into clean, predictable JSON responses.

---

### 3. ⚠️ Centralized Custom Error Handling (`src/utils/ApiError.js`)
A standardized error class extending JavaScript's native `Error` to ensure predictable error payloads across all endpoints:
* Consistent properties: `statusCode`, `data: null`, `message`, `success: false`, and `errors: []`.
* Automated stack trace tracking using `Error.captureStackTrace(this, this.constructor)`.

```javascript
class ApiError extends Error {
    constructor(statusCode, message = "Something went wrong", errors = [], stack = "") {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
export { ApiError };
```

---

### 4. ✨ Standardized API Response (`src/utils/ApiResponse.js`)
Enforces a uniform JSON structure across all successful controller responses:
* Fields: `{ statusCode, data, message, success }`
* Dynamic boolean calculation: `this.success = statusCode < 400`.

---

### 5. 🔄 Asynchronous Controller Wrapper (`src/utils/asyncHandler.js`)
Higher-Order Function (HOF) wrapping async controller methods. Eliminates repetitive `try/catch` boilerplate across routes by automatically forwarding promise rejections to Express's global error handler:

```javascript
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    };
};
export { asyncHandler };
```

---

### 6. 👤 Production Data Models & Schemas (`src/Models/`)

#### 👤 **User Model (`user.model.js`)**
* **Strict Indexing & Sanitization:** `username` (indexed, lowercase, trim), `email` (unique, lowercase, trim), `fullName` (indexed, trim).
* **Media Assets:** `avatar` (URL from Cloudinary, required), `coverImage` (URL from Cloudinary, optional).
* **Relational Watch History:** Array of references linking to `Video` model `[{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }]`.
* **Password Hashing Pre-Save Hook (`bcrypt`):**
  * Automatically hashes user password with 10 salt rounds before persisting to database.
  * Employs `this.isModified("password")` guard clause so unmodified passwords are not re-hashed during profile updates.
* **Password Verification Method:** Custom instance method `userSchema.methods.isPasswordCorrect` utilizing `bcrypt.compare`.
* **JWT Access & Refresh Token Methods:**
  * `generateAccessToken()`: Generates short-lived JWT holding identity payload (`_id`, `email`, `username`, `fullName`).
  * `generateRefreshToken()`: Generates long-lived JWT containing only `_id` to power refresh token rotation strategies.

#### 🎥 **Video Model (`video.model.js`)**
* Stores video metadata (`videoFile`, `thumbnail`, `title`, `description`, `duration`, `views`, `isPublished`).
* Relational ownership: `owner` referencing `User` document.
* **Pagination Plugin:** Integrated `mongoose-aggregate-paginate-v2` enabling high-performance paginated queries over complex aggregation pipelines.

---

### 7. 📤 File Uploading Pipeline (Multer + Cloudinary)

```text
[ Client Request with multipart/form-data ]
                    │
                    ▼
[ Multer Middleware (DiskStorage) ] ──> Stores file locally in `./public/temp`
                    │
                    ▼
[ Cloudinary Upload Utility ] ─────────> Uploads file from `./public/temp` to Cloudinary CDN
                    │
           ┌────────┴────────┐
        (Success)         (Failure)
           │                 │
           ▼                 ▼
[ Returns Cloudinary URL ]  [ Removes temp file via fs.unlinkSync ]
```

#### 📁 **Multer Disk Storage Middleware (`src/Middlewares/multer.js`)**
Intersects incoming `multipart/form-data` uploads and stages incoming files to `./public/temp`:
```javascript
import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

export const upload = multer({ storage });
```

#### ☁️ **Cloudinary Upload Utility (`src/utils/cloudinary.js`)**
* Connects to Cloudinary using runtime environment credentials.
* Deletes the local temporary file (`fs.unlinkSync`) immediately after successful or failed upload to prevent disk storage leaks.

---

### 8. 🔒 JWT Authentication Middleware (`src/Middlewares/auth.middleware.js`)

Secures private routes by verifying JSON Web Tokens from either incoming request cookies or the standard `Authorization` header:

```javascript
export const verifyJWT = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            throw new ApiError(401, "Unauthorized request");
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken");

        if (!user) {
            throw new ApiError(401, "Invalid Access Token");
        }

        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token");
    }
});
```

---

## 📡 API Endpoints Reference (`/api/v1/users`)

| Method | Endpoint | Description | Auth Required | Body / Format |
| :--- | :--- | :--- | :---: | :--- |
| `POST` | `/register` | Register new user with avatar & coverImage | ❌ | `multipart/form-data` |
| `POST` | `/login` | Authenticate user & issue Access/Refresh tokens in HTTP-only cookies | ❌ | `JSON` or `form-data` |
| `POST` | `/logout` | Invalidate user session & clear cookies | ✅ (`verifyJWT`) | None |
| `POST` | `/refresh-token` | Rotate & issue fresh Access and Refresh tokens | ❌ / Cookie | Cookie or `{ refreshToken }` |

---

## 🛠️ Environment Variables Configuration (`.env`)

Create a `.env` file in the root of `Node/03_Project/`:

```env
PORT=8000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net
CORS_ORIGIN=*

ACCESS_TOKEN_SECRET=your_access_token_secret_key_here
ACCESS_TOKEN_EXPIRY=1d

REFRESH_TOKEN_SECRET=your_refresh_token_secret_key_here
REFRESH_TOKEN_EXPIRY=10d

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

---

## 💻 Installation & Local Setup

```bash
# 1. Navigate to project folder
cd Node/03_Project

# 2. Install dependencies
npm install

# 3. Start development server with auto-reload (nodemon)
npm run dev
```

---

## 📦 Installed Dependencies

* **`express`**: Fast, minimalist web framework.
* **`mongoose`**: Elegant MongoDB object modeling.
* **`mongoose-aggregate-paginate-v2`**: Advanced aggregation pagination.
* **`bcrypt`**: Robust password hashing.
* **`jsonwebtoken`**: Industry-standard authentication tokens.
* **`multer`**: Multipart form data & file upload handling.
* **`cloudinary`**: Cloud media asset storage and optimization.
* **`cookie-parser`**: Cookie parsing middleware.
* **`cors`**: Cross-Origin Resource Sharing.
* **`dotenv`**: Environment variable management.
* **`nodemon`** *(devDependencies)*: Auto-restarts server upon file changes.
