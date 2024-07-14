import { useState } from "react"
import { TodoProvider } from "./context/TodoContext"
import Show from "./components/show"
import AddTodo from "./components/addTodo"
import { useEffect } from "react"

function App() {

  const [todos,setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos((prevList)=>[...prevList,{id:Date.now(),...todo}])
  }

  const editTodo = (id, todo )=>{
    setTodos((prevList)=>prevList.map((item)=> (id === item.id) ? todo : item))
  }

  const removeTodo = (id)=>{
    setTodos((prevList)=>prevList.filter((item)=> id !== item.id))
  }

  const toggleComplete = (id)=>{
    setTodos((prevList)=>prevList.map((item)=> (id===item.id) ? {...item,completed:!item.completed} : item))
  }

  // access items from the localstorage 
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  // set items in localestorage 
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (

    <TodoProvider value={{ todos, addTodo, editTodo, removeTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md bg-orange-500 rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4 p-4">
              <AddTodo />
            </div>
        </div>

        <div className="flex flex-wrap gap-y-3 p-4 max-w-3xl mx-auto">
          {todos.map((todo)=>
              <div key={todo.id} className="w-full"> 
                <Show todo={todo} />
              </div>
          )}
        </div>
      </div>
    </TodoProvider>
  )

}

export default App
