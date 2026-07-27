import { useState } from "react";
import UserContext from "./usercontext";
function ContextProvider({ children }) {
  const [username, setusername] = useState("Harsh");
  return (
    <UserContext.Provider value={{ username:username, setusername }}>
      {children}
    </UserContext.Provider>
  );
}
        
export default ContextProvider