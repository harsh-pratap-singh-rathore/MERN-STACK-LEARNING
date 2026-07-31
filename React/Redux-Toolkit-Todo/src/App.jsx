import './App.css'
import AddTodo from './Components/AddTodo'
import Todo from './Components/Todo'

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Redux Toolkit Todo App</h1>
      <AddTodo />
      <Todo />
    </div>
  )
}

export default App
