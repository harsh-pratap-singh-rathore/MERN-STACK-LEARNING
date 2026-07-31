import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todos/todoslice'
export const store = configureStore({
    reducer: todoReducer
})
