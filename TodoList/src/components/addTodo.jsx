import { useState } from "react"
import useTodo from "../context/TodoContext"

function AddTodo() {

  const {addTodo} = useTodo()
  const [todo,setTodo] = useState("")

  const handleSubmit = (event)=>{
    event.preventDefault()
    if (!todo) return
    addTodo({todo:todo,completed:false})
    setTodo("")
  }
  return (
    <form onSubmit={handleSubmit} className="flex">
        <input 
          type="text" 
          placeholder="Write Your Todo...."
          onChange={(event)=>setTodo(event.target.value)} 
          value={todo}
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none bg-white text-red-500 py-1.5"
        />

        <button 
          type="submit"
          className="bg-green-500 rounded-r-lg px-3 py-1 text-white shrink-0"
        >Add</button>
    </form>
  )
}

export default AddTodo