import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './redux/actions'

function TodoInput () {
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim() === '') return
    const newId = Date.now()
    dispatch(addTodo(newId, text))
    setText('')
  }

  return (
    <div className='input-container'>
      <form onSubmit={handleSubmit} className='todo-input'>
        <input type='text' value={text} onChange={handleChange} placeholder='Enter a new todo' />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  )
}

export default TodoInput
