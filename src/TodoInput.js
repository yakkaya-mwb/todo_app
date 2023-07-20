import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './redux/actions'
import PropTypes from 'prop-types'

function TodoInput ({ addTodo }) {
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim() === '') return
    const newId = Date.now()
    addTodo(newId, text)
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

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (id, text) => dispatch(addTodo(id, text))
  }
}

export default connect(null, mapDispatchToProps)(TodoInput)
