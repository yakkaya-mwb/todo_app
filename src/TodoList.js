import React from 'react'
import { getAllTodos } from './redux/selectors'
import { toggleComplete, deleteTodo } from './redux/actions'
import { useDispatch, useSelector } from 'react-redux'

export default function TodoList () {
  const dispatch = useDispatch()
  const todos = useSelector(getAllTodos)
  return (
    <div className='todo-container' id='list'>
        <h2>Todo</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleComplete(todo.id))}
              />
              <span>{todo.text}</span>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
  )
}
