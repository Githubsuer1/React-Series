import { useState } from 'react'

function App() {
  const [input, setInput] = useState("")

  const handleSubmit = (value)=>{
    
    if (value === "AC"){
      setInput("")
    }
    else if (value === "DEL"){
        setInput((prev)=>prev.slice(0,-1))
    }
    else if (value === "="){
        setInput((prev)=>eval(prev))
    }
    else {
        setInput((prev)=>prev + value)
    }
  }




  return (
    <div className='w-full h-screen bg-blue-500'>
      <h1 className='bg-orange-500 p-4 text-3xl text-center font-bold'>Calculator App</h1>

      <div className='max-w-md grid grid-cols-1 border-2 p-5 ml-auto mr-auto mt-12 rounded-md'>
        <div className='w-full flex gap-3 '>
          <input className='py-3 px-4 w-[100%] rounded outline-none' type="text"  value={input} readOnly/>
        </div>

       

        <div className='max-w-md flex gap-3 mt-4 justify-between'>
          <button className='py-2 px-9 bg-orange-500 rounded' onClick={()=>handleSubmit('1')}>1</button>
          <button className='py-2 px-9 bg-orange-500 rounded' onClick={()=>handleSubmit('2')}>2</button>
          <button className='py-2 px-9 bg-orange-500 rounded' onClick={()=>handleSubmit('3')}>3</button>
          <button className='py-2 px-9 bg-orange-500 rounded' onClick={()=>handleSubmit('4')}>4</button>
        </div>

        <div className='max-w-md flex gap-3 mt-4 justify-between '>
          <button className='py-2 px-9 bg-orange-500 rounded' onClick={()=>handleSubmit('5')}>5</button>
          <button className='py-2 px-9 bg-orange-500 rounded' onClick={()=>handleSubmit('6')}>6</button>
          <button className='py-2 px-9 bg-orange-500 rounded' onClick={()=>handleSubmit('7')}>7</button>
          <button className='py-2 px-9 bg-orange-500 rounded' onClick={()=>handleSubmit('8')}>8</button>
        </div>

        <div className='max-w-md flex gap-3 mt-4 justify-between'>
          <button className='py-2 px-9 bg-orange-500 rounded' onClick={()=>handleSubmit('9')}>9</button>
          <button className='py-2 px-9 bg-orange-500 rounded' onClick={()=>handleSubmit('0')}>0</button>
          <button className='py-2 px-9 bg-orange-500 rounded' onClick={()=>handleSubmit('/')}>/</button>
          <button className='py-2 px-9 bg-orange-500 rounded' onClick={()=>handleSubmit('*')}>*</button>
        </div>

        <div className='max-w-md flex gap-3 mt-4 justify-between'>
          <button className='py-2 px-9 bg-orange-500 rounded' onClick={()=>handleSubmit('+')}>+</button>
          <button className='py-2 px-9 bg-orange-500 rounded' onClick={()=>handleSubmit('-')}>-</button>
          <button className='py-2 px-9 bg-orange-500 rounded' onClick={()=>handleSubmit('=')}>=</button>
          <button className='py-2 px-9 bg-orange-500 rounded font-bold' onClick={()=>handleSubmit('.')}>.</button>
        </div>

        <div className='max-w-md flex gap-3 mt-4 justify-around'>
          <button className='w-[50%] py-2 px-7 bg-orange-500 rounded' onClick={()=>handleSubmit('AC')}>AC</button>
          <button className=' w-[50%] py-2 px-7 bg-orange-500 rounded' onClick={()=>handleSubmit('DEL')}>DEL</button>
        </div>


      </div>
    </div>
  )
}

export default App
