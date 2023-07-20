import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

function CompletedTodos () {
  const todos = useSelector((state) => state.todos)
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

export default CompletedTodos
