// mport React from 'react'
import { useContext } from 'react'
import UserContext from './context/usercontext'
function Home() {
    const {username} = useContext(UserContext)
  return (
    <div>
        <h1>Hello {username}</h1>
        </div>
  )
}

export default Home