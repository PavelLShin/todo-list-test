import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Todo from './Todo'

describe('Todo component', () => {
  const todos = { text: 'Помыть полы', isCompleted: false, id: '123' }
  const doneTodos = { text: 'Помыть полы', isCompleted: true, id: '123' }
  test('Todo renders', () => {
    render(<Todo todo={todos} deleteTodo={() => {}} toggleTodo={() => {}} />)
    expect(screen.getByText('Помыть полы')).toBeInTheDocument()
  })
  test('Todo snapshot', () => {
    const todo = render(
      <Todo todo={todos} deleteTodo={() => {}} toggleTodo={() => {}} />
    )
    expect(todo).toMatchSnapshot()
  })
  test('dinamyc styles works', () => {
    render(<Todo todo={todos} deleteTodo={() => {}} toggleTodo={() => {}} />)
    expect(screen.getByRole('listitem')).toHaveClass('active_txt')
  })
  test('dinamyc styles works (done)', () => {
    render(
      <Todo todo={doneTodos} deleteTodo={() => {}} toggleTodo={() => {}} />
    )
    expect(screen.getByRole('listitem')).toHaveClass('done_txt')
  })
})
