import React from 'react'
import { jest, describe, expect, test } from '@jest/globals'
import { render, screen, fireEvent } from '@testing-library/react'
import TodoInput from './TodoInput'
import { useDispatch } from 'react-redux'
import { addTodo } from './redux/actions'

jest.mock('react-redux')

describe('TodoInput Component', () => {
  test('input field updates the state correctly', () => {
    render(<TodoInput/>)
    const inputElement = screen.getByPlaceholderText('Enter a new todo')
    fireEvent.change(inputElement, { target: { value: 'New todo item' } })
    expect(inputElement.value).toBe('New todo item')
  })

  test('submitting the form calls the handleSubmit function', () => {
    const mockDispatch = jest.fn()
    useDispatch.mockReturnValue(mockDispatch)
    render(<TodoInput/>)
    const inputElement = screen.getByPlaceholderText('Enter a new todo')
    const submitButton = screen.getByRole('button', { name: /Add Todo/i })
    fireEvent.change(inputElement, { target: { value: 'New todo item' } })
    fireEvent.click(submitButton)
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })

  test('dispatch function is called with the correct arguments', () => {
    const mockDispatch = jest.fn()
    useDispatch.mockReturnValue(mockDispatch)
    render(<TodoInput/>)
    const inputElement = screen.getByPlaceholderText('Enter a new todo')
    const submitButton = screen.getByRole('button', { name: /Add Todo/i })
    fireEvent.change(inputElement, { target: { value: 'New todo item' } })
    fireEvent.click(submitButton)
    expect(mockDispatch).toHaveBeenCalledWith(addTodo(expect.any(Number), 'New todo item'))
  })

  test('state is cleared after submitting the form', () => {
    const mockDispatch = jest.fn()
    useDispatch.mockReturnValue(mockDispatch)
    render(<TodoInput/>)
    const inputElement = screen.getByPlaceholderText('Enter a new todo')
    const submitButton = screen.getByRole('button', { name: /Add Todo/i })
    fireEvent.change(inputElement, { target: { value: 'New todo item' } })
    fireEvent.click(submitButton)
    expect(inputElement.value).toBe('')
  })
})
