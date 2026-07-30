import {useContext , createContext} from 'react'
export const TodoContext = createContext(
    {
        todos: [{
            id : 1,
            todo : "TODO MSG",
            completed : false
        }
        ],
        addtodo : (todo) => {}, 
        updatetodo : (id , todo) => {},
        deletetodo : (id) => {},
        toogletodo : (id) => {}
    }
)

export const TodoProvider = TodoContext.Provider

export default function useTodo(){
    return useContext(TodoContext)
}

