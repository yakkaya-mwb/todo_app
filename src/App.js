import React, { useReducer } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import CompletedTodos from './CompletedTodos'

const ADD_TODO = 'ADD_TODO'
const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'
const DELETE_TODO = 'DELETE_TODO'

// Reducer function
function todoReducer (todos, action) {
  switch (action.type) {
    case ADD_TODO: {
      return [...todos, {
        id: action.id,
        text: action.text,
        completed: false
      }]
    }
    case TOGGLE_COMPLETE: {
      return todos.map(t => {
        if (t.id === action.id) {
          return {
            ...t,
            completed: !t.completed
          }
        } else {
          return t
        }
      })
    }
    case DELETE_TODO: {
      return todos.filter(t => t.id !== action.id)
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

export default function App () {
  const [todos, dispatch] = useReducer(
    todoReducer,
    []
  )

  function handleAddTodo (todoText) {
    dispatch({
      type: ADD_TODO,
      id: Date.now(),
      text: todoText
    })
  }

  function handleToggleComplete (todoId) {
    dispatch({
      type: TOGGLE_COMPLETE,
      id: todoId
    })
  }

  function handleDeleteTodo (todoId) {
    dispatch({
      type: DELETE_TODO,
      id: todoId
    })
  }

  return (
    <div className='App'>
      <h1>Todo App</h1>
      <TodoInput
        onAddTodo={handleAddTodo}
      />
      <div className='list-container'>
        <TodoList
          todos={todos}
          onToggleComplete={handleToggleComplete}
          onDeleteTodo={handleDeleteTodo}
        />
        <CompletedTodos
          todos={todos}
        />
      </div>
    </div>
  )
}
