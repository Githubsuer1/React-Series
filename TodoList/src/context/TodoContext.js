import { createContext,useContext } from "react";

const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Python",
            completed:false
        },
    ],
    addTodo:(todo)=>{},
    removeTodo:(id)=>{},
    editTodo:(id,todo)=>{},
    toggleComplete:(id)=>{},
})

const useTodo = ()=>{
    return useContext(TodoContext)
}

export const  TodoProvider = TodoContext.Provider
export default useTodo