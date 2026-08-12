import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function App() {

const [jokes , setjokes] = useState([])

useEffect(() => {
  axios.get('/api/jokes')
    .then((response) => {
      setjokes(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
}, [])

  return (
    <>
      <h1>Jokes count : {jokes.length}</h1>
      {jokes.map((joke , index )=>(
        <div key={joke.id}>
        <p>{joke.content}</p>
      </div>
      ))}
      
    </>
  )
}

export default App
