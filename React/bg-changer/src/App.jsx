import { useState } from "react"

function App() {
  const [color , setColor] = useState("cyan")
  return (
    <div style={{backgroundColor: color, height: "98vh" , borderRadius: "40px"}}>
      <div style={{marginLeft: "40px"}}>
        <button onClick={()=> setColor("red")}
        style={{backgroundColor:"red", color:"white", borderRadius:"40px", position: "center"}}>
          Red</button>
        <button onClick={()=> setColor("green")}
        style={{backgroundColor:"green", color:"white", borderRadius:"40px", position: "center"}}>
          Green</button>
        <button onClick={()=> setColor("blue")}
        style={{backgroundColor:"blue", color:"white", borderRadius:"40px", position: "center"}}>
          Blue</button>
      </div>
    </div>
  )
}
export default App
