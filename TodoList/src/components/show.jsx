import { useState } from "react"
import useTodo from "../context/TodoContext"


function Show( { todo } ) {
 
  const [isTodoEditable,setTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const {editTodo, removeTodo, toggleComplete} = useTodo()




  const edit = ()=>{
    editTodo(todo.id, {...todo,todo:todoMsg})
    setTodoEditable(false)
  }

  const toggleCompleted = ()=>{
    toggleComplete(todo.id)

  }


  return (
    <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black 
    ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"

    }`}>
      
      <input 
        type="checkbox" 
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      
      <input 
        type="text" 
        className={`border outline-none w-full bg-transparent rounded-lg 
        ${isTodoEditable ? "border-black/10 px-2": "border-transparent"} 
        ${todo.completed ? "line-through" : ""} `} 
        value={todoMsg} 
        onChange={(event)=>setTodoMsg(event.target.value)} 
        readOnly ={!isTodoEditable} 
      />

      {/* Edit button: save button */}
      <button 
        className="inline-flex p-2 rounded-lg text-sm font-bold border border-black/10 
        justify-center items-center bg-purple-500 hover:bg-gray-100 shrink-0 disabled:opacity-50" 
        onClick={()=>{
            if (todo.completed) return;

            if (isTodoEditable){
              edit()
            }
            else{
              setTodoEditable((prev)=>!prev)
            }
            }} 
        disabled={todo.completed}>
        {isTodoEditable ? "Save" : "Edit"}
      </button>

        {/* delete todo button */}
        <button 
          className="inline-flex p-2 rounded-lg text-sm font-bold border border-black/10 
          justify-center items-center bg-orange-500 hover:bg-red-500"
          onClick={()=>removeTodo(todo.id)}
          >
          Delete
        </button>

    </div>
  )
}

export default Show