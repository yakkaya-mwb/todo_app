import React from './index.js'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import CompletedTodos from './CompletedTodos.js'
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
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false
      }

      setTodos([...todos, newTodo])
      setInputValue('')
    }
  }

  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    setTodos(updatedTodos)
    const updatedCompletedTodos = updatedTodos.filter((todo) => todo.completed)
    setCompletedTodos(updatedCompletedTodos)
  }

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(updatedTodos)

    const updatedCompleted = completedTodos.filter((todo) => {
      return todo.id !== id
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
          handleToggleComplete={handleToggleComplete}
          handleDeleteTodo={handleDeleteTodo}
          />
        <CompletedTodos
          completedTodos={completedTodos}
          />
      </div>
    </div>
  )
}

export default App
