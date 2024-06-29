import { useState } from 'react'

// app component 
function App() {

  // useState hook take any kind of data initially and return an array containing of a variable and a modifier function
  const [count, setCount] = useState(0)

  // arrow function add to increase the count by 1
  const add = ()=>{
    setCount(count+1)
  }

  // arrow function to decrease the count by 1
  const remove = ()=>{
    setCount(count>1 ? count-1 : 0)
  }

  return (
    <div className='bg-gray-500 w-full h-screen'>
        <h1 className='text-2xl font-bold text-center bg-blue-500 py-5'>Counter App</h1>

        <div className='w-72 h-64 border-2 mr-auto ml-auto mt-10 rounded grid place-items-center rounded'>
          
          <button className='bg-orange-500 p-5 rounded-full' onClick={add}>Increase</button>
          <p>{count}</p>
          <button className='bg-orange-500 p-5 rounded-full' onClick={remove}>Decrease</button>

        </div>

    </div>
  )
}

export default App
