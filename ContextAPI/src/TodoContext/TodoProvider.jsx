import React from 'react'
import TodoContext from './TodoContext'

function TodoProvider({children}) {

    const [count, setCount] = React.useState(0)

  return (
    <TodoContext.Provider value={{count, setCount}}>
    {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider