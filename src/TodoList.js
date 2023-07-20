import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { toggleComplete, deleteTodo } from './redux/actions'

function TodoList ({ todos, toggleComplete, deleteTodo }) {
  const handleToggle = (id) => {
    toggleComplete(id)
  }

  const handleDelete = (id) => {
    deleteTodo(id)
  }
  return (
    <div className='todo-container' id='list'>
        <h2>Todo</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
              />
              <span>{todo.text}</span>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
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
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleComplete: (id) => dispatch(toggleComplete(id)),
    deleteTodo: (id) => dispatch(deleteTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
