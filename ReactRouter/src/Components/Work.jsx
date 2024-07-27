import { NavLink } from "react-router-dom"

const Work = ()=>{
    return (
        <div className="w-full bg-purple-400 h-full p-5  grid justify-items-center gap-3">
        
        <div className="p-4 w-full max-w-xl bg-white/40 shadow-2xl grid grid-cols-1 sm:grid-cols-1  justify-items-center gap-3">

        
           <div className="w-full  max-w-sm">
            <NavLink 
                    to='https://githubsuer1.github.io/React-Series/'
                    className=' bg-white/40 rounded shadow-2xl p-8  box-border flex flex-col gap-3 overflow-hidden'
                >
                    
                    <p className='text-center py-2.5 bg-blue-400 rounded'>Todo List </p>
                </NavLink>  
            </div>

            <div className="w-full  max-w-sm">
            <NavLink 
                    to=''
                    className=' bg-white/40 rounded shadow-2xl p-8   box-border flex flex-col gap-3 overflow-hidden'
                >
                    
                    <p className='text-center py-2.5  bg-blue-400 rounded'>Weather App</p>
                </NavLink>  
            </div>  

            <div className="w-full  max-w-sm">
            <NavLink 
                    to=''
                    className=' bg-white/40 rounded shadow-2xl p-8   box-border flex flex-col gap-3 overflow-hidden'
                >
                    
                    <p className='text-center py-2.5 bg-blue-400 rounded'>Calculator</p>
                </NavLink>  
            </div> 

            <div className="w-full  max-w-sm">
            <NavLink 
                    to=''
                    className=' bg-white/40 rounded shadow-2xl p-8   box-border flex flex-col gap-3 overflow-hidden'
                >
                    
                    <p className='text-center py-2.5 bg-blue-400 rounded'>Password Generator</p>
                </NavLink>  
            </div> 

            <div className="w-full  max-w-sm">
            <NavLink 
                    to=''
                    className=' bg-white/40 rounded shadow-2xl p-8  box-border flex flex-col gap-3 overflow-hidden'
                >
                    
                    <p className='text-center py-2.5 bg-blue-400 rounded'>Currency Converter</p>
                </NavLink>  
            </div> 

            <div className="w-full  max-w-sm">
            <NavLink 
                    to=''
                    className=' bg-white/40 rounded shadow-2xl p-8  box-border flex flex-col gap-3 overflow-hidden'
                >
                    <p className='text-center py-2.5 bg-blue-400 rounded'>Shoping Cart</p>
                </NavLink>  
            </div> 
            
            <div className="w-full  max-w-sm">
            <NavLink 
                    to=''
                    className=' bg-white/40 rounded shadow-2xl p-8   box-border flex flex-col gap-3 overflow-hidden'
                >
                    
                    <p className='text-center py-2.5 bg-blue-400 rounded'>BMI Generator</p>
                </NavLink>  
            </div> 
            </div>
        </div>
    )
}

export default Work