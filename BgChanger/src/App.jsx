import { useState } from 'react'


function App() {
  // useState hook to use variable and modifier function to perform bgChanger Operation
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen absolute' style={{backgroundColor:color}}>
      <h1 className='bg-blue-500 py-3 text-center text-3xl font-bold'>BackGround Changer</h1>
        <div className='w-full h-32 absolute bottom-0 '>
          <div className='h-16 w-full bg-white flex items-center max-w-md rounded ml-auto mr-auto justify-center gap-3'>
            <button className='bg-red-600 text-white rounded-full py-2 px-3' onClick={()=>setColor('red')}>Red</button>
            <button className='bg-blue-600 text-white rounded-full py-2 px-3' onClick={()=>setColor('blue')}>Blue</button>
            <button className='bg-yellow-600 text-white rounded-full py-2 px-3' onClick={()=>setColor('yellow')}>Yellow</button>
            <button className='bg-purple-600 text-white rounded-full py-2 px-3' onClick={()=>setColor('purple')}>Purple</button>
            <button className='bg-green-900 text-white rounded-full py-2 px-3' onClick={()=>setColor('green')}>Green</button>
            <button className='bg-black text-white rounded-full py-2 px-3' onClick={()=>setColor('black')}>Black</button>
          </div>
        </div>
    </div>
  )
}

export default App
