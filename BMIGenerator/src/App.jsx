import { useState } from 'react'


function App() {
  const [hight,setHight] = useState("")
  const [weight,setWeight] = useState("")
  const [bmi,setBMI] = useState("")

  const handleBMI = ()=>{
    if ((hight === "") || (weight === "")){
      setBMI("< Enter hight and weight....> ")
    }
    else if (hight <= 0 || weight <= 0) {
      setBMI("< Enter positive hight and weight....> ")
    }
    else{
      let cBMI = weight/(hight)**2
      setBMI(cBMI)
      setHight("")
      setWeight("")
    }
  }
  return (
    <>
     <div className='w-full h-screen bg-orange-500'>
      <h1 className='text-center font-bold p-4 bg-gray-500'>BMI Generator</h1>

      <div className='max-w-lg p-4 border-2 ml-auto mr-auto mt-12 rounded'>

        <div className='w-full p-2 flex flex-col border-box gap-3'>
          <input 
          className='p-3 rounded text-red-500' 
          type="text" 
          placeholder='Enter Hight in meters' 
          onChange={(event)=>setHight(event.target.value)} 
          value={hight}
          />

          <input 
          className='p-3 rounded text-red-500' 
          type="text" 
          placeholder='Enter weight in kilograms'
          onChange={(event)=>setWeight(event.target.value)}
          value={weight}
          />

          <button className='w-full bg-blue-500 p-3 rounded text-white' onClick={handleBMI}>Calculate</button>

          <h1 className='text-white font-bold'>Your BMI is: {bmi} </h1>
        </div>

        <div className='p-2 flex flex-col gap-2'>
          <h1 className='text-white font-bold'>BMI Categories</h1>
          <p>Underweight : 18.5</p>
          <p>Normal weight : 18.5 - 24.9</p>
          <p>Overweight : 25 - 29.9 </p>
          <p>Obesity : BMI of 30 or greater.</p>
        </div>

      </div>
      
     </div>
    </>
  )
}

export default App
