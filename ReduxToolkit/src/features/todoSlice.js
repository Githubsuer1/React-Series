import { createSlice, nanoid } from "@reduxjs/toolkit";

// initial state
const initialState = {
    todos:[
        {
            id:1,
            text:"First todo item..",
        },
    ]
}

// slices contains the name, state and the reduceres to modify the state.
export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((item)=>item.id !== action.payload)
        },
        editTodo:(state,action)=>{
            state.todos = state.todos.map((todo)=> (todo.id === action.payload.id) ? {...action.payload,text:action.payload.text}: todo )
        }
    }
})

// exporting the individual reducers
export const {addTodo, removeTodo, editTodo}  = todoSlice.actions

// exporting the 
export default todoSlice.reducer