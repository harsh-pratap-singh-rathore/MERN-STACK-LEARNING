# 🍃 Data Modeling with Mongoose & MongoDB (`Node/mongoose`)

<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB" width="35" height="35"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" width="35" height="35"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" alt="Express" width="35" height="35"/>
  &nbsp;
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="35" height="35"/>
</p>

A dedicated deep-dive into **Data Modeling in NoSQL databases using Mongoose (ODM)**. This module focuses on schema architecture, type constraints, relational document references (`ObjectId` + `ref`), embedded sub-schemas, enum validations, and automated timestamp tracking across two distinct business domains: a hierarchical Todo System and an E-Commerce Architecture.

---

## 🗂️ Project Structure

```
Node/mongoose/
├── models/
│   ├── todos/
│   │   ├── users.model.js       # User identity schema with validation constraints
│   │   ├── todo.model.js        # Main Todo schema with relational references
│   │   └── sub-todo.model.js    # Sub-task document schema
│   └── ecommerece/
│       ├── user.model.js        # E-commerce customer profile schema
│       ├── category.model.js    # Product category taxonomy schema
│       ├── product.model.js     # Product catalog schema with category & owner refs
│       └── order.model.js       # Order schema with embedded item sub-schemas & status enums
├── package.json
└── README.md
```

---

## 💡 Core Concepts & Schema Design

### 1. 📋 Domain 1: Hierarchical Todo Data Modeling (`models/todos/`)

#### 👤 **User Model (`users.model.js`)**
Enforces strict string sanitization and uniqueness at the database layer:
* `username`: `{ type: String, lowercase: true, required: true, unique: true }`
* `email`: `{ type: String, lowercase: true, required: true, unique: true }`
* `password`: `{ type: String, lowercase: true, required: true, unique: true }`
* `{ timestamps: true }`: Automatically injects `createdAt` and `updatedAt` ISO date fields.

#### 📝 **Todo Model (`todo.model.js`)**
Demonstrates 1-to-Many relational references and nested child array references:
* `content`: `{ type: String, required: true }`
* `completed`: `{ type: Boolean, default: false }`
* `createdBy`: `{ type: mongoose.Schema.Types.ObjectId, ref: "User" }` (Relational link to the User model)
* `subtodo`: `[{ type: mongoose.Schema.Types.ObjectId, ref: "subtodo" }]` (Array of ObjectId pointers to Sub-Todo documents)

#### 📌 **Sub-Todo Model (`sub-todo.model.js`)**
Modular sub-task document schema linking back to the owning user.

---

### 2. 🛒 Domain 2: E-Commerce Architecture (`models/ecommerece/`)

#### 🏷️ **Category Model (`category.model.js`)**
* `name`: `{ type: String, required: true }`

#### 📦 **Product Model (`product.model.js`)**
* `name`: `{ type: String, required: true }`
* `description`: `{ type: String, required: true }`
* `productImage`: `{ type: String }`
* `price`: `{ type: Number, default: 0, required: true }`
* `stock`: `{ type: Number, default: 0 }`
* `category`: `{ type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }`
* `owner`: `{ type: mongoose.Schema.Types.ObjectId, ref: "User" }`

#### 🛍️ **Order Model (`order.model.js`)**
Utilizes embedded sub-document schemas and enum constraint rules:
* **Embedded Item Sub-Schema (`orderItemSchema`):**
  ```javascript
  const orderItemSchema = new mongoose.Schema({
      productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true
      },
      quantity: {
          type: Number,
          required: true,
          default: 1
      }
  });
  ```
* **Order Status Enum:** Restricts state values to predefined lifecycle stages:
  ```javascript
  status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIVERED"],
      default: "PENDING"
  }
  ```

---

## 🔑 Key Mongoose Takeaways

| Feature | Syntax / Method | Purpose |
| :--- | :--- | :--- |
| **Schema Instantiation** | `new mongoose.Schema({ ... }, { timestamps: true })` | Defines structure, validations, and auto-timestamps |
| **Relational Reference** | `{ type: mongoose.Schema.Types.ObjectId, ref: "ModelName" }` | Foreign key reference in MongoDB NoSQL |
| **Embedded Sub-Schema** | `orderItems: { type: [orderItemSchema] }` | Embeds nested structured documents directly within parent record |
| **Enum Constraints** | `enum: ["PENDING", "CANCELLED", "DELIVERED"]` | Restricts allowed string values at validation time |
| **Model Compilation** | `export const Model = mongoose.model("ModelName", schema)` | Compiles schema into an active Mongoose Model |

---

## 🛠️ Setup & Installation

```bash
cd Node/mongoose
npm install
```
