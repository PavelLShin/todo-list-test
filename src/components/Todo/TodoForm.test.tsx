import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TodoForm from './TodoForm'

describe('TodoForm component', () => {
  test('TodoForm renders component', () => {
    render(<TodoForm addTodo={() => {}} />)
    expect(
      screen.getByPlaceholderText(/What needs to be done?/i)
    ).toBeInTheDocument()
  })
  test('TodoForm snapshot', () => {
    const todoForm = render(<TodoForm addTodo={() => {}} />)
    expect(todoForm).toMatchSnapshot()
  })
})
