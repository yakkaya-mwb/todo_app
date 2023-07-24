export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'
export const DELETE_TODO = 'DELETE_TODO'

export const addTodo = (id, text) => ({
  type: ADD_TODO,
  id,
  text
})

export const toggleComplete = (id) => ({
  type: TOGGLE_COMPLETE,
  id
})

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id
})
