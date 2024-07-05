import { useState } from 'react'

const api = {
  key:"1da13815b65d36e851d1d2f96707b35c",
  base:"https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [input, setInput] = useState('')
  const [weather, setWeather] = useState({})

  const search = e =>{
      if (e.key == "Enter"){
        fetch(`${api.base}weather?q=${input}&units=metric&APPID=${api.key}`)
        .then((response) => response.json())
        .then((data) => {
            setWeather(data)
            setInput('')
            console.log(data);
        })
      }
  }

  const dateBuilder = (d) =>{
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`
    
  }
  // 'w-full h-screen bg-blue-500 px-4'
  return (
    <>
    
     <main 
     className={`w-full h-screen bg-blue-500 px-4 
     ${(typeof weather.main != "undefined") ? 
     ((weather.main.temp > 16) ? ("bg-[url('./assets/37.jpg')] bg-cover bg-center") : ("bg-[url(./assets/24.jpg)] bg-cover bg-center")) :
    ("")}
    `}>

      <div className='max-w-4xl h-20 ml-auto mr-auto grid grid-cols-1'>
        <input 
        type="text"
        placeholder='Search...'
        className='w-5/6 md:w-md sm:w-sm p-3 h-12 rounded ml-auto mr-auto rounded-bl-lg rounded-br-lg outline-none shadow-2'
        onChange={e=>setInput(e.target.value)}
        value={input}
        onKeyPress={search}
        />
      </div>

      {
      (typeof weather.main != "undefined") ? 
      (
        <div className='max-w-md h-auto py-4 border-2 mr-auto ml-auto rounded'>
          <h1 className='text-center text-white font-bold text-xl md:text-2xl'>{weather.name}, {weather.sys.country} </h1>

          <div className=' flex justify-center mt-4 text-white font-bold text-2xl md:text-3xl'>{dateBuilder(new Date())}</div>

          <div className='flex justify-center mt-4 text-white font-bold  text-3xl md:text-6xl'>
            {Math.round(weather.main.temp)}°C , {weather.weather[0].main}
          </div>
        </div>      

      ) : ("")}
      
     </main>
    </>
  )
}

export default App
