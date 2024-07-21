import {useDispatch, useSelector} from 'react-redux'
import {removeTodo, editTodo} from '../features/todoSlice'
import { useState } from 'react'

function Todos({todo}){
    const dispatch = useDispatch()
    const [todoMsg,setTodoMsg] = useState(todo.text)
    const [isEditable,setIsEditable] = useState(false)

    

    return (
                <div className='w-full max-w-3xl flex items-center p-3 justify-between gap-3' >
                    <input 
                        type="text" 
                        value={todoMsg} 
                        readOnly={!isEditable} 
                        className={`w-[80%] outline-none p-1.5 rounded ${ isEditable ? "border-2 border-black bg-green-300 cursor-default" : "" }`}
                        onChange={(e)=>setTodoMsg(e.target.value)}
                    />

                    <div className='flex gap-1'>
                        <button 
                            type='button'
                            className='bg-red-500 px-4 py-1.5 rounded'
                            onClick={()=>dispatch(removeTodo(todo.id))}
                        > 
                        DEL
                        </button>

                        <button 
                            type='button'
                            className={`bg-green-500 px-4 py-1.5 rounded`}
                            onClick={()=>{
                                if (isEditable){
                                    dispatch(editTodo(todo.id,todoMsg))
                                    setIsEditable(false)
                                }
                                else{
                                    setIsEditable((prev)=>!prev)
                                }
                            }}
                        >
                        {`${isEditable ? "Save" : "Edit"}`}
                        </button>
                    </div>
                </div>
    )
}

export default Todos