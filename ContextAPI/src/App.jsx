import Button from './button.jsx'
import TodoProvider from './TodoContext/TodoProvider.jsx'

function App() {
  

  return (
    <TodoProvider>
      <Button />
    </TodoProvider>
  )
}

export default App
