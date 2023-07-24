import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import CompletedTodos from './CompletedTodos'


export default function App () {
  return (
    <Provider store={store}>
      <div className='App'>
        <h1>Todo App</h1>
        <TodoInput />
        <div className='list-container'>
          <TodoList />
          <CompletedTodos />
        </div>
      </div>
    </Provider>
  )
}
