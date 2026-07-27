import ContextProvider from "./context/contextprovider"
// import UserContext from "./context/usercontext"
import Home from "./home"
function App() {

  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  )
}

export default App
