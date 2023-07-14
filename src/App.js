import React from './index.js'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { useState } from 'react'

function App () {
  const [todos, setTodos] = useState([])
  const [completedTodos, setCompletedTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }])
      setInputValue('')
    }
  }

  const handleToggleComplete = (index) => {
    const updatedTodos = [...todos]
    const updatedTodo = updatedTodos[index]
    updatedTodo.completed = !updatedTodo.completed
    setTodos(updatedTodos)

    if(updatedTodo.completed){
      setCompletedTodos([...completedTodos, updatedTodo])
    }
    else{
      const updatedCompletedTodos = completedTodos.filter(
        (todo) => todo !== updatedTodo
      )
      setCompletedTodos(updatedCompletedTodos)
    }
  }

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id || !todo.completed
    })
    setTodos(updatedTodos)

    const updatedCompleted = completedTodos.filter((todo) => {
      return todo.id !== id || !todo.completed
    })
    setCompletedTodos(updatedCompleted)
  }

  return (
    <div className= "App">
      <h1>Todo List</h1>
      <TodoInput
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleAddTodo={handleAddTodo}
        />
      <div className="list-container">
        <TodoList
          todos={todos}
          completedTodos={completedTodos}
          handleToggleComplete={handleToggleComplete}
          handleDeleteTodo={handleDeleteTodo}
          />
      </div>
    </div>
  )
}

export default App
