import React from 'react'
import PropTypes from 'prop-types'

const TodoList = ({ todos, completedTodos, handleToggleComplete, handleDeleteTodo }) => {
  return (
    <><div className="active" id="todo-container">
          <h2>active todos</h2>
          <ul>
              {todos.map((todo, index) => (
                  <li
                      key={index}
                      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                      onClick={() => handleToggleComplete(index)}
                  >
                      {todo.text}
                  </li>
              ))}
          </ul>
      </div><div className="completed" id="todo-container">
              <h2>completed todos</h2>
              <ul>
                  {completedTodos.map((todo, index) => (
                      <li key={index}>
                          <span>{todo.text}</span>
                          {todo.completed && <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>}
                      </li>
                  ))}
              </ul>
          </div></>
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
  completedTodos: PropTypes.arrayOf(
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
