import { useState } from "react"
import { useTodo } from "../Contexts"

function TodoForm() {
  const [todo, setTodo] = useState("")
  const { addtodo } = useTodo()

  const add = (e) => {
    e.preventDefault()

    if (!todo.trim()) return

    addtodo({ todo: todo.trim(), completed: false })
    setTodo("")
  }

  return (
    <form onSubmit={add} className="todo-form">
      <input
        type="text"
        placeholder="Write your next task..."
        className="todo-input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="todo-add-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        <span>Add</span>
      </button>
    </form>
  )
}

export default TodoForm
