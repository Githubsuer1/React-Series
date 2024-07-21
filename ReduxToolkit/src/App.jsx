import { useState } from 'react'
import Todos from './components/Todos'
import AddTodo from './components/addTodo'
import { useSelector } from 'react-redux'

function App() {
  const todos = useSelector((state)=>state.todos)

  return (
    <div className='w-full h-screen bg-gray-600 flex flex-col items-center'>
        <h1 className='bg-orange-500 p-4 text-center text-xl w-full'>Redux Toolkit </h1>

        <div className='w-full p-5 max-w-3xl bg-gray-600 shadow-2xl mt-5'>
            <AddTodo />
        </div>


        {
            todos.map((todo)=> 
            
              <div className='w-full max-w-2xl rounded' key={todo.id}>
                <Todos  todo={todo} />
              </div>
            )
        }
          
        
    </div>
  )
}

export default App
