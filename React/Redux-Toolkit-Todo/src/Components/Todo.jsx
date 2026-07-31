import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todos/todoslice'
function Todo() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <div className="todo-list-container">
            <h2 className="todo-list-heading">Todos</h2>
            <ul className="todo-list">
                {todos && todos.length > 0 ? (
                    todos.map((todo) => (
                        <li key={todo.id} className="todo-item">
                            <span className="todo-text">{todo.text}</span>
                            <button
                                className="delete-btn"
                                onClick={() => {
                                    dispatch(removeTodo(todo.id))
                                }}
                            >
                                Delete
                            </button>
                        </li>
                    ))
                ) : (
                    <p className="empty-state">No todos found. Add one above!</p>
                )}
            </ul>
        </div>
    )
}

export default Todo
