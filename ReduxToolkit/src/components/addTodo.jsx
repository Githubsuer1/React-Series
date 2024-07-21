import { useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { Store } from "../features/store"
import {addTodo} from '../features/todoSlice'

function AddTodo(){

    const [input,setInput] = useState('')
    const dispatch = useDispatch()
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (!input) return
        dispatch(addTodo(input))
        setInput('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="w-full p-4 bg-green-300 flex rounded">
                <input 
                    type="text"
                    className="w-full p-1.5 rounded-l outline-none"
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    />
                <button type="submit" className="bg-green-500 px-3 py-1.5 rounded-r border">Add</button>
            </div>
        </form>
    )
}
export default AddTodo