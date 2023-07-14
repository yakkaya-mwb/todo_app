import React from 'react'
import PropTypes from 'prop-types'

const TodoInput = ({ inputValue, handleInputChange, handleAddTodo }) => {
  return (
        <div className="input-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  )
}

TodoInput.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleAddTodo: PropTypes.func.isRequired
}

export default TodoInput
