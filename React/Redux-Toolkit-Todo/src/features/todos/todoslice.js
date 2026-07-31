import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState= {
    todos : [{
        id : nanoid(),
        text : "Hello World"
    }]
}

export const todoSlice = createSlice({
    name : "todo",
    initialState : initialState,
    reducers : {
        addTodo : (state , action )=> {
            state.todos.push({
                id : nanoid(),
                text : action.payload
            })
        } ,
        removeTodo : (state , action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        }
    }
    
})

export default todoSlice.reducer;
export const {addTodo , removeTodo} = todoSlice.actions