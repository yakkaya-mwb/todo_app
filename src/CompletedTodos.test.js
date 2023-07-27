import React from 'react'
import CompletedTodos from './CompletedTodos'
import '@testing-library/jest-dom/extend-expect'
import { jest, describe, expect, test } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { useSelector } from 'react-redux'

jest.mock('react-redux')

describe('Completed Todos Component', () => {
  const mockCompletedTodos = [
    { id: 1, text: 'Completed Todo 1', completed: true },
    { id: 2, text: 'Completed Todo 2', completed: true },
    { id: 3, text: 'Todo 3', completed: false },
    { id: 4, text: 'Todo 4', completed: false }
  ]

  test('renders only completed todos', () => {
    useSelector.mockReturnValue(mockCompletedTodos)
    render(<CompletedTodos/>)
    mockCompletedTodos.forEach((todo) => {
      const todoTextElement = screen.getByText(todo.text)
      expect(todoTextElement).toBeInTheDocument()
    })
  })

  test('non-completed todos are not rendered', () => {
    const nonCompletedTodos = mockCompletedTodos.filter((todo) => !todo.completed)
    nonCompletedTodos.forEach((todo) => {
      const todoElement = screen.queryByText(todo.text)
      expect(todoElement).toBeNull()
    })
  })
})
