import { useContext } from 'react'
import TodoContext from './TodoContext/TodoContext'

function Button() {

    const {count, setCount} = useContext(TodoContext)
    
  return (
    <div className='w-full h-screen flex flex-col gap-3 justify-center items-center'>
        <button className='py-2 px-4 bg-blue-500 rounded' onClick={()=>setCount(count+1)}>Increment</button>
        <button className='py-2 px-4 bg-blue-500 rounded' onClick={()=>setCount(count>0 ? count-1 : 0)}>Decrement</button>
        <h1>Count value: {count}</h1>
    </div>
  )
}

export default Button