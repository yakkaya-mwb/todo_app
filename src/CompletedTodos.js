import React from 'react'
import { useSelector } from 'react-redux'
import { getCompletedTodos } from './redux/selectors'

export default function CompletedTodos () {
  const completedTodos = useSelector(getCompletedTodos)
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
