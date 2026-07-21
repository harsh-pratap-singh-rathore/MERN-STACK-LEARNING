import { useState } from "react"

function App() {
  const [count, setcount] = useState(0)
  function add() {
    if (count >= 20) {
      alert("Cant go more than 20")
    }
    else {
      setcount(count + 1)
    }

  }
  function sub() {
    if (count <= 0) {
      alert("Cant go below 0")
    }
    else {
      setcount(count - 1)
    }
  }

  return (
    <>
      <h1>This is a basic counter App</h1>
      <p>Count : {count}</p>
      <button onClick={add} id="add">+</button>
      <br></br>
      <button onClick={sub} id="sub">-</button>
    </>
  )
}

export default App
