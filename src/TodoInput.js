import React, { useReducer } from 'react'
import PropTypes from 'prop-types'

const todoInputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return { ...state, todoText: action.payload }
    case 'RESET':
      return { ...state, todoText: '' }
    default:
      return state
  }
}

const initialState = {
  todoText: ''
}

function TodoInput ({ onAddTodo }) {
  const [state, dispatch] = useReducer(todoInputReducer, initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (state.todoText.trim() !== '') {
      onAddTodo(state.todoText)
      dispatch({ type: 'RESET' })
    }
  }

  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={state.todoText}
          onChange={(e) => dispatch({ type: 'CHANGE', payload: e.target.value })}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

TodoInput.propTypes = {
  onAddTodo: PropTypes.func.isRequired
}

export default TodoInput
