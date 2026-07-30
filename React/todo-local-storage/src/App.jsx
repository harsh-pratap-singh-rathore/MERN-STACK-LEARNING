import { useState, useEffect } from "react"
import { TodoProvider } from "./Contexts"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"

function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const savedTodos = localStorage.getItem("todos")
      return savedTodos ? JSON.parse(savedTodos) : []
    } catch (e) {
      console.error("Failed to parse todos from localStorage:", e)
      return []
    }
  })

  const [filter, setFilter] = useState("all") // "all" | "active" | "completed"

  // Sync state with LocalStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  // Context CRUD handlers
  const addtodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updatetodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    )
  }

  const deletetodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toogletodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      )
    )
  }

  // Filtered todos based on active tab
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed
    if (filter === "completed") return todo.completed
    return true
  })

  const activeCount = todos.filter((t) => !t.completed).length

  return (
    <TodoProvider value={{ todos, addtodo, updatetodo, deletetodo, toogletodo }}>
      <div className="app-container">
        {/* Header */}
        <header className="app-header">
          <h1 className="app-title">Task Master</h1>
          <p className="app-subtitle">Stay organized and get things done with Local Storage</p>
        </header>

        {/* Input Form */}
        <TodoForm />

        {/* Filter and Stats Bar */}
        <div className="filter-bar">
          <div className="filter-tabs">
            <button
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All ({todos.length})
            </button>
            <button
              className={`filter-btn ${filter === "active" ? "active" : ""}`}
              onClick={() => setFilter("active")}
            >
              Active ({activeCount})
            </button>
            <button
              className={`filter-btn ${filter === "completed" ? "active" : ""}`}
              onClick={() => setFilter("completed")}
            >
              Completed ({todos.length - activeCount})
            </button>
          </div>

          <div className="stats-text">
            {activeCount === 0 && todos.length > 0
              ? "🎉 All tasks completed!"
              : `${activeCount} task${activeCount === 1 ? "" : "s"} left`}
          </div>
        </div>

        {/* Todo List */}
        <div className="todo-list">
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo) => (
              <div key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))
          ) : (
            <div className="empty-state">
              <svg className="empty-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="9" y1="15" x2="15" y2="15"></line>
              </svg>
              <div className="empty-title">
                {filter === "all"
                  ? "No tasks yet!"
                  : filter === "active"
                  ? "No active tasks!"
                  : "No completed tasks!"}
              </div>
              <div className="empty-desc">
                {filter === "all" ? "Add a new task above to get started." : "Switch filters to view tasks."}
              </div>
            </div>
          )}
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
