import React from 'react'
import PropTypes from 'prop-types'

export default function CompletedTodos ({ todos }) {
  const completedTodos = todos.filter((todo) => todo.completed)
  return (
    <div className="completed-todos" id='list'>
        <h2>Completed Todos</h2>
        <ul>
            {completedTodos.map((todo) => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    </div>
  )
}

CompletedTodos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired
}
