import React from 'react'
import TodoList from './TodoList'
import '@testing-library/jest-dom/extend-expect'
import { jest, describe, expect, test } from '@jest/globals'
import { render, screen, fireEvent } from '@testing-library/react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleComplete, deleteTodo } from './redux/actions'

jest.mock('react-redux')

describe('TodoList Component', () => {
  test('should render todos correctly', () => {
    const mockTodos = [
      { id: 1, text: 'Todo 1', completed: false },
      { id: 2, text: 'Todo 2', completed: true }
    ]
    useSelector.mockReturnValue(mockTodos)
    render(<TodoList/>)
    mockTodos.forEach((todo) => {
      const todoTextElement = screen.getByText(todo.text)
      expect(todoTextElement).toBeInTheDocument()
    })
  })

  test('should dispatch toggleComplete when checkbox is clicked', () => {
    const mockTodo = { id: 1, text: 'Todo 1', completed: false }
    useSelector.mockReturnValue([mockTodo])

    const mockDispatch = jest.fn()
    useDispatch.mockReturnValue(mockDispatch)

    render(<TodoList />)

    const checkbox = screen.getByRole('checkbox', { name: '' })
    fireEvent.click(checkbox)

    expect(mockDispatch).toHaveBeenCalledWith(toggleComplete(mockTodo.id))
  })

  test('should dispatch deleteTodo when delete button is clicked', () => {
    const mockTodo = { id: 1, text: 'Todo 1', completed: false }
    useSelector.mockReturnValue([mockTodo])

    const mockDispatch = jest.fn()
    useDispatch.mockReturnValue(mockDispatch)

    render(<TodoList/>)

    const deleteButton = screen.getByRole('button', { name: /Delete/i })
    fireEvent.click(deleteButton)

    expect(mockDispatch).toHaveBeenCalledWith(deleteTodo(mockTodo.id))
  })
})
