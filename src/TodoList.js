import React from 'react'
import PropTypes from 'prop-types'

const TodoList = ({ todos, handleToggleComplete, handleDeleteTodo }) => {
  return (
    <div className='todo-container' id='list'>
          <h2>Todo</h2>
          <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(index)}
              />
              <span>{todo.text}</span>
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired,
  handleToggleComplete: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired
}

export default TodoList
