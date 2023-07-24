import { createSelector } from 'reselect'

const selectTodos = (state) => state.todos

export const getAllTodos = createSelector(
  selectTodos,
  (todos) => todos
)

export const getCompletedTodos = createSelector(
  selectTodos,
  (todos) => todos.filter((todo) => todo.completed)
)
