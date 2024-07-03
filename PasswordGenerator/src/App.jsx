// import { useState } from 'react

import { useCallback, useEffect, useState } from "react"


function App() {

  // useState hook, for state management 

  const [char,setChar] = useState(false)
  const [number,setNumber] = useState(false)
  const [length,setLength] = useState(8)
  const [password,setPassword] = useState("")

  // callback hook,allows to memoize a callback function so it's not recreated on every render, takes 2 args.
  // 1.callback function to memoize 2. An array of dependencies.(optional)

  const passwordGenerator = useCallback(()=>{

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // select special character's when checkbox will be clicked (if true)
    if(char){
      str = str + "!@#$%^&*()<>{}?"
    }

    // select numbers only when checkbox will be clicked (if true)
    if (number) {
      str = str + "0123456789"
    }

    // loop to store password in pass variable
    for(let i = 0;i<length;i++){
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(charIndex)
    }

    // passing password in setPassword to manage state.
    setPassword(pass)

  }, [number,length,char,setPassword] )

  // useEffect hook used to handle side effects like updating dom, API calls, setting timers.
  // takes 2 arguments,a function to run when the component mounts or updates (the "effects" function) and an optional array.
  
  useEffect(()=>{
      passwordGenerator()
  },[length,number,char,passwordGenerator])

  return (
    <div className='bg-orange-500 w-full h-screen'>
      <h1 className='bg-blue-500 p-4 text-center text-3xl font-bold'>Password Generator App</h1>


      <div className='max-w-lg border-2 p-5 ml-auto mr-auto mt-12 rounded'>

        {/* INPUT FIELD TO SHOW PASSWORD */}

          <input 
          className='p-3 rounded w-full' 
          type="text" 
          value={password} 
          readOnly 
          />

        {/* DIV TO CONTAIN RANGE (LENGTH) OF THE PASSWORD */}

          <div className='flex justify-between mt-10'>
              <div className="flex gap-2">
                  <input 
                  id='range' type="range" 
                  value={length} max={100} min={8} 
                  onChange={(event)=>setLength(event.target.value)}
                  />
                  <p>Length {length}</p>
              </div>

            {/* DIV TO CONTAIN CHARALLOWED CHECKBOX */}

            <div className='flex gap-2'>
              <label 
              className='font-bold' 
              htmlFor="char">
              Char</label>

              <input 
              id='char' 
              type="checkbox" 
              onChange={()=>setChar((prev)=>!prev)}
              />
            </div>

          {/* DIV TAG TO CONTAIN NUMBERALLOWED CHECKBOX */}

            <div className='flex gap-2'>
              <label 
              className='font-bold' 
              htmlFor="number">Number</label>
              <input 
              id='number' 
              type="checkbox" 
              defaultChecked={number} 
              onChange={()=>setNumber((prev)=>!prev)}
              />
            </div>

          </div>

      </div>
     
    </div>
  )
}

export default App
