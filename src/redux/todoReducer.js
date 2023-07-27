import { ADD_TODO, TOGGLE_COMPLETE, DELETE_TODO } from './actions'

const initialState = {
  todos: []
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]

    case TOGGLE_COMPLETE:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id)

    default:
      return state
  }
}

export default todoReducer
