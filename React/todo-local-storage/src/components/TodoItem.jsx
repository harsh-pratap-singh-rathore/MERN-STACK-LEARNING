import { useState } from "react"
import { useTodo } from "../Contexts"

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const { updatetodo, deletetodo, toogletodo } = useTodo()

  const editTodo = () => {
    if (!todoMsg.trim()) return
    updatetodo(todo.id, { ...todo, todo: todoMsg.trim() })
    setIsTodoEditable(false)
  }

  const toggleCompleted = () => {
    toogletodo(todo.id)
  }

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""} ${isTodoEditable ? "editing" : ""}`}>
      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleCompleted}
        />
        <span className="checkmark"></span>
      </label>

      <input
        type="text"
        className="todo-text-input"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      <div className="todo-actions">
        {/* Edit / Save Button */}
        <button
          className="todo-btn edit-btn"
          onClick={() => {
            if (todo.completed) return
            if (isTodoEditable) {
              editTodo()
            } else {
              setIsTodoEditable((prev) => !prev)
            }
          }}
          disabled={todo.completed}
          title={isTodoEditable ? "Save changes" : "Edit task"}
        >
          {isTodoEditable ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          )}
        </button>

        {/* Delete Button */}
        <button
          className="todo-btn delete-btn"
          onClick={() => deletetodo(todo.id)}
          title="Delete task"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default TodoItem
