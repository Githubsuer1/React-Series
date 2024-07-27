import {NavLink} from "react-router-dom"

const Header = ()=>{
    return (
        <nav className="bg-gray-800 grid grid-cols-1 sm:grid-cols-2 p-3.5 sm:sticky top-0">
            <div className="flex items-center" >
                <NavLink 
                className="text-white text-md sm:text-xl font-bold" 
                to='#'>
                Siddhant Mishra</NavLink>
            </div>

            <div className={`grid grid-cols-1 sm:grid-cols-4  items-center sm:justify-items-center gap-1.5 mt-2` }>

                <NavLink 
                    className={({isActive})=>`sm:bg-transparent bg-gray-600 text-white text-md sm:text-lg font-bold px-1.5 rounded 
                    ${ isActive ? "text-red-500" : "text-white" }`} 
                    to='/contact'
                >
                Connect Me</NavLink>

                

                <NavLink 
                    className={({isActive})=>`sm:bg-transparent bg-gray-600 text-white text-md sm:text-lg font-bold px-1.5 rounded 
                    ${isActive ? "text-red-500" : "text-white" }`} 
                    to=''
                >
                About Me</NavLink>

                <NavLink 
                    className={({isActive})=>`sm:bg-transparent bg-gray-600 text-white text-md sm:text-lg font-bold px-1.5 rounded 
                    ${isActive ? "text-red-500" : "text-white" }`} 
                    to='/work'
                >
                Project</NavLink>

                <NavLink 
                    className={({isActive})=>`sm:bg-transparent bg-gray-600 text-white text-md sm:text-lg font-bold px-1.5 rounded 
                    ${isActive ? "text-red-500" : "text-white" }`} 
                    to='/skills'
                >
                Skills</NavLink>
            </div>
        </nav>
    )
}

export default Header




